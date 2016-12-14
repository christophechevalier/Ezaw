<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$login = trim(strip_tags($request -> username));
$passwd = trim(strip_tags($request -> password));
//$mail = trim(strip_tags($request -> emailAdress));


if($login == "") die("Erreur : login non renseigné"); 
if($passwd == "") die("Erreur : password non renseigné"); 

try
{
	include('bd.php');
	$query = $bdd->prepare("SELECT * from user WHERE username = ? and password = ? ");
	$query-> execute(array($login,$passwd));
	$results = $query->fetchAll();
	
	
	if(count($results) == 1){
		
		echo json_encode("ok");
		
	}else{
		

		echo json_encode("ko");
	}
}
catch (Exception $e){
	die("Erreur : " . $e->getMessage());
}

?>