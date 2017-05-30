	function querybaseFunction() {		
				var cityInput = document.getElementById("cityTextBox").value;
				var diseaseInput = document.getElementById("diseaseTextBox").value;
				var insuranceInput = document.getElementById("insuranceTextBox").value;

				alert("Values input = " + cityInput + "	"+diseaseInput+"	"+insuranceInput);
              
				var ref = firebase.database().ref();
			  var usersRef = ref.child('doctors');
			  var queryRef = querybase.ref(usersRef, ['city','email','name']);

 			  var compositeRef =  queryRef.where({ city:cityInput});

                 compositeRef.on('child_added', function(snapshot) { 
			
                 var insurances_js = snapshot.child("insurances").val();
				var diseases = snapshot.child("specialization").val();
                var name = snapshot.child("name").val();
                var timing=snapshot.child("timing").val();
                var address=snapshot.child("address").val();
				document.getElementById("doctorImage").src = snapshot.child("image").val(); 

				if(diseases.includes(diseaseInput) == true && insurances_js.includes(insuranceInput)==true){

                    alert(snapshot.child("name").val() + " and " + snapshot.child("email").val() + " and " + 
						snapshot.child("insurances").val());

                window.location = "./DoctorResult.html";
                document.getElementById("nameBox").value = name;
                 window.location = "./DoctorResult.html";
                


						//document.getElementById("emailResult").innerHTML = snapshot.child("email").val(); 
						//var review = snapshot.child("review").val().split(":");

					}
				else{
						alert("not correct.");
					}
                     
				});
                              
			}

			