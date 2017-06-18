app.controller("drlistCtrl",function ($scope,$routeParams,$firebaseObject,$rootScope,$firebaseArray,$filter) {
   
   var SelectedCategory=$routeParams.selectedCategory;
    var SelectedCity=$routeParams.selectedCity;
    var SelectedInsurance=$routeParams.selectedInsurance;


var sampleArr =[];
        $rootScope.recordArray = [];

        var cityRef = firebase.database().ref("doctors");
        console.log(cityRef+"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--");
     
       var recRef =  cityRef.orderByChild("city").equalTo(SelectedCity);


/*map implementation*/	
var map;
var marker;
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
