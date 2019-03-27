window.onload = function(){
		//获取cookie数据
		var cookieInfo = getCookie("center");
		var str = "";
		for( var i = 0 ; i < cookieInfo.length ; i++ ){
			var  shopinfo = cookieInfo[i];
			console.log(shopinfo)
			str += '<div class="shop-item clearfix">'+
					'<p class="fl"><input type="checkbox" class="ck"/></p>'+
					'<img class="fl" src="../images/'+ shopinfo.src +'" alt="" />'+
					'<p class="fl">'+ shopinfo.name +'</p>'+
					'<span class="fl">'+ shopinfo.price +'元</span>'+
					'<p class="fl count" '+
						'data-id="'+ shopinfo.id +'" '+
						'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'"'+
						'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src +'"'+
						'>'+
						'<span class="updateCount" data-number="1">+</span>'+
						'<span class="shop-count">'+ shopinfo.count +'</span>'+
						'<span class="updateCount" data-number="-1">-</span>'+
					'</p>'+
					'<em class="fl sumPrice">'+ (shopinfo.count * shopinfo.price) +'元</em>'+
					'<i class="fl delBtn">删除</i>'+
				'</div>';
		}
		//显示数据
		$(".shoplist").html(str);
		
		//全选
		$("#selectAll").click(function(){
			$(".ck").prop("checked" , $(this).prop("checked") );
			jiesuan();
		})
		//点击复选框 结算
		$(".ck").click(function(){
			jiesuan();
		})
		//结算
		function jiesuan(){
			var money = 0;
			var count = 0;
			//遍历被选中的复选框  累加他们的商品数量个数和金额
			$(".ck:checked").each(function(){
				count += parseInt($(this).parent().parent().find(".shop-count").html())
				money += parseInt($(this).parent().parent().find(".sumPrice").html())
			})
			$(".count2").html(count);
			$(".money2").html(money);
		}
		
		//加减操作
		$(".updateCount").click(function(){
			//确定操作符号  使用data-number的值确定
			var num = $(this).data("number");
			//确定现有的商品数量
			var count = $(this).parent().find(".shop-count").html();
			
			if( count == 1 && num == "-1" ){
				return ;
			}
			//确定要加减的商品的编号
			var pid = $(this).parent().data("id");
			for( var i = 0 ; i < cookieInfo.length ; i++ ){
				if( cookieInfo[i].id == pid ){
					
					//对商品中count值++或--
					cookieInfo[i].count += num;
					//将修改后的数组重新存入到cookie中
					setCookie( "shoplist" , JSON.stringify(cookieInfo) );
					$(this).parent().find(".shop-count").html( cookieInfo[i].count );
					$(this).parent().next().html( cookieInfo[i].count * cookieInfo[i].price + "元" )
					jiesuan();
					//界面变化
					break;
				}
			}
		})
		//删除操作
		$(".delBtn").click(function(){
			//获取要删除的商品的编号
			var pid = $(this).parent().find(".count").data("id");
			//根据pid的值去数组cookieInfo中查找 找到后删掉 重新存cookie
			for( var i = 0 ; i < cookieInfo.length ; i++ ){
				if( cookieInfo[i].id == pid ){
					//数组的下标i对应的商品就是要删除的商品
					cookieInfo.splice(i,1);
					$(this).parent().remove();
					removeCookie("center")
					break;
				}
			}
		})
	}