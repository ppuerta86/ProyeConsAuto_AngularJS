// var app = angular.module( "app", [ ] );
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'include/home.html',
         controller: 'inicioCtrl'
    })
      .when('/usuarios',{
        templateUrl: 'include/usuarios.html',
         controller: 'usuariosCtrl'
    })
      .when('/vehiculos',{
        templateUrl: 'include/vehiculos.html',
         controller: 'vehiculosCtrl'
    })
          .when('/mantenimiento',{
        templateUrl: 'include/mantenimiento.html',
         controller: 'mantenimientoCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

})
