<?php
include("conexao.php");
$pdo = conectar();
if (file_get_contents("php://input")) {
	$request = json_decode(file_get_contents("php://input"));
	switch ($request->metodo) {
		case 'getLogin':
			$agencia = addslashes(trim($request->parametro->agencia));
			$conta = addslashes(trim($request->parametro->conta));
			$senha = addslashes(trim($request->parametro->senha));

			$buscaLogin = $pdo->prepare("SELECT * FROM `conta` WHERE `numeroAgencia` = :agencia AND `numero` = :conta AND `senha` = :senha LIMIT 1");

			$buscaLogin->bindValue(":agencia", $agencia);
			$buscaLogin->bindValue(":conta", $conta);
			$buscaLogin->bindValue(":senha", $senha);
			
			$buscaLogin->execute();

			$login = $buscaLogin->fetchAll(PDO::FETCH_OBJ);
			
			echo json_encode($login);
			break;

		default:
			break;
	}
}
?>