<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
	
	$date = new DateTime();
	$dateInsert = $date ->format('Y-m-d H:i:s');
	
	
	include('bd.php');
	$query = $bdd->prepare("DELETE FROM alert WHERE date_expir < ? ");
	$query->execute(array($dateInsert));
	$results = $query->rowCount();
	
	include('bd.php');
	$queryDelete = $bdd->prepare("DELETE FROM alert WHERE compteur_dislike > 5 ");
	$queryDelete->execute();
	$resultsDelete = $queryDelete->rowCount();
	

?>