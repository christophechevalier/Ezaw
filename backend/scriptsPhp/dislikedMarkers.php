<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$id_marqueur = trim(strip_tags($request -> id));
	
	//$id_marqueur = 56;
	include('bd.php');
	$query = $bdd->prepare("SELECT * FROM alert WHERE id = ?");
	$query->execute(array($id_marqueur));
	
	
	
	while ($donnees = $query -> fetch())
	{
		if($donnees['compteur_dislike'] < 6){
						$compteurDislike = intval($donnees['compteur_dislike']+1);
						include('bd.php');
						$sql= $bdd->prepare('UPDATE alert SET compteur_dislike = ? WHERE id = ?');
						$sql -> execute(array(intval($compteurDislike),$id_marqueur));
						$results = $sql->rowCount();
						echo json_encode("ok");

		}else{	
			echo json_encode("ko");
		}
	}





?>