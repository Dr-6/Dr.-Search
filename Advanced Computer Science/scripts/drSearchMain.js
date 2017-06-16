var app = angular.module("drSearchNg", ["ngRoute","firebase"]);
app.config(function($routeProvider) {
    $routeProvider

    .when("/drIndex",{

        templateUrl : "drIndex.html",
        controller : "mainCtrl"
    })

    .when("/drSearchMain",{

        templateUrl : "drSearchMain.html",
        controller : "drsearchCtrl"
    })
  
    .when("/drList/:selectedCategory/:selectedCity/:selectedInsurance" , {
        templateUrl : "drList.html",
        controller : "drlistCtrl"
    })
    
});

app.controller("mainCtrl", function($location){

$location.path('/drSearchMain');

});

app.controller("drsearchCtrl", function(){


});
