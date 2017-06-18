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
        /*map implementation*/	
var map;
var marker;
var currentLat;
var currentLon;
var currentLatLon;
var prevLati;
var prevLongi;
var isShowingSomething = false;
var markerArray = [];
var directionsDisplay;

  $scope.initMap = function(){
                  
                  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
                currentLat= position.coords.latitude;
                currentLon= position.coords.longitude;
       
           var myCenter = new google.maps.LatLng(currentLat,currentLon);//(51.508742,-0.120850);
                 currentLatLon = new google.maps.LatLng(currentLat, currentLon);
                 var mapCanvas = document.getElementById("map");
               
                 var mapOptions = {center: myCenter, zoom: 14,  mapTypeId: google.maps.MapTypeId.ROADMAP};
                 map = new google.maps.Map(mapCanvas, mapOptions);
                 marker = new google.maps.Marker({
                 position: myCenter,
                 animation: google.maps.Animation.DROP
                 });                
                 marker.setMap(map);
                 markerArray.push(marker);
                 
                 }
            }
                                                 
 $scope.setMarker = function(lati,longi){
    
    console.log(lati);
    
    var latlng = new google.maps.LatLng(lati, longi);
    map.setZoom(14);
    map.setCenter(latlng);

    marker = new google.maps.Marker({
                 position: latlng,
                 animation: google.maps.Animation.DROP
                 });   

    marker.setPosition(latlng);
    markerArray.push(marker);

        $scope.distanceCalculator(lati,longi);
        document.getElementById('mode').addEventListener('change', function() {
                
          $scope.distanceCalculator(lati, longi);
        });

  } 
                                                
                                                 
 
});

}]);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
