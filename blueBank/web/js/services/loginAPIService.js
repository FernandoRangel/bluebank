angular.module("transferencia").service("loginAPI", function($http, config){
	this.getLogin = function(login) {
		$post = {
			metodo: "getLogin",
			parametro: login
		}
		return $http.post(config.baseUrl + "/bd/login.php", $post);
	};
});