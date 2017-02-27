angular.module("transferencia").controller('loginCtrl', function($scope, $rootScope, $location, $cookies, loginAPI) {
	$scope.getLogin = function(login) {
		loginAPI.getLogin(login).then(function(data) {
			var loginValido = data.data;
			if (loginValido && loginValido.length > 0) {
				$cookies.put('agencia', login.agencia);
				$cookies.put('conta', login.conta);
				$cookies.put('idConta', loginValido[0].id);
				$location.path("/transferencia");
			} else {
				$scope.formLogin.$setValidity("invalidLogin", false);
			}
		});
	};
	
	var loggedIn = $cookies.get('idConta');
});