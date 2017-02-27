<?php
include("conexao.php");
$pdo = conectar();

if (file_get_contents("php://input")) {
	$request = json_decode(file_get_contents("php://input"));
	switch ($request->metodo) {
		case 'getAgencia':
			$numero = addslashes(trim($request->parametro));

			$buscaAgencia = $pdo->prepare("SELECT * FROM `agencia` WHERE `numero` LIKE :agencia  LIMIT 1");

			$buscaAgencia->bindValue(":agencia", $numero);

			$buscaAgencia->execute();

			$agencia = $buscaAgencia->fetch(PDO::FETCH_OBJ);
			echo json_encode($agencia);
			break;
		
		default:
			# code...
			break;
	}
}

?>