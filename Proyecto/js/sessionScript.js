$(document).ready(function(){

	// Acción para verificar que la sesión sigue activa
	$.ajax({
		url : "data/sessionService.php",
		type : "GET",
		dataType : "json",
		success : function(sessionJson){
		$("#profileSession").html(sessionJson.email);

		},
		error : function(errorMessage){
			window.location.replace("login.html");
		}
	});
});