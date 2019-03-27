
	$("#uname").blur(function(){
		// 可以数字字母下划线但是 字母_ 开头   6,10
		var val = this.value;
		var reg = /^[a-zA-Z_]\w{5,9}$/;
		if(reg.test(val)){
			$("#s1").html('<font color="darkgreen">√</font>');
			
		}else{
			$("#s1").html("<font color='red'>以 字母开头 可以数字字母下划线  6~10个数字</font>");
		}
	})
		
	$("#uname").click(function(){
		$("#s4").html();
	})
	$("#upwd").blur(function(){
		$("#uname").blur();
		var val = this.value;
		var reg = /^\w{8,}$/;
		if(reg.test(val)){
			$("#s2").html("<font color='darkgreen'>√</font>")
		}else{
			$("#s2").html("<font color='red'>有数字字母下划线至少八位</font>")
		}
	}) 
	
	$("#surePwd").blur(function(){
		$("#upwd").blur();
		var oldPwd = $("#upwd").val();
		var val = $("#surePwd").val();
		if(val != "" && oldPwd == val){
			$("#s3").html("<font color='darkgreen'>√</font>");
		}else{
			$("#s3").html("<font color='red'>密码不一致</font>");
		}
		
	})
	
	var btn = $('#btn');
	var uname =$("#uname").val();
	var upwd = $("#upwd").val()
	
	console.log(uname)
	btn.click(function(){
		if($("#uname").val()==""&&$("#upwd").val()==""){
			$("#s4").html("<font color='red'>内容不能为空</font>");
		}else{
			var obj={
			uname:$("#uname").val(),
			upwd:$("#upwd").val()
		}
		
		obj1= JSON.stringify(obj);
		setCookie("infor",obj1,3);
		window.location.href = "../html/login.html";
		}
	}) 