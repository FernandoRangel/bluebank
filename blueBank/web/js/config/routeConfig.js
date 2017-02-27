angular.module("transferencia").config(function($routeProvider) {
	$routeProvider.when("/transferencia", {
		templateUrl: "view/transferencia/listar.html",
		controller: "transferenciaCtrl",
		resolve: {
			transferencia: function($cookies, transferenciaAPI) {
				return transferenciaAPI.listTransferencia().then(function(data) {
					angular.forEach(data.data, function(value, key) {
						if (value.numeroContaOrigem == $cookies.get('conta')) {
							value.tipo = "Crédito";
						} else {
							value.tipo = "Débito";
						}
					});
					return data;
				});
			},
			isLogged: function($location, $cookies) {
				var loggedIn = $cookies.get('idConta');
				
				if (loggedIn == null) {
					$location.path("/login");
				}
			}
		}
	});

    $routeProvider.when("/transferencia/criar", {
      templateUrl: "view/transferencia/form.html",
      controller: "criarTransferenciaCtrl"
    });

	$routeProvider.when("/login", {
		templateUrl: "view/login/login.html",
		controller: "loginCtrl",
		resolve: {
			isLogged: function($location, $cookies) {
				var loggedIn = $cookies.get('idConta');

				if (loggedIn != null) {
					$location.path("/transferencia");
				}
			}
		}
	});
	$routeProvider.otherwise({redirectTo: "/login"});
});