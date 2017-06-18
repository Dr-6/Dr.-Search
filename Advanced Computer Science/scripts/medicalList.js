app.controller('listDetCtrl', ['$scope', '$routeParams','$rootScope','$firebaseObject','$firebaseArray', function($scope, $routeParams,$rootScope ,$firebaseObject,$firebaseArray)
{
        var inputCity = $routeParams.inputCity;
        console.log(inputCity);
        var sampleArr =[];
        $rootScope.recordArray = [];

       
        
        var cityRef = firebase.database().ref("medicals");
        var recRef = cityRef.orderByChild("city").equalTo(inputCity);
        
        var list = $firebaseArray(recRef);
        list.$loaded()
        .then(function() {
        angular.forEach(list,function(element) {

          var timeArraySend = [];
          var timingArray = String(element.timing).split("?");

        for(var i=0;i<timingArray.length;i=i+1)
        {
          console.log(timingArray[i]);
            timeToSend = {"dayTime" : timingArray[i]};
            timeArraySend.push(timeToSend);
        }
        
        $rootScope.recordArray.push({"Name":element.name,"Contact":element.phone_number,"Image" :element.image,
        "Timing":timeArraySend,"Address":element.address,"city" : element.city,"latitude":element.latitude,"longitude":element.longitude
        
    });
        sampleArr.push({"Name":element.name,"Contact":element.phone_number,"Image" : element.image,
        "Timing":timeArraySend,"Address":element.address,"city":element.city,"latitude":element.latitude,"longitude":element.longitude});
   
  });
  })
  .catch(function(error) {
    console.log("Error:", error);
  });
}]);
