app.controller('listAccSpecializationCtrl', ['$scope', '$routeParams','$rootScope','$firebaseObject','$firebaseArray', function($scope, $routeParams,$rootScope ,$firebaseObject,$firebaseArray)
{
        console.info("inside me");
        var inputCategory = $rootScope.input;
        console.log(inputCategory);
        var sampleArr =[];
        $rootScope.recordArray = [];

        
        
        var cityRef = firebase.database().ref("doctors");
        console.log(cityRef+"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--");
        var recRef = cityRef.orderByChild("specialization").equalTo(inputCategory); 
        
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
