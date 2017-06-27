$(document).ready(function(){
	// Acción para el botón de logout
	$("#cerrarSesion").on("click", function(){
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

	$(function() {
	    $(".buttonPop").click(function() {
	        $("#myform").show(500);
	    });
	    $("#regButtonModal").click(function() {
	        $("#myform").hide(400);
	        $("#nameRegModal").val("");
			$("#emailRegModal").val("");
			$("#passwordRegModal").val("");
	    });
	    $("#cancelButton").click(function() {
	        $("#myform").hide(400);
	        $("#nameRegModal").val("");
			$("#emailRegModal").val("");
			$("#passwordRegModal").val("");
	    });
	});

});