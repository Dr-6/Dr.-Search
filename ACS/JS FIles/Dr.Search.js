var app = angular.module("DrsearchApp",["firebase"]);

app.controller("DrsearchController",function($scope, $firebaseObject)
{
    $scope.onSubmit = function()
  {
    console.log("Console statement.");
    //var inputCity=$scope.formModel;
  
    alert($scope.selectedCategory + " and " + $scope.selectedCity + "and" + $scope.selectedInsurance);

    var cityRef = firebase.database().ref("doctors");
    cityRef.orderByChild("city").equalTo($scope.selectedCity).on("child_added", function(snapshot){
        if(snapshot.child("specialization").val().includes($scope.selectedCategory) == true || 
        snapshot.child("insurances").val().includes($scope.selectedInsurance) == true)
         { alert("Result: " + snapshot.val().name +" and " + snapshot.child("insurances").val()  +" and " + snapshot.child("specialization").val()); } 

    }); 
  };   
});