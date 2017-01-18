<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$lat_courante= trim(strip_tags($request -> lat));
$lon_courante= trim(strip_tags($request -> lng));
//$lat_courante= 43.353010299;
//$lon_courante= 1.623376199;

	
	include('cleaningBase.php');
	// Perimètre en km
	$distance_choisie = 5;
	include('bd.php');
	$formule="(6366*acos(cos(radians(?))*cos(radians(`lat`))*cos(radians(`lng`) -radians(?))+sin(radians(?))*sin(radians(`lat`))))";
	$sql= $bdd->prepare("SELECT * FROM alert WHERE ".$formule." <= ?");
	$sql -> execute(array($lat_courante,$lon_courante,$lat_courante,$distance_choisie));
	$results = $sql->fetchAll();
	
	if (count($results) > 1){
		
		//header('Content-Type: application/json');
		echo json_encode($results);
		
	}else {
		
		//header('Content-Type: application/json');
		echo json_encode("ko");
	}
	
	// Si > 3 on 
?>