<?php
include("conexao.php");
$pdo = conectar();

if (file_get_contents("php://input")) {
	$request = json_decode(file_get_contents("php://input"));
	switch ($request->metodo) {
		case 'getConta':
			$agencia = addslashes(trim($request->parametro->agencia));
			$conta = addslashes(trim($request->parametro->conta));

			$buscaSaldo = $pdo->prepare("SELECT * FROM `conta` WHERE `numeroAgencia` LIKE :agencia AND `numero` LIKE :conta  LIMIT 1");

			$buscaSaldo->bindValue(":agencia", $agencia);
			$buscaSaldo->bindValue(":conta", $conta);

			$buscaSaldo->execute();

			$saldo = $buscaSaldo->fetch(PDO::FETCH_OBJ);
			echo json_encode($saldo);
			break;

		case 'getSaldo':
			$conta = addslashes(trim($request->parametro));

			$buscaSaldo = $pdo->prepare("SELECT saldo FROM `conta` WHERE `numero` LIKE :conta  LIMIT 1");

			$buscaSaldo->bindValue(":conta", $conta);

			$buscaSaldo->execute();

			$saldo = $buscaSaldo->fetch(PDO::FETCH_OBJ);
			echo json_encode($saldo);
			break;

		case 'validaSenha':
			$conta = addslashes(trim($request->parametro->conta));
			$senha = addslashes(trim($request->parametro->senha));

			$validaSenha = $pdo->prepare("SELECT id FROM `conta` WHERE `numero` LIKE :conta AND `senha` LIKE :senha LIMIT 1");

			$validaSenha->bindValue(":conta", $conta);
			$validaSenha->bindValue(":senha", $senha);

			$validaSenha->execute();

			$validade = $validaSenha->fetch(PDO::FETCH_OBJ);
			echo json_encode($validade);
			break;
		
		default:
			# code...
			break;
	}
}

?>