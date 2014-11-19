/*console.log("こんにちは");
console.log($("#input").val());
$("#input").val("merci");
console.log($("#input").val());*/

$("#append-text").click(function(){
	$("#history").append("<div>"+$("#input").val()+"</div>");
	$("#input").val("");
});
