$(document).ready(function() {
	var tc = ".tweet-compose";
	var ts = "#tweet-submit";
	var cc ="#char-count";
	var i = 140;

	//Initially hide button and character count
	$(ts).hide();
	$(cc).hide();

	$(tc).on("click", function() {

		//Increase the size of compose box and reveal button and character count on click
		$(this).css("height", "5em");
		$(ts).show();
		$(cc).show();


		//Reduce character count as digits are typed, turn red at 10 or less, and remove tweet button when character count is exceeded.
		
		$(tc).keydown(function(){
		    if(this.value.length > 140){
		    	$(ts).hide();
		    	$(cc).html(0);
		    }
		    if (this.value.length <= 140) {
		    	$("#char-submit").show();
		    	$(cc).html(140 - this.value.length);
		    }
		    if(this.value.length < 130) {
		    	$(cc).css("color", "black");
		    }
		    if(this.value.length >= 130) {
		    	$(cc).css("color", "red");
		    }
		})

		$(ts).on("click", function() {
			



		});


	});

	








	





});

