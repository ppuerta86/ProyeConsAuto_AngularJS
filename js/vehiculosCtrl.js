app.controller('vehiculosCtrl', ['$scope','$http', function($scope,$http){
    
    $scope.setActive("mVehiculos");

    $scope.vehiculos = {};

    $http.get('php/servicios/vehiculos.listado.php').success(function(data){

    	$scope.vehiculos = data;

    });
    
}]);