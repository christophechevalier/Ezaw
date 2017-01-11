<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
//ini_set('display_errors', 1);
//$postdata = file_get_contents("php://input");
//$request = json_decode($postdata);
//$id_marqueur = trim(strip_tags($request -> id));
	
	$id_marqueur = 56;
	include('bd.php');
	$query = $bdd->prepare("SELECT * FROM alert WHERE id = ?");
	$query->execute(array($id_marqueur));
	
	
	
	while ($donnees = $query -> fetch())
	{
		if($donnees['compteur_like'] < 6){
						$dateBase = $donnees['date_expir'];
						$date = new DateTime(trim($dateBase));
						$date->modify("+15 minutes");
						$dateInsert = $date ->format('Y-m-d H:i:s');
						$compteurLike = intval($donnees['compteur_like']+1);
						include('bd.php');
						$sql= $bdd->prepare('UPDATE alert SET date_expir = ? , compteur_like = ? WHERE id = ?');
						$sql -> execute(array($dateInsert,intval($compteurLike),$id_marqueur));
						$results = $sql->rowCount();
						echo($results);

		}else{
				
			echo("ko");
		}
	}





?>