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
