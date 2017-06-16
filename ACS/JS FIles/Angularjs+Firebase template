var app = angular.module("test",["firebase"]);

app.controller("testCtrl",function($scope, $firebaseObject)
{
    $scope.onSubmit = function()
  {
    console.log($scope.formModel);
    var inputCity=$scope.formModel;
    console.log(inputCity.city + " and " + inputCity.insurances);
    var cityRef = firebase.database().ref("Medicals");
    cityRef.orderByChild("city").equalTo(inputCity.city).on("child_added", function(snapshot){
     if(snapshot.child("specialization").val().includes(inputCity.diseases) == true && 
     snapshot.child("insurances").val().includes(inputCity.insurances) == true)
         { console.log("Result: " + snapshot.val().Name +" and " + snapshot.child("insurances").val()  +" and " + snapshot.child("specialization").val()); } 

    });

   
  };

    
});
