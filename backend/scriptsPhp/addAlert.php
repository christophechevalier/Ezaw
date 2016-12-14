<?php
	error_reporting(E_ALL);
	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	$postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
	$type = trim(strip_tags($request -> thetype));
	$lat = trim(strip_tags($request -> lat));
	$lon = trim(strip_tags($request -> lon));
	$userID = trim(strip_tags($request -> userID));
	if($type == "") die("Erreur : type non renseigné");
	if($lat == "") die("Erreur : lat non renseigné"); 
	if($lon == "") die("Erreur : lon non renseigné"); 
	if($userID == "") die("Erreur : id of user non renseigné"); 

	try{
		include('bd.php');
		include('functions.php');
		getNearAlert($lat,$lon,$userID,$type,$bdd);
	}catch (Exception $e){
		die("Erreur : " . $e->getMessage());
	}
?>


