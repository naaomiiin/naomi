/*console.log("こんにちは");
console.log($("#input").val());
$("#input").val("merci");
console.log($("#input").val());*/

//var bigfive = {"bigfive":{"e":"neg"},{"n":"pos"}, {"o":"neg"}, {"a":"pos"}, {"c":"neg"}};
/* e: 外向性, n: 神経症傾向, o: 開放性, a: 協調性, c: 誠実性 , pos: ポジティブ, neg: ネガティブ*/

$('#input').first().focus();

var taiwa_counter=0;
var append_counter=0;

/*
var e_plus_counter=25;
var n_plus_counter=25;
var o_plus_counter=25;
var a_plus_counter=25;
var c_plus_counter=25;
*/

labels=[];
for(var i=1;i<=30;i++){
    labels.push(i);
}
data_e = [];
for(var i=1;i<=30;i++){
    data_e.push(0);
}

data_n = [];
for(var i=1;i<=30;i++){
    data_n.push(0);
}

data_o = [];
for(var i=1;i<=30;i++){
    data_o.push(0);
}

data_a = [];
for(var i=1;i<=30;i++){
    data_a.push(0);
}

data_c = [];
for(var i=1;i<=30;i++){
    data_c.push(0);
}

chart = new Chartist.Line('.ct-chart', {
	labels:labels,
	series: [
{
    name: 'gaikousei',
     data: data_e    
},
{
    name: 'sinkeisyoukeikou',
    data: data_n
 },
{
    name: 'kaihou',
    data: data_o
},
{
    name: 'kyoutyousei',
    data: data_a
},
{
    name: 'seijitusei',
	data: data_c
},

		 ]
	    },{
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
	    
	$point.animate({'stroke-width': '20px'}, 300, easeOutQuad);
	$toolTip.html(seriesName + '<br>' + value).show();
    });

$chart.on('mouseleave', '.ct-point', function() {
	var $point = $(this);

	$point.animate({'stroke-width': '10px'}, 300, easeOutQuad);
	$toolTip.hide();
    });

$chart.on('mousemove', function(event) {
	$toolTip.css({
		left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
		    top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 40
		    });
    });


$ (function(){    //タブ
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
	taiwa_counter++;
	$('#history').animate({ scrollTop: ($('#history')[0].scrollHeight) }, 'slow');  //自動スクロール
	$('#rireki').animate({ scrollTop: ($('#rireki')[0].scrollHeight) }, 'slow');
	
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
		    
		    //外向性
                    var e_result = data.e.class;
		    
		    //外向性の更新
		    data_e.shift();
		    if(e_result==="Eplus"){
			//data_e.push(e_plus_counter++;)
			var last_index = data_e.length - 1;
			var new_value = data_e[last_index] + 1 ;
			data_e.push(new_value);
		    }else{
			var last_index = data_e.length - 1;
			var new_value = data_e[last_index] ;
			data_e.push(new_value);
		    }
		    
		    //神経症傾向
		    var n_result = data.n.class;
                    		    
		    //神経症傾向の更新
		    if(n_result==="Nplus"){
			var last_index = data_n.length - 1;
			var new_value = data_n[last_index] + 1 ;
                        data_n.push(new_value);
                    }else{
                        var last_index = data_n.length - 1;
                        var new_value = data_n[last_index] ;
                        data_n.push(new_value);
                    }


		    //開放性
		    var o_result = data.o.class;
                    		    
		    //開放性の更新
		    if(o_result==="Oplus"){
			var last_index = data_o.length - 1;
			var new_value = data_o[last_index] + 1 ;
                        data_o.push(new_value);
                    }else{
                        var last_index = data_o.length - 1;
			var new_value = data_o[last_index] ;
			data_o.push(new_value);
                    }

		    //協調性
		    var a_result = data.a.class;
                    		    
		    //協調性の更新
		    if(a_result==="Aplus"){
			var last_index = data_a.length - 1;
			var new_value = data_a[last_index] + 1 ;
                        data_a.push(new_value);
                    }else{
                        var last_index = data_a.length - 1;
			var new_value = data_a[last_index] ;
			data_a.push(new_value);
                    }

		    
		    //誠実性
		    var c_result = data.c.class;
                    		   
		    //誠実性の更新
		    if(c_result==="Cplus"){
			var last_index = data_c.length - 1;
			var new_value = data_c[last_index] + 1 ;
                        data_c.push(new_value);
                    }else{
                        var last_index = data_c.length - 1;
			var new_value = data_c[last_index] ;
			data_c.push(new_value);
                    }

		    //対話履歴タブ
		    chat_log = function(text){
			//console.log(text);
			$("#chat_log").append('<div>'+text+'</div>');
		    };
		    
		    chat_log(" — "+taiwa_counter+"回目 — ");
		    chat_log("ユーザ："+$("#input").val());
		    chat_log("システム："+systemReply);
		    chat_log("外向性："+e_result);
		    chat_log("神経症傾向："+n_result);
		    chat_log("開放性："+o_result);
		    chat_log("協調性："+a_result);
		    chat_log("誠実性："+c_result);
		    chat_log("***********************************");
		}});
	
	$("#taiwa_count").text("対話回数 "+taiwa_counter+" 回");
	$("#input").val("");
	

	chart = new Chartist.Line('.ct-chart', {
		labels: labels,
		series: [
	{
	    name: 'gaikousei',
	    data: data_e
	},
	{
	    name: 'sinkeisyoukeikou',
	    data: data_n
	},
	{
	    name: 'kaihou',
	    data: data_o
	},
	{
	    name: 'kyoutyousei',
	    data: data_a
	},
	{
	    name: 'seijitusei',
	    data: data_c
	},

			 ]
            },{
		//      low: 0,
		//      high: 100                                                                                   
	    });
    });;

		

//chat_log = function(text){
//  console.log(text);
//  $("#chat_log").append('<div>'+text+'</div>');
    //$("#chat_log").append(text);
//};
   
//chat_log($("#input").val());

//$("#input").val());
//taiwa_counter++;
//console.log("対話回数:"+taiwa_counter+"回");
