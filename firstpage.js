$(".add").mouseenter(function(){
	$(".add").fadeIn("fast",function(){
		$(".add").css({

			background:"black",
		    color:"white"
		});
	})
})
  

  $(".add").mouseleave(function(){
	 $(".add").css("background","transparent")
	 	$(".add").css("color","black");
	 
	 
})