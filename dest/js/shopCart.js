window.onload=function(){for(var c=getCookie("center"),t="",n=0;n<c.length;n++){var a=c[n];console.log(a),t+='<div class="shop-item clearfix"><p class="fl"><input type="checkbox" class="ck"/></p><img class="fl" src="../images/'+a.src+'" alt="" /><p class="fl">'+a.name+'</p><span class="fl">'+a.price+'元</span><p class="fl count" data-id="'+a.id+'" data-price="'+a.price+'" data-count="'+a.count+'"data-name="'+a.name+'" data-src="'+a.src+'"><span class="updateCount" data-number="1">+</span><span class="shop-count">'+a.count+'</span><span class="updateCount" data-number="-1">-</span></p><em class="fl sumPrice">'+a.count*a.price+'元</em><i class="fl delBtn">删除</i></div>'}function e(){var t=0,n=0;$(".ck:checked").each(function(){n+=parseInt($(this).parent().parent().find(".shop-count").html()),t+=parseInt($(this).parent().parent().find(".sumPrice").html())}),$(".count2").html(n),$(".money2").html(t)}$(".shoplist").html(t),$("#selectAll").click(function(){$(".ck").prop("checked",$(this).prop("checked")),e()}),$(".ck").click(function(){e()}),$(".updateCount").click(function(){var t=$(this).data("number");if(1!=$(this).parent().find(".shop-count").html()||"-1"!=t)for(var n=$(this).parent().data("id"),a=0;a<c.length;a++)if(c[a].id==n){c[a].count+=t,setCookie("shoplist",JSON.stringify(c)),$(this).parent().find(".shop-count").html(c[a].count),$(this).parent().next().html(c[a].count*c[a].price+"元"),e();break}}),$(".delBtn").click(function(){for(var t=$(this).parent().find(".count").data("id"),n=0;n<c.length;n++)if(c[n].id==t){c.splice(n,1),$(this).parent().remove(),removeCookie("center");break}})};