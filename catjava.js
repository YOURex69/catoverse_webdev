$(document).on("click","#button1",function(){
	var name = $("#but1").val();
	alert("thank you "+name);
   alert("A confirmation mail has been sent to your registerd email ID");

	$("#but1").val('');
	$("#but2").val('');
});

