$(document).ready(function(){
	
    $(function() {
        $(".buttonPopAdd").click(function() {
            $("#myformAdd").show(500);
        });
        $("#crearBtnAdd").click(function() {
            $("#myformAdd").hide(400);
            $("#emailColaborador").val("");
           
          
        });
        $("#cancelButtonAdd").click(function() {
            $("#myformAdd").hide(400);
            $("#emailColaborador").val("");
            
           
        });
    });

    $("#crearBtnAdd").on("click", function(){

         var jsonObject = {
            "colab" : $("#emailColaborador").val()
        };

        $.ajax({
            type: "POST",
            url: "data/addColab.php",
            data : jsonObject, 
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {  
               alert("Agregado correctamente");
            },
            error: function(errorMsg){
                alert("No se pudo agregar colaborador");
            }
        });
    });

   $("#deleteCode").on("click", function(){

         var jsonObject = {
            "num" : 1
        };

        $.ajax({
            type: "POST",
            url: "data/deleteCode.php",
            data : jsonObject, 
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {  
              window.location.replace("profile.html");
            },
            error: function(errorMsg){
                alert("No se pudo borrar");
            }
        });
    }); 

    $("#cerrarSesionCode").on("click", function(){
        $.ajax({
            url : "data/deleteSession.php",
            type : "GET",
            dataType : "json",
            success : function(sessionJson){
                window.location.replace("home.html");
            },
            error : function(errorMessage){
                window.location.replace("home.html");
            }
        });
    });
                 
});