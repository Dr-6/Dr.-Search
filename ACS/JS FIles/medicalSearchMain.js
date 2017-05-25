
var variable = angular.module("minmax", []);

variable.controller('minmaxCtrl', function($scope)
{
$scope.formModel = {};
$scope.onSubmit = function()
  {
    //alert("hello");
   console.log("Hey i got the City Name");
   console.log($scope.formModel);
  
  };
   
});
