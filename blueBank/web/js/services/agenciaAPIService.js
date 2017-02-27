angular.module("transferencia").service("agenciaAPI", function($http, config){
	this.getAgencia = function(numero) {
		$post = {
			metodo: "getAgencia",
			parametro: numero
		};
		return $http.post(config.baseUrl + "/bd/agencia.php", $post);
	};
});