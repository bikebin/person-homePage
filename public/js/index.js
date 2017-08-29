
/**
 * Created by ASUS on 2017/8/17.
 */
$(function(){
	$('[data-toggle="tooltip"]').tooltip();

    $("#jd_close").on("click ",function(){
        $("#top_banner").hide();
    })

   

    // $('.change .item').on('mouseenter',function(event) {
    //     $(body).background = 'blue';
    // })
    var leader = 0 ,target = 0,timer = null;

	$("#article > li").on('click',function(){
		$(this).addClass('.addcolor');
		console.log($(this).index());
		clearInterval(timer);
		target = 500*($(this).index());
		  //核心语句
		  
		timer = setInterval(function(){
			leader = leader +(target - leader)/10;  //他会走target的长度，这句是运动函数，不会减少它走的长度
			window.scrollTo(0,leader);   //屏幕滑动(x,y)
		},30)
		
	})
	// 背景变颜色
	$('.item01').on('mouseenter',function(){
		$(document.body).get(0).style.backgroundColor = "#eae9fe";
		$(".right-content-bottom ").children().eq(0).get(0).style.backgroundColor = "#eae9fe";

	})
	$('.item02').on('mouseenter',function(){
		$(document.body).get(0).style.backgroundColor = "orange";
		$(".right-content-bottom ").children().eq(1).get(0).style.backgroundColor = "orange";
	})
	$('.item03').on('mouseenter',function(){
		$(document.body).get(0).style.backgroundColor = "pink";
		$(".right-content-bottom ").children().eq(2).get(0).style.backgroundColor = "pink";

	})
	$('.item04').on('mouseenter',function(){
		$(document.body).get(0).style.backgroundColor = "gray";
		$(".right-content-bottom ").children().eq(3).get(0).style.backgroundColor = "gray";

	})
	// 爱心点击函数
	var round01 = 1;
	var round02 = 1;
	var raised01 = 1;
	var raised02 = 1;

	$(".round .round01").on('click',function(){
		console.log('shuchulema');
		round01  ++;
		document.querySelector('.round01-aixin').innerText= round01 ;

	})
	$(".round .round02").on('click',function(){
		console.log('shuchulema');
		round02 ++;
		document.querySelector('.round02-aixin').innerText= round02 ;

	})
	$(".raised .raised01").on('click',function(){
		console.log('shuchulema');
		raised01 ++;
		document.querySelector('.raised01-aixin').innerText= raised01;

	})
	$(".raised .raised02").on('click',function(){
		console.log('shuchulema');
		raised02 ++;
		document.querySelector('.raised02-aixin').innerText= raised02;

	})

	// add
 //    var divs = $(".focuscontent >div>div");
	
	// divs.mouseenter(function() {
	// 	$(this).addClass('addcolor02').siblings('div').removeClass('addcolor02').parent("div").siblings("div").children("div").removeClass('addcolor02');
	// 	$(this).children("span").children("a").addClass('addfontcolor');
	// })
	// divs.mouseleave(function() {
		
	// 	$(this).children("span").children("a").removeClass('addfontcolor');
	// })
	
	// mp3播放器
	$(".open").on('click',function(){
		audio.play();
	});
	$(".pause").on('click',function(){
		audio.pause();
	})
	// 留言
	
})


