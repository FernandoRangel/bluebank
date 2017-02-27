angular.module("transferencia").service("transferenciaAPI", function($http, config){
	this.listTransferencia = function() {
		$post = {
			metodo: "listTransferencia"
		};
		return $http.post(config.baseUrl + "/bd/transferencia.php", $post);
	};

	this.getTransferencia = function(id) {
		$post = {
			metodo: "getTransferencia",
			id: id
		};
		return $http.post(config.baseUrl + "/bd/transferencia.php", $post);
	};

	this.createTransferencia = function(transferencia) {
		$post = {
			metodo: "createTransferencia",
			transferencia: transferencia
		};
		return $http.post(config.baseUrl + "/bd/transferencia.php", $post);
	};
});