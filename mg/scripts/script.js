/* Easter Eggs */
$(document).ready(function() {
	$('div.planet1').click(function() {
		$('div.planet1').fadeOut('fast');
		$('div.planet1').fadeIn('fast');
	});
});

/* Toggle Nyancat when hit 'n' button */
$(document).keypress(function(e){
	var key = e.which;
	if (key == 110) {
		$('img.nyan').toggle();
	}
});


/* Register collision events */

// Explode the rocket when it collides with the asteroid
register_collision('rocket', 'burst-8', explode_rocket);




// ######## How to use register_collision() ########
// Here is the syntax: register_collision(string Object1Id, string Object2Id, function callback)
// When object1 collides with object2, the callback function will be called.


// ######## How to trigger a custom action when a collision occures ########
// Currently the only built in action is to explode the rocket (explode_rocket). Custom actions can be created easily with javascript.
// In this example, movement is disabled, and the rocket image is changed to an explosion using jquery:
/*
	register_collision('rocket', 'burst-8', function (){
		disable_movement(true);
		$('#rocket').attr("src","images/explosion1.gif");
	});
*/
// 
// The actual implementation of the explosion in animate.js does not depend on jquery, but jquery is used here to show that its features are available.