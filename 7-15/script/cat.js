
var cat={
	name:"mimi",
	age:2,
	sayAge:function(){
		alert(this.age);//sayAge方法内容
		return this;
	},
	sayHello:function(){
		var content="大家好！我是"+this.name+",今年"+this.age+"岁了!"
		alert(content);
		return this;
	},
	act:function(active){
		var content="我喜欢"+active;
		alert(content);
		return this;
	},
	count:function(n1,n2,op){
		var res=0;
		switch(op){
			case "+":res=Number(n1)+Number(n2);break;
			case "-":res=Number(n1)-Number(n2);break;
			case "*":res=Number(n1)*Number(n2);break;
			case "/":res=Number(n1)/Number(n2);break;
		}
		alert(res);
		return this;
	}
}