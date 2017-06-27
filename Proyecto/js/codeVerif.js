$(document).ready(function(){



    $("#codeText").on("keyup", function(){

         var jsonObject = {
            "code" : $("#codeText").val()
        };

        $.ajax({
            type: "POST",
            url: "data/codeSave.php",
            data : jsonObject, 
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {
                
               
            },
            error: function(errorMsg){
              
            }
        });
    });
    

    $.ajax({
        url : "data/codeExt.php",
        type : "GET",
        dataType : "json",
        success : function(codeData){

            $("#codeText").val(codeData.code);
            $("#codeName").html(codeData.nombre);

        },
        error : function(errorMessage){
            console.log(errorMessage);
        }
    }); 
    
    setInterval(function(){

        $.ajax({
            url : "data/codeExt.php",
            type : "GET",
            dataType : "json",
            success : function(codeData){

                $("#codeText").val(codeData.code);
            },
            error : function(errorMessage){
                console.log(errorMessage);
        }
    }); 
    
    },5000);

});
