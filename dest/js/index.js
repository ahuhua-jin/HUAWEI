$(function(){
		$('#Loading-btn').click(function(){
			$('#Loading').remove()
		})
})
//下拉菜单
$(".MoreExcit").mouseenter(function(){
	$(".Spinner").slideToggle(300)
})
//右边导航的下拉菜单 客户服务
$("#CusTomer").mouseenter(function(){
	$(".CusCenter").slideToggle(300)
})
//网站导航
$("#navigation").mouseenter(function(){
	$(".CusCenter1").slideToggle(300)
})
//手机版
$("#Ver-ph").mouseenter(function(){
	$(".Phcon").slideToggle(300)
})
//购物车
$(".shopcar").mouseenter(function(){
	$(".shop").slideToggle(300)
})

$(function(){
		var timer = setInterval(auto,2500);
		var index = 0;
		function auto(){
			index++;
			if( index == $(".Bol li").size() ){
				index = 0;
			}
			$(".Bol li").eq(index).addClass("current").siblings().removeClass("current");
			$(".Bul li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
		}
		
		//鼠标 操作
		$(".Bol li").mouseenter(function(){
			clearInterval(timer);
			index = $(this).index()-1;
			auto();
		})
		$(".Bol li").mouseout(function(){
			timer = setInterval(auto,2500);
		})
	})

var $Lol=$('.Lol li'),
	$Lul=$('.Lul div');
$Lol.mouseenter(function(){
	var index = $(this).index();
	$Lul.eq(index)
		.css('display','block')
		.siblings()
		.css('display','none')
})
$Lol.mouseleave(function(){
	var index = $(this).index();
	$Lul.eq(index)
		.css('display','none')
})