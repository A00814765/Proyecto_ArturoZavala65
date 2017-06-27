$(document).ready(function(){
	// Acción del registro
	$("#regButton").on("click", function(){
        var jsonObject = {
            "userName" : $("#nameReg").val(),
            "userEmail" : $("#emailReg").val(),
            "userPassword" : $("#passwordReg").val()
        };

        $.ajax({
            type: "POST",
            url: "data/registrationService.php",
            data : jsonObject, 
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {
                window.location.replace("profile.html");  
               
            },
            error: function(errorMsg){
                alert(errorMsg.statusText);
            }
        });
   });

	/* Acción para el botón de cancel
   	$("#cancelButton").on("click", function(){
        window.location.replace("index.html");
   	});*/

});


