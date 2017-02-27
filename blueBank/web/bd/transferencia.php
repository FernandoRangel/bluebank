<?php
include("conexao.php");
$pdo = conectar();

if (file_get_contents("php://input")) {
	$request = json_decode(file_get_contents("php://input"));
	switch ($request->metodo) {
		case 'listTransferencia':

			$buscaTransferencia = $pdo->prepare("SELECT * FROM `transferencia` WHERE `numeroContaOrigem` = 12345 OR `numeroContaDestino` = 12345
ORDER BY `id` DESC");

			$buscaTransferencia->execute();

			$transferencia = $buscaTransferencia->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($transferencia);
			break;

		case 'getTransferencia':
			$id = addslashes(trim($request->id));

			$buscaTransferencia = $pdo->prepare("SELECT * FROM `transferencia` WHERE `id` = :id");

			$buscaTransferencia->bindValue(":id", $id);

			$buscaTransferencia->execute();

			$transferencia = $buscaTransferencia->fetch(PDO::FETCH_OBJ);
			echo json_encode($transferencia);
			break;

		case 'createTransferencia':
			$valor = addslashes(trim($request->transferencia->valor));
			$numeroContaOrigem = addslashes(trim($request->transferencia->numeroContaOrigem));
			$numeroContaDestino = addslashes(trim($request->transferencia->numeroContaDestino));
			$dataCadastro = date('Y-m-d H:i:s');

			$createTransferencia = $pdo->prepare("INSERT INTO `transferencia` (`valor`, `numeroContaOrigem`, `numeroContaDestino`, `dataCadastro`) VALUES (:valor, :numeroContaOrigem, :numeroContaDestino, :dataCadastro);");

			$createTransferencia->bindValue(":valor", $valor);
			$createTransferencia->bindValue(":numeroContaOrigem", $numeroContaOrigem);
			$createTransferencia->bindValue(":numeroContaDestino", $numeroContaDestino);
			$createTransferencia->bindValue(":dataCadastro", $dataCadastro);

			$createTransferencia->execute();


			$creditaContaOrigem = $pdo->prepare("UPDATE `conta` SET `saldo` = `saldo` - :valor WHERE `numero` = :numeroContaOrigem;");
			$creditaContaOrigem->bindValue(":valor", $valor);
			$creditaContaOrigem->bindValue(":numeroContaOrigem", $numeroContaOrigem);
			$creditaContaOrigem->execute();

			$debitaContaDestino = $pdo->prepare("UPDATE `conta` SET `saldo` = `saldo` + :valor WHERE `numero` = :numeroContaDestino;");
			$debitaContaDestino->bindValue(":valor", $valor);
			$debitaContaDestino->bindValue(":numeroContaDestino", $numeroContaDestino);
			$debitaContaDestino->execute();

			break;
		
		default:
			# code...
			break;
	}
}

?>