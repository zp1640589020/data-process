
			$(function(){
				var time
				$("input:checkbox").click(function(){
					time++;
					if(time%2==0){
						$("input:checkbox").prop(false)
					}else{
						$("input:checkbox").prop(true)
					}
				})
				$(".choose input:checkbox").click(function(){
					var huoqu=$("input:checkbox")
					var ruguo=true;
					for(var k=0;k<huoqu.length;k++){
						var aa=$(huoqu[k]).prop("checkbox")
						if(aa==false){
							ruguo==false
						}
						
					}
					if(ruguo==true){
						$(".choose input:checkbox").prop("checked", true)
					}else{
						$(".choose input:checkbox").prop("checked", false)
					}
				})
			})