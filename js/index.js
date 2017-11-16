$(function(){
		
		var photoA = new Array("banner1.jpg","banner1.jpg","banner1.jpg","banner1.jpg","banner1.jpg","banner1.jpg");
		var photoWidth = parseInt($(".banner .ban li").css("width"));
	var num = photoA.length;
	// console.log(photoWidth);
		for(var i=0;i<num;i++){
			$(".banner .ban li:eq("+ i +")").css({"background":"url(img/"+ photoA[i] +") no-repeat ","background-position":"-200px"});
		}
		// console.log($("nav .ban li:eq(1)").css("background"));
	$(".ban").css("width",num*photoWidth+"px");
	var timer = null;


	timer = setInterval(changeP,4000);

	function changeP(){
//		moveP=parseInt($(".ban").attr("left"));
		moveP = Math.abs(parseInt($(".ban").css("left"))) +photoWidth;
		// console.log(moveP);
		if(moveP >= (num-1)*photoWidth){
			moveP=0;
		}
		$(".ban").css("left","-" +moveP+"px");
		// moveP += 1350;
		var sNum = moveP/photoWidth;
		// ys(sNum);
		
	}

	
	$(".banner .ban").mouseover(function(){
		clearInterval(timer);
	})
	$(".banner .ban").mouseout(function(){
		timer = setInterval(changeP,4000);
	})
	
	var photob = new Array("advantage_img2.jpg","advantage_img2.jpg","advantage_img2.jpg","advantage_img2.jpg","advantage_img2.jpg","advantage_img2.jpg","advantage_img2.jpg","advantage_img2.jpg")
	var photoc = new Array("h_logo1.png","h_logo2.png","h_logo1.png","h_logo2.png","h_logo1.png","h_logo2.png","h_logo1.png","h_logo2.png","h_logo1.png","h_logo2.png","h_logo1.png","h_logo2.png")

	photo($(".example>.caseLogo>.caseLogo2>.caseLogo3>ul>li"),photoc);
	photo($(".good>ul>li>.smBan>li"),photob);
	function photo(attr,array){
	
		var num = array.length;
		for(var i=0;i<num;i++){
			attr.eq(i).css({"background":"url(img/"+ array[i] +") no-repeat center","background-position":"center"});
		}
}

	movephoto($(".example>.caseD>.caseDD>ul"),$(".example>.caseD>b"),380,photob,1900);
	movephoto($(".banner .ban"),$(".banner>b"),1920,photoA,9600);
	movephoto($(".good>ul>li>.smBan"),$(".good>ul>li>b"),580,photob,3480);
	movephoto($(".example>.caseLogo>.caseLogo2>.caseLogo3>ul"),$(".example>.caseLogo>.caseLogo2>b"),230,photoc,1380);
	function movephoto(attr,attr2,num,arr,num2){
		var movePP;
		// console.log(attr,num);
	
		// console.log(movePP);
		attr2.eq(1).click(function(){
			 movePP = parseInt(attr.css("left"));
			 // console.log(movePP);
			attr.css("left",(movePP-num)+"px");
			if(Math.abs(movePP) >= num2){
				attr.css("left","0px");
			}
		})
		attr2.eq(0).click(function(){
			 movePP = parseInt(attr.css("left"));
			// console.log(movePP);
			attr.css("left",(movePP+num)+"px");
			if(movePP >=0){
				movePP=(arr.length-1)*num;
				attr.css("left","-"+num2+"px");
			}
		})
	}


	function getP(){
		var oldP = $(document.body).scrollTop()+$(document.documentElement).scrollTop();
		return oldP;
	}

	scrolll();
	
	function scrolll(){
		$(window).scroll(function(){
			// console.log("dsc");
			var num22 = getP();
				// alert("sad");
				if(num22>=40){
					$("nav").css({"position":"fixed","top":"0px"});
				}else{
					$("nav").css({"position":"relative"});
				}	
		})
	}

	formCheck($(".ask>.ask2>.connect>.connect2>form>.ddd"),$(".ask>.ask2>.connect>.connect2>form>span"));
	function formCheck(attr,attr2){
		attr.each(function(){
			$(this).blur(function(){
				// console.log("sa");
				var num = parseInt($(this).attr("name"))-1;
				// console.log(num);
				if($(this).val()){
					attr2.eq(num).css("display","none");
						// console.log("sa");
				}else{
					attr2.eq(num).css("display","block");
				}
			})
		})

	}

	navShow();
	function navShow(){
		$("nav>div>ul>li").each(function(){
			var num = parseInt($(this).attr("num"));
			// console.log(num);
			$(this).hover(function(){
				$("nav>div>ul>.navD").eq(num).css("height","220px");
			},function(){
				$("nav>div>ul>.navD").eq(num).css("height","0px");
			})
		});
	}
	
	dddChange();
	function dddChange(){
		

		$(".good>ul>.dBan>b").eq(0).click(function(){
			// num++;
			dfg($(".good>ul>.dBan>.dddBan>li:eq(0)"),1);
			dfg($(".good>ul>.dBan>.dddBan>li:eq(1)"),1);
			dfg($(".good>ul>.dBan>.dddBan>li:eq(2)"),1);

			
		})
		$(".good>ul>.dBan>b").eq(1).click(function(){
			dfg($(".good>ul>.dBan>.dddBan>li:eq(0)"),2);
			dfg($(".good>ul>.dBan>.dddBan>li:eq(1)"),2);
			dfg($(".good>ul>.dBan>.dddBan>li:eq(2)"),2);
		})
	}
	function dfg(att,nnn){
		var num,num3 ;
		var classN = new Array("dddL1","dddL2","dddL3");
		var num2 = att.attr("class").replace(/[^0-9]/ig,"");
		if(nnn==1){
			num = num2+1;
			if(num>=3){
				num = num%3;
			}
			att.attr("class",classN[num++]);
			console.log(att.attr("class"));
		}else if(nnn==2){
			num = num2-1;
				if(num<=2){
					num=(num+1)%3;
				}
				
				att.attr("class",classN[num]);
				console.log(num);
				console.log(att.attr("class"));
		}
		
				// console.log(aaa.eq(0).attr("class"));	
	}


	backTop();
	function backTop(){
		$(".ask>.ask2>.connect>.connect2>form>textarea").val("");
		$(".back_top").click(function(){
			location.href="#topT";
		})
	}


	online();
function online(){
	$(".online_service>.service_lf").click(function(){
		$(".online_service").toggleClass("zZhao");
	})
}

})  //结束位置