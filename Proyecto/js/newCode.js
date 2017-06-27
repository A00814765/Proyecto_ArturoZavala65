$(document).ready(function(){
	// Acción para el botón de logout
	$("#crearBtn").on("click", function(){

		 var jsonObject = {
            "nameProyect" : $("#proyecto").val(),
            "nameSyntax" : $("#syntax").val()
        };

		$.ajax({
            type: "POST",
            url: "data/newNap.php",
            data : jsonObject, 
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {
                window.location.replace("napcode.html");  
               
            },
            error: function(errorMsg){
                alert(errorMsg.statusText);
            }
        });
	});


	$.ajax({
        url : "data/codes.php",
        type : "GET",
        dataType : "json",
        success : function(codesData){

        	var listaRows = "";
        	
        	for(var i=0; i<codesData["codes"].length;i++){
        		listaRows += "<tr>";
	        		listaRows += "<td>"+"<a id='urlCode' name='" + codesData["codes"][i].id + "'" + " href='napcode.html'>" +
                                 codesData["codes"][i].nombre +"</a>" +"</td>";
	        		listaRows += "<td>" + codesData["codes"][i].syntax + "</td>"; 
	        		listaRows += "<td>" + codesData["codes"][i].fecha + "</td>";
                    listaRows += "<td>" + codesData["codes"][i].user + "</td>";
                    listaRows += "</tr>";
        	}
        	$("#profileData").append(listaRows);
           
        },
        error : function(errorMessage){
            console.log(errorMessage);
        }
    });
                   
});