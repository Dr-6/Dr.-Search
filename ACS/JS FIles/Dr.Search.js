var app = angular.module("DrsearchApp",["firebase"]);

app.controller("DrsearchController",function($scope,$firebaseObject)
{
    $scope.onSubmit = function()
  {
    //console.log("Console statement.");
  //  alert($scope.selectedCategory + " and " + $scope.selectedCity + "and" + $scope.selectedInsurance);
    $scope.records = new Array();
    var cityRef = firebase.database().ref("doctors");
    cityRef.orderByChild("city").equalTo($scope.selectedCity).on("child_added", function(snapshot){

        if(snapshot.child("specialization").val().includes($scope.selectedCategory) == true || 
        snapshot.child("insurances").val().includes($scope.selectedInsurance) == true){

        var Name = snapshot.child("name").val();
        var Insurance= snapshot.child("insurances").val();
        var Category = snapshot.child("specialization").val();
        var image = ""

        $scope.records.push({"Name":Name,"Insurance":Insurance,"Category":Category,"Image" : "Image cha path jithun image load honar ahe."} );                            
       console.log($scope.records.length);
       }
  })
                  
    for (var i = 0; i < $scope.records.length; i++) {
      //$scope.recordArraynew.push(recordArraynew[i]);
      console.log("Name : " + i + $scope.records[i].Name);
      console.log("Insurance : " + i + $scope.records[i].Insurance);
      console.log("Category : " +i + $scope.records[i].Category);
    }

  }
}); 

