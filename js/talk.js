/*console.log("こんにちは");
console.log($("#input").val());
$("#input").val("merci");
console.log($("#input").val());*/

$("#append-text").click(function(){

	$("#history").append('<div class="container">'
			     +'<div class="row col-sm-10">'
			     +'<div class="col1">'
			     +'<div class="question_Box">'
			     +'<div class="question_image col-sm-3">'
			     +'<img src="./girl.png" alt="user">'
			     +'</div>'<!-- /.question_image -->
			     +'<div class="arrow_question col-sm-9">'
			     +'<div id="history">'
			     +'</div>'<!-- /.history -->
			     +'<div>'
			     +$("#input").val()
			     +'<br>'
			     +'<div>'
			     +'</div>'
			     +'</div>'
			     +'</div>'<!-- /.arrow_question -->
			     +'</div>'<!-- /.question_Box -->
			     +'</div>'<!-- /.col1 -->
			     +'</div>'<!-- /.row -->
			     +'</div>'<!-- /.container -->
			     );
	$("#input").val("");
    });


