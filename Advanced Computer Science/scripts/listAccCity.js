app.controller('listAccCityCtrl', ['$scope', '$routeParams','$rootScope','$firebaseObject','$firebaseArray', function($scope, $routeParams,$rootScope ,$firebaseObject,$firebaseArray)
{
        console.info("inside me");
        var inputCity = $rootScope.input;
        console.log(inputCity);
        var sampleArr =[];
        $rootScope.recordArray = [];

        
        
        var cityRef = firebase.database().ref("doctors");
        console.log(cityRef+"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--");
        var recRef = cityRef.orderByChild("city").equalTo(inputCity); 
        
        var list = $firebaseArray(recRef);
        list.$loaded()
        .then(function() {
        angular.forEach(list,function(element) {
        console.log("name:"+element.name);
        
        
    var commentsArray = element.review.split(":");
    var commentSend;
    var commentArraySend= [];
    var timeArraySend = [];
    var timeToSend;
    var mainKey;
    
    var totalRating=0;
    for(var i=0; i<commentsArray.length-1;i++){
      commentSend = {"ratingByUser" : commentsArray[i].split("`")[0],"commentByUser" : commentsArray[i].split("`")[1],"dateTimeByUser" : commentsArray[i].split("`")[2]}
      console.log(commentsArray[i]);
      totalRating=totalRating+parseInt(commentsArray[i].split("`")[0]);
      commentArraySend.push(commentSend);
}

      var avgRating = parseFloat(totalRating/(commentsArray.length-1));

        var timingsArray = String(element.timing).split("?");
        for(var i=0; i<timingsArray.length;i++)
        {
          timeToSend = {"dayTime" : timingsArray[i]};
          timeArraySend.push(timeToSend);
        }
    

   $rootScope.recordArray.push({"name":element.name,"city":element.city,"image" : element.image,"address" : element.address,
    "phone_number" : element.phone_number,"timings":timeArraySend,"qualification" : element.qualification,
    "specialization" : element.specialization, "website":element.website,"email": element.email,"languages":element.languages,
    "city":element.city,"latitude" : element.latitude,"longitude" : element.longitude,"rating" : commentArraySend, "avgRating" : avgRating
    //, "comment" : commentsArray, "dateTime" : dateTime
  });
    sampleArr.push({"name":element.name,"city":element.city,"image" : element.image,"address" : element.address,
    "phone_number" : element.phone_number,"timings":timeArraySend,"qualification" : element.qualification,
    "specialization" : element.specialization, "website":element.website,"email": element.email,"languages":element.languages,
    "city":element.city,"latitude" : element.latitude,"longitude" : element.longitude,"rating" : commentArraySend, "avgRating" : avgRating
    //, "comment" : comment, "dateTime" : dateTime
});

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
                          
                      $scope.formData={}; 
 
$scope.onComment=function(name,inputCity)
{
    var rate= $scope.formData.rate;
    console.log("Ratings = " + rate);
    console.log("main key rate: "+ name);
    var comment= $scope.formData.alltext;
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'-'+dd+'-'+yyyy;

    if(comment==null || rate==null)
    {
      alert("Enter a valid comment.");
      return;
    }
    console.log(" var comment :"+comment);



    alert("Your comment has been sent ! ");
    $scope.formData.alltext="";
    $scope.formData.rate="";
}    
                          
                  }]);              
     //last function for responsiveness                     
     function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
