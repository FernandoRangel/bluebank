<?php
function conectar() {
	try {
		$pdo = new PDO("mysql:host=localhost;dbname=blueBank", "root", "", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
	} catch (PDOException $e) {
		echo $e->getMessage();
	}
	return $pdo;
}
?>