/*console.log("こんにちは");
console.log($("#input").val());
$("#input").val("merci");
console.log($("#input").val());*/

//var bigfive = {"bigfive":{"e":"neg"},{"n":"pos"}, {"o":"neg"}, {"a":"pos"}, {"c":"neg"}};
/* e: 外向性, n: 神経症傾向, o: 開放性, a: 協調性, c: 誠実性 , pos: ポジティブ, neg: ネガティブ*/


new Chartist.Line('.ct-chart', {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
	    series: [
		     {
			 name: 'Fibonacci sequence',
			     data: [1, 2, 3, 5, 8, 13, 40, 32, 10, 18]
			     },
		     {
			 name: 'Golden section',
			     data: [1, 12, 20, 8, 6, 11, 40, 20, 7, 26]
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



var e_counter=[];
e_counter.push("Eplus");
e_counter.push("Eminus");
for(var i=0;i<8;i++){
    e_counter.push("Eplus");
}
var e_plus_counter=0;
for(var i=0;i<e_counter.length;i++){
    if(e_counter[i]==="Eplus"){
	e_plus_counter++;
    }
}

console.log(e_plus_counter);


console.log(e_counter);



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
			      
	
	$("#history").append('<div class="row">'
                               +'<div class="col-sm-3">'
                                 +'<img src="./girl.png" alt="ユーザー" class="icon">'
                               +'</div>'//question_image
			       +'<div class="arrow_question col-sm-6" style="height:60px";>'
                                 +'<br>'
                                 + systemReply
                               +'</div>'
			       +'<div class="blank col-sm-3">'
                               +'</div>'
                             +'</div>'// row
                             );


        $("#history").append('<div class="row">'
			       +'<div class="blank col-sm-3">'
			       +'</div>'
			       +'<div class="arrow_answer col-sm-6" style="height:60px";>'
			         +'<br>'
			         + systemReply
			       +'</div>'
			       +'<div class="col-sm-3">'
			         +'<img src="./pc.png" alt="システム" class="icon">'
			       +'</div>'// answer_image
			     +'</div>'// row
                             );
	
	$.ajax({
                type: 'GET',
                    url:"http://shower.human.waseda.ac.jp:3300/bigfive/"+$("#input").val(),
                    async:false,
                    dataType:"json",
                    success: function(data){
                    console.log("bigfive成功"+data);
                    var e_result = data.e.class;
		    console.log("外向性→"+e_result);
		    var n_result = data.n.class;
                    console.log("神経症傾向→"+n_result);
		    var o_result = data.o.class;
                    console.log("開放性→"+o_result);
		    var a_result = data.a.class;
                    console.log("協調性→"+a_result);
		    var c_result = data.c.class;
                    console.log("誠実性→"+c_result);
		}});

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
