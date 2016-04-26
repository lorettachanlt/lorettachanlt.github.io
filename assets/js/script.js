$(document).ready(function() {

	var mn = $(".navbar");
	var nb = $(".navbutton");
	var cm = $("#contact");

	$(window).scroll(function() {
		if ($(this).scrollTop() > 250 ) {
			mn.addClass("navbar-scrolled");
			mn.css("background-color", "#b3e7ff");
		} else {
			mn.removeClass("navbar-scrolled");
			mn.css("background-color", "#e6f2ff");
		}
	});
	
	nb.hover(function(){
    	$(this).css("border-bottom-color","#66ccff");
    	$(this).css("border-bottom-style","solid");
    	$(this).css("border-bottom-width","3px");
  	},function(){
   		 $(this).css("border-bottom-color","");
    	$(this).css("border-bottom-style","");
    	$(this).css("border-bottom-width","");
  	});

  	cm.click(function(){
    	$("#modal-container").show();
    },function(){
   		$("#modal-container").hide();
  
  	});
	// Question 5
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	$("#modal-overlay").click(function() {
		 $("#modal-container").hide();
	});

});