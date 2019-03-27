var btn = document.getElementById("btn");
	var sname = document.getElementById("uname");
	var pwd = document.getElementById("upwd");
	var str = getCookie("infor");
	var userN = str.uname;
	var userP = str.upwd;
	
//   uname     张三      upwd   123456
	
	
	$("#btn").click(function(){
		if($("#uname").val() == userN && $("#upwd").val()== userP){
			alert("登录成功");
			window.location.href = "../html/index.html";
		}else{
			alert("登录失败");
		}
	})
	