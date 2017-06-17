app.controller("drlistCtrl",function ($scope,$routeParams,$firebaseObject,$rootScope,$firebaseArray,$filter) {
   
   /* angularJS code will be updated here.*/

/*map implementation*/	
var map;
var marker;
  $scope.initMap = function(){
                 var myCenter = new google.maps.LatLng(51.508742,-0.120850);
                 var mapCanvas = document.getElementById("map");
                 console.log("hi");
                 var mapOptions = {center: myCenter, zoom: 5};
                 map = new google.maps.Map(mapCanvas, mapOptions);
                 marker = new google.maps.Marker({
                 position: myCenter,
                 animation: google.maps.Animation.BOUNCE
                 });                
                 marker.setMap(map);
            }
  /*marker for map*/
  $scope.setMarker = function(lat,lng){
    console.log(lat)
    var latlng = new google.maps.LatLng(lat, lng);
    
    map.setZoom(14);
    map.setCenter(latlng);
    marker.setPosition(latlng);
  }	   
});
