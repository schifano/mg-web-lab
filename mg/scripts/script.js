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