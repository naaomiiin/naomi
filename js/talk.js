/*console.log("こんにちは");
console.log($("#input").val());
$("#input").val("merci");
console.log($("#input").val());*/

//var bigfive = {"bigfive":{"e":"neg"},{"n":"pos"}, {"o":"neg"}, {"a":"pos"}, {"c":"neg"}};
/* e: 外向性, n: 神経症傾向, o: 開放性, a: 協調性, c: 誠実性 , pos: ポジティブ, neg: ネガティブ*/


new Chartist.Line('.ct-chart', {
	labels: ['1', '2', '3', '4', '5', '6'],
	    series: [
		     {
			 name: 'Fibonacci sequence',
			     data: [1, 2, 3, 5, 8, 13]
			     },
		     {
			 name: 'Golden section',
			     data: [1, 1.618, 2.618, 4.236, 6.854, 11.09]
			     }
  ]
	    });

var easeOutQuad = function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
};

var $chart = $('.ct-chart');

var $toolTip = $chart
    .append('<div class="tooltip"></div>')
    .find('.tooltip')
    .hide();

$chart.on('mouseenter', '.ct-point', function() {
	var $point = $(this),
	    value = $point.attr('ct:value'),
	    seriesName = $point.parent().attr('ct:series-name');

	$point.animate({'stroke-width': '50px'}, 300, easeOutQuad);
	$toolTip.html(seriesName + '<br>' + value).show();
    });

$chart.on('mouseleave', '.ct-point', function() {
	var $point = $(this);

	$point.animate({'stroke-width': '20px'}, 300, easeOutQuad);
	$toolTip.hide();
    });

$chart.on('mousemove', function(event) {
	$toolTip.css({
		left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
		    top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 40
		    });
    });







$("#append-text").click(function(){
	systemReply = "ダミー";
	console.log($("#input").val());
	$.ajax({
		type: 'GET',
		    url:"http://shower.human.waseda.ac.jp:3300/rating/mn-with-word2vec/replies?text="+$("#input").val(),
		    async:false,
		    dataType:"json",
		    success: function(data){
		    console.log("成功"+data);
		    systemReply = data.triple[2].text
			}});
			      

	
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
        $("#history").append('<div class="container">'
                             +'<div class="row col-sm-10">'
                             +'<div class="col1">'
                             +'<div class="span8">'
                             +'<div class="question_Box">'
                             +'<div class="blank col-sm-3">'
                             +'</div>'
                             +'<div class="arrow_answer col-sm-6" style="height:60px">'
                             +'<div id="history">'
			     +'<br>'
			     + systemReply
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




//$.ajax({
//type: 'GET',
//    url: '"http://shower.human.waseda.ac.jp:3300/rating/mn-with-word2vec/replies?text=" + $("#input").val() ',
//    dataType: 'html',
//    success: function(data) {
//    $('#arrow_answer').html($(data));
//}
//  });
