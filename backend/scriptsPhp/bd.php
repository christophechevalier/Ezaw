<?php
    $db_name  = 'ezaw';
    $hostname = 'localhost:3306';
    $username = 'root';
    $password = '';
	
	$bdd = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);
	$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>