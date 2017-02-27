angular.module("transferencia").service("contaAPI", function($http, config){
	this.getConta = function(conta) {
		$post = {
			metodo: "getConta",
			parametro: conta
		};
		return $http.post(config.baseUrl + "/bd/conta.php", $post);
	};

	this.getSaldo = function(conta) {
		$post = {
			metodo: "getSaldo",
			parametro: conta
		};
		return $http.post(config.baseUrl + "/bd/conta.php", $post);
	};

	this.validaSenha = function(dados) {
		$post = {
			metodo: "validaSenha",
			parametro: dados
		};
		return $http.post(config.baseUrl + "/bd/conta.php", $post);
	};
});