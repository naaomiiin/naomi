/*console.log("こんにちは");
console.log($("#input").val());
$("#input").val("merci");
console.log($("#input").val());*/

//var bigfive = {"bigfive":{"e":"neg"},{"n":"pos"}, {"o":"neg"}, {"a":"pos"}, {"c":"neg"}};
/* e: 外向性, n: 神経症傾向, o: 開放性, a: 協調性, c: 誠実性 , pos: ポジティブ, neg: ネガティブ*/

$('#input').first().focus();

var taiwa_counter=0;
var append_counter=0;
var e_plus_counter=0;
var n_plus_counter=0;
var o_plus_counter=0;
var a_plus_counter=0;
var c_plus_counter=0;


chart = new Chartist.Line('.ct-chart', {
	//	labels: ['外向性', '神経症傾向', '開放性', '協調性', '誠実性'],
	labels:[taiwa_counter],
	series: [
{
    name: 'gaikousei',  //赤
    data: [e_plus_counter]
},
{
    name: 'sinkeisyoukeikou',  //赤                                                                                                                        
    data: [n_plus_counter]
},
{
    name: 'kaihou',
    data: [o_plus_counter]
},
{
    name: 'kyoutyousei',  //赤                                                                                                                       
    data: [a_plus_counter]
},
{
    name: 'seijitusei',  //赤                                                                                                                       
    data: [c_plus_counter]
},

		 ]
	    },{
    //	seriesBarDistance: 1.0,
    //      low: 0,
				  //				  high: 100
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


$ (function(){
	$ (".content:not('.active + .content')").hide();
	$(".menu").hover(function(){
		$ (this).addClass("hover")
		    },
	    function(){
		$(this).removeClass("hover")
		    });
	$ (".menu").click(function(){
		$(".menu").removeClass("active");
		$ (this).addClass("active");
		$(".content:not('.active + .content')").fadeOut();
		$ (".active + .content").fadeIn();
	    });
    });


$("#append-text").click(function(){
	$('#input').first().focus();
	systemReply = "ダミー";
	console.log($("#input").val());
	taiwa_counter++;
	console.log("対話回数:"+taiwa_counter+"回");
	//	$('#chart')[0].contentDocument.location.reload(true)
	$('#history').animate({ scrollTop: ($('#history')[0].scrollHeight) }, 'slow');  //自動スクロール
	
	$.ajax({
		type: 'GET',
		    url:"http://shower.human.waseda.ac.jp:3300/rating/mn-with-word2vec/replies?text="+$("#input").val(),
		    async:false,
		    dataType:"json",
		    success: function(data){
		    console.log("成功");
		    system = data.condition;
		    if(system === "no-result"){  //エラー処理
			systemReply = "もう１度入力してね";
		    }else{
			systemReply = data.triple[2].text;
		    }
		},
		    // error: function(data){
		    //};
		    });
	    
	    
		$("#history").append('<br>'
			     +'<div class="row">'
                               +'<div class="col-sm-3">'
                                 +'<img src="./girl.png" alt="ユーザー" class="icon">'
                               +'</div>'//question_image
			       +'<div class="arrow_question col-sm-6" style="height:60px";>'
                                 +'<br>'
			    　　 +$("#input").val()
			       +'</div>'
			       +'<div class="blank col-sm-3">'
                               +'</div>'
                             +'</div>'// row
                             );


		$("#history").append('<br>'
			     +'<div class="row">'
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
		    if(e_result==="Eplus"){
			e_plus_counter++;
		    }
		    console.log("Eplus:"+e_plus_counter+"回");
		    
		    var n_result = data.n.class;
                    console.log("神経症傾向→"+n_result);
		    if(n_result==="Nplus"){
			n_plus_counter++;
                    }
                    console.log("Nplus:"+n_plus_counter+"回");
		    
		    var o_result = data.o.class;
                    console.log("開放性→"+o_result);
		    if(o_result==="Oplus"){
			o_plus_counter++;
                    }
                    console.log("Oplus:"+o_plus_counter+"回");
		    
		    var a_result = data.a.class;
                    console.log("協調性→"+a_result);
		    if(a_result==="Aplus"){
			a_plus_counter++;
                    }
                    console.log("Aplus:"+a_plus_counter+"回");
		    
		    var c_result = data.c.class;
                    console.log("誠実性→"+c_result);
		    if(c_result==="Cplus"){
			c_plus_counter++;
                    }
                    console.log("Cplus:"+c_plus_counter+"回");
		}});
       
	$("#taiwa_count").text("対話回数 "+taiwa_counter+" 回");
	$("#input").val("");
	

	chart = new Chartist.Line('.ct-chart', {
		//      labels: ['外向性', '神経症傾向', '開放性', '協調性', '誠実性'],                                                                               
		labels:[taiwa_counter],
		series: [
	{
	    name: 'gaikousei',
	    data: [e_plus_counter]
	},
	{
	    name: 'sinkeisyoukeikou',
	    data: [n_plus_counter]
	},
	{
	    name: 'kaihou',
	    data: [o_plus_counter]
	},
	{
	    name: 'kyoutyousei',
	    data: [a_plus_counter]
	},
	{
	    name: 'seijitusei',
	    data: [c_plus_counter]
	},

			 ]
            },{
				//      low: 0,
		//                              high: 100                                                                                   
	    });
    });

	//	    data: [e_plus_counter/taiwa_counter*100, n_plus_counter/taiwa_counter*100, o_plus_counter/taiwa_counter*100, a_plus_counter/taiwa_counter*100, c_plus_counter/taiwa_counter*100]
	

