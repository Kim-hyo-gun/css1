$(function(){
	
	$("#popup #exit").click(function(){ //팝업창 닫기
		$("#popup").hide();
		return false;
	});
	
	let move = setInterval(moveImg, 6000);;
	
	function moveImg(){ //슬라이드 이동
		$(".mainImg").each(function (){
			var left = parseInt($(this).css("left"));
			
			$(this).animate({"left": "-=980"},2000,function (){
				if (parseInt($(this).css("left")) <= -4900){
					$(this).css({"left": 0});
				}
			});
		});
	}

	$(".prev").click(function(){ //이전 버튼
		if (parseInt($(".mainImg").css("left")) >= 0){
			$(".mainImg").css({"left":-3920});
		} else {
			$(".mainImg").animate({"left":"+=980"});
		}
	});
		
		
	$(".next").click(function(){ //다음 버튼
		if (parseInt($(".mainImg").css("left")) <= -3920){
			$(".mainImg").css({"left":0});
		} else {
			$(".mainImg").animate({"left":"-=980"});
		}
	});
	
	$(".stop").click(function(){ //멈춤버튼
		clearInterval(move);
		$(this).hide();
		$(".start").show();
	})
	
	$(".start").click(function(){ //다시 시작
		setInterval(moveImg, 6000);
		$(this).hide();
		$(".stop").show();
	})
	
	$(".today li a img").click(function(){ //today 이미지 클릭시 확대
		$(".todayBig img").attr({"src":$(this).attr("src"), "alt":$(this).attr("alt")});
		$(".todayBig img, .todayBig .close").fadeIn();
		return false;
	});
	
	$(".todayBig img").click(function(){ //today 이미지 클릭시 닫기
		$(this).fadeOut();
		$(".todayBig .close").fadeOut();
	});
	
	$(".todayBig .close").click(function(){ //today 이미지 클릭시 닫기
		$(".todayBig img").fadeOut();
		$(this).fadeOut();
	});
	
	$(".best li a img").click(function(){ //best 이미지 클릭시 확대
		$(".bestBig img").attr({"src":$(this).attr("src"), "alt":$(this).attr("alt")});
		$(".bestBig img, .bestBig .close").fadeIn();
		return false;
	});

	$(".bestBig img").click(function(){ //today 이미지 클릭시 닫기
		$(this).fadeOut();
		$(".bestBig .close").fadeOut();
	});
	
	$(".bestBig .close").click(function(){ //today 이미지 클릭시 닫기
		$(".bestBig img").fadeOut();
		$(this).fadeOut();
	});
});