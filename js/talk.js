/*console.log("こんにちは");
console.log($("#input").val());
$("#input").val("merci");
console.log($("#input").val());*/

$("#append-text").click(function(){

	$("#history").append('<div class="question_Box">'
			     +'<div class="question_image">'
			     +'<img src="./girl.png" alt="user" width="130" height="130"/>'+'</div>'
			     +'<div class="arrow_question">'+'<div id="history">'+'</div>'
			     +'<div>'+$("#input").val()+'<div>'+'</div>'+'</div>'
			    );
	$("#input").val("");
    });



	