angular.module("transferencia").controller("transferenciaCtrl", function($scope, $cookies, $location, $route, transferencia, transferenciaAPI) {

	$scope.criarTransferencia = function() {
		$location.path("/transferencia/criar");
	};

	$scope.transferencia = transferencia.data;
});

angular.module("transferencia").controller("criarTransferenciaCtrl", function($scope, $rootScope, $location, $cookies, transferenciaAPI, agenciaAPI, contaAPI) {
	$scope.saldoConta = $rootScope.saldo;

	$scope.validaAgencia = function(transferencia) {
		agenciaAPI.getAgencia(transferencia.agencia).then(function(data) {
			if (data.data != "false") {
				$scope.agenciaInvalid = false;
				transferencia.conta = "";
				$scope.nomeAgencia = data.data.nome;
				$scope.contaVisible = true;
			} else {
				$scope.agenciaInvalid = true;
				transferencia.conta = "";
				$scope.nomeAgencia = "";
				$scope.contaVisible = false;
				$scope.invalidForm = true;
			}
		});
	};

	$scope.validaConta = function(transferencia) {
		contaAPI.getConta({agencia: transferencia.agencia, conta: transferencia.conta}).then(function(data) {
			if (data.data != "false") {
				$scope.contaInvalid = false;
				$scope.valorVisible = true;
				$scope.nomeConta = data.data.nome;
			} else {
				$scope.contaInvalid = true;
				transferencia.valor = "";
				$scope.nomeConta = "";
				$scope.valorVisible = false;
				$scope.invalidForm = true;
			}
		});
	};

	$scope.validaValor = function(transferencia) {
		contaAPI.getSaldo($cookies.get('conta')).then(function(data) {
			if (data.data != "false" && data.data.saldo >= transferencia.valor) {
				$scope.valorInvalid = false;
				$scope.invalidForm = false;
			} else {
				$scope.valorInvalid = true;
				$scope.invalidForm = true;
			}
		});
	};

	$scope.salvar = function(transferencia) {
		contaAPI.validaSenha({conta: $cookies.get('conta'), senha: transferencia.senha}).then(function(data) {
			if (data.data != "false") {
				$scope.senhaInvalid = false;
				var dados = {
					valor: transferencia.valor,
					numeroContaOrigem: $cookies.get('conta'),
					numeroContaDestino: transferencia.conta
				}

				transferenciaAPI.createTransferencia(dados).then(function() {
					$location.path("/transferencia");
				});
			} else {
				$scope.senhaInvalid = true;
			}
		});
	};

	$scope.formataData = function(data) {
		console.log(data);
		var dataFormatada = data.split(" ");
		return dataFormatada[1];
	};
});