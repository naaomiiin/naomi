/*console.log("こんにちは");
console.log($("#input").val());
$("#input").val("merci");
console.log($("#input").val());*/

$("#append-text").click(function(){

	$("#history").append('<div class="container">'
			     +'<div class="row col-sm-10">'
			     +'<div class="col1">'
			     +'<div class="span8">'
			     +'<div class="question_Box">'
			     +'<div class="question_image col-sm-3">'
			     +'<img src="./girl.png" alt="user">'
			     +'</div>'<!-- /.question_image -->
			     +'<div class="arrow_question col-sm-6" style="height:60px">'
			     +'<div id="history">'
			     +'<br>'			    
			     +'</div>'<!-- /.history -->
			     +'<div>'
			     +$("#input").val()
			     +'<br>'
			     +'<div>'
			     +'</div>'
			     +'</div>'
			     +'<div class="blank col-sm-3">'
			     +'</div>'
			     +'</div>'<!-- /.arrow_question -->
			     +'</div>'<!-- /.question_Box -->
			     +'</div>'<!-- /.col1 -->
			     +'</div>'<!-- /.row -->
			     +'</div>'<!-- /.container -->
			     );
	$("#input").val("");
    });


//$("#append-text").click(function(){
//$("#history").load("./http://shower.human.waseda.ac.jp:3300/rating/mn-with-word2vec/replies?text="#input"");
//   });


$("#append-text").click(function(){

        $("#history").append('<div class="container">'
                             +'<div class="row col-sm-10">'
                             +'<div class="col1">'
                             +'<div class="span8">'
                             +'<div class="question_Box">'
                             +'<div class="blank col-sm-3">'
                             +'</div>'
                             +'<div class="arrow_answer col-sm-6" style="height:60px">'
                             +'<div id="history">'
			     // +'$.ajax({type:"GET",url:"http://shower.human.waseda.ac.jp:3300/rating/mn-with-word2vec/replies?text=.$("#input")"})'
                             +'</div>'<!-- /.history -->
                             +'<div>'
			     +'<br>'
			     +'<div>'
                             +'</div>'
			     +'</div>'
			     +'</div>'<!-- /.arrow_answer -->
			     +'<div class="answer_image col-sm-3">'
                             +'<img src="./pc.png" alt="システム">'
                             +'</div>'<!-- /.answer_image -->                             
			     +'</div>'<!-- /.question_Box -->
                             +'</div>'<!-- /.col1 -->
                             +'</div>'<!-- /.row -->
                             +'</div>'<!-- /.container -->
                             );
        $("#input").val("");
    });


$.ajax({
	type: 'GET',
	    url: 'http://shower.human.waseda.ac.jp:3300/rating/mn-with-word2vec/replies?text=#input',
	    dataType: 'html',
	    });