$("#sign").on("click",function(){
	$("#mainbt").fadeOut();
	$("h1").fadeOut(function(){
		$(".signUpForm").fadeIn();
	});
});


$("#log").on("click",function(){
	$("#mainbt").fadeOut();
	// $("nav").fadeOut();
	$("h1").fadeOut(function(){
		$(".loginForm").fadeIn();
	});
});
$("#second").on("click",function(){
	$(".signUpForm").fadeOut(function(){
          $(".loginForm").fadeIn();
	});
	
})

$("#first").on("click",function(){
	$(".loginForm").fadeOut(function(){
		$(".signUpForm").fadeIn()
	})
})

$("#sg").on("click",function(){
	$("#sg").css("outline","none")
	$("#mainbt").fadeOut();

	$("h1").fadeOut(function(){
		// (".loginForm").fadeOut();
		$(".signUpForm").fadeIn();
		$("#lg").on("click",function(){
			$(".signUpForm").css("display","none");
			$(".loginForm").fadeIn();
		
		})

	});
});

$("#lg").on("click",function(){
	$("#lg").css("outline","none")
	$("#mainbt").fadeOut();
	// $("nav").fadeOut();
	$("h1").fadeOut(function(){
		$(".loginForm").fadeIn();
		$("#sg").on("click",function(){
			$(".loginForm").css("display","none");
			$(".signUpForm").fadeIn();
		
		})
	});
});
	
	
	
