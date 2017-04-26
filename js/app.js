var app = angular.module('ConsecionarioApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = "include/menu.html";

  $scope.setActive = function(Opcion){

  		$scope.mInicio = "";
  		$scope.mUsuarios = "";
  		$scope.mVehiculos = "";
  		$scope.mMantenimiento = "";

  		$scope[Opcion] = "active";
  }

}]);


//filtro para poner la primera letra en mayúscula
app.filter("capitalize", function(){
    return function(text) {
        if(text != null){
            return text.substring(0,1).toUpperCase()+text.substring(1);
        }
    }
})
