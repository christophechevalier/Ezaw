<?php
try
{
	header("Access-Control-Allow-Origin: *");


	//$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	include('bd.php');
	$data = $bdd->prepare("SELECT * FROM alert");
	$data->execute();
	$result = $data->fetchAll();


	header('Content-Type: application/json');
	echo json_encode($result);
	
}
catch (Exception $e)
{
	die("Erreur : " . $e->getMessage());
}
?>