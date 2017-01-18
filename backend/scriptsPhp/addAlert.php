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
//	$lat = 48.862725;
//	$lon = 2.287592000000018;
//	$type = 3;
	
	$distance_choisie = 1;
	include('bd.php');
	$formule="(6366*acos(cos(radians(?))*cos(radians(`lat`))*cos(radians(`lng`) -radians(?))+sin(radians(?))*sin(radians(`lat`))))";
	$sql= $bdd->prepare("SELECT * FROM alert WHERE ".$formule." <= ? AND type = ?");
	$sql -> execute(array($lat,$lon,$lat,$distance_choisie,$type));
	$results = $sql->fetchAll();
	
	
	//echo($results);
	
	if (count($results) >= 1){

	if($results[0]['compteur_like'] < 6){
						$dateBase = $results[0]['date_expir'];
						$date = new DateTime(trim($dateBase));
						$date->modify("+15 minutes");
						$dateInsert = $date ->format('Y-m-d H:i:s');
						$compteurLike = intval($results[0]['compteur_like']+1);
						include('bd.php');
						$sql= $bdd->prepare('UPDATE alert SET date_expir = ? , compteur_like = ? WHERE id = ?');
						$sql -> execute(array($dateInsert,intval($compteurLike),$results[0]['id']));
						$resultsUpdate = $sql->rowCount();
						echo json_encode("ko");

		}else{
				
			echo json_encode("ko");
		}
		
	}else {
		
	$date = new DateTime();
	$dateNow  = $date->format('Y-m-d H:i:s');
	$date->modify("+300 minutes");
	$dateExp = $date->format('Y-m-d H:i:s');
	include('bd.php');
	$query = $bdd->prepare("INSERT INTO alert (type,lat,lng,date_ajout,date_expir,compteur_dislike,compteur_like) VALUES (? , ? , ? , ? , ? , 0,0)");
	$query->execute(array(intval($type), $lat, $lon, $dateNow, $dateExp));
	$lastId = $bdd->lastInsertId();

	//echo ($lastId);
	echo json_encode($lastId);
	}
	

?>