angular.module("transferencia").controller('headerCtrl', function($scope, $rootScope, $cookies, $location, contaAPI) {
	$scope.deslogar = function() {
		$cookies.remove("idConta");
		$location.path("/login");
	};

	contaAPI.getSaldo($cookies.get('conta')).then(function(data) {
		$rootScope.saldo = data.data.saldo;
	});

	$scope.agencia = $cookies.get('agencia');
	$scope.conta = $cookies.get('conta');
});