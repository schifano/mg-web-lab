/* Handles movement of the rocket */
$(document).ready(function() {
    $(document).keydown(function(key) {
        
    	/*This might be an easier answer. parseInt() will take the key.which, 
    	which happens to be the key the user pressed, and turns it into a number. 
    	Originally, when the key is pressed, it was recognized as a string but 
    	not after parseint is done with it! The 10 is simply a way to tell the 
    	computer you want this number in decimal form, the form us humans are 
    	most comfortable with, hence 10 fingers and 10 toes. */

        switch(parseInt(key.which,10)) {

        	/* Animate the rocket left */
			case 37:
				animate('rocket', {left: -7});
				break;
			
			/* Animate the rocket up */
			case 38:
				animate('rocket', {top: -7});
				break;
			
			/* Animate the rocket right */
			case 39:
				animate('rocket', {left: 7});
				break;

			/* Animate the rocket down */
			case 40:
				animate('rocket', {top: 7});
				break;
			default:
				break;
		}



	});
});


/*
37 - left

38 - up

39 - right

40 - down
*/
