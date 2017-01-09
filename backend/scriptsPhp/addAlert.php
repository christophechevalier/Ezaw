<?php

	header("Access-Control-Allow-Origin: *");
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$lat= trim(strip_tags($request -> lat));
	$lon= trim(strip_tags($request -> lng));
	$type = trim(strip_tags($request -> type));
	
	if($lat == null){
		echo json_encode("KO LAT");
	}
	if($lon == null){
		echo json_encode("KO LNG");
	}
	
	if ($type == null){
		echo json_encode("KO TYPE");
	}

	//alert($lat);
	//$lat = 21.21;
	//$lon = 22.31;
	//$type = "coucou";
	
	$distance_choisie = 0.5;
	include('bd.php');
	$formule="(6366*acos(cos(radians(?))*cos(radians(`lat`))*cos(radians(`lng`) -radians(?))+sin(radians(?))*sin(radians(`lat`))))";
	$sql= $bdd->prepare("SELECT * FROM alert WHERE ".$formule." <= ? AND type = ?");
	$sql -> execute(array($lat,$lon,$lat,$distance_choisie,$type));
	$results = $sql->fetchAll();
	
	if (count($results) > 1){
		
		//header('Content-Type: application/json');
		//echo json_encode($results);
		echo json_encode("OK");
		
	}else {
		
	$date = new DateTime();
	$dateNow  = $date->format('Y-m-d H:i:s');
	$date->modify("+300 minutes");
	$dateExp = $date->format('Y-m-d H:i:s');
	include('bd.php');
	$query = $bdd->prepare("INSERT INTO alert (type,lat,lng,date_ajout,date_expir,compt) VALUES (? , ? , ? , ? , ? , 1)");
	$query->execute(array(intval($type), $lat, $lon, $dateNow, $dateExp));
	$lastId = $bdd->lastInsertId();

	//echo ($lastId);
	echo json_encode($lastId);
	}
	

?>