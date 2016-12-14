<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$login = trim(strip_tags($request -> username));
$passwd = trim(strip_tags($request -> password));
$mail = trim(strip_tags($request -> emailAdress));


if($login == "") die("Erreur : login non renseigné"); 
if($passwd == "") die("Erreur : password non renseigné"); 

try
{
	include('bd.php');
	
	$query = $bdd->prepare("SELECT * from user WHERE username = ? ");
	$query-> execute(array($login));
	
	if ($query->fetchColumn() > 0) {
		
		echo json_encode("ko");
		
	}else{
		
			$query = $bdd->prepare("INSERT INTO user (username,mail,password) VALUES (? , ? , ?)");
			$query->execute(array($login,$mail,$passwd));
			//$query->execute(array("jojo", "jojo", "jojo"));0
			echo json_encode("ok");
	}
	
	

	
	
}
catch (Exception $e){
	die("Erreur : " . $e->getMessage());
}

?>