// ==UserScript==
// @name                turntable disguise
// @namespace	        https://github.com/apcshields/ttdisguise
// @description	        Allows you to apply disguises to turntable members.
// @version				15
// @include				http://turntable.fm/the_jolly_potamus
// ==/UserScript==

(function() {
	var scripts = [
	   'https://raw.github.com/apcshields/ttdisguise/master/engine.js'
	   //'http://brothersjunk.com/hack/ttdisguise/engine.js'
	];
	
	for (i in scripts) {
	    var script = document.createElement('script');
	    script.src = scripts[i];
	    document.getElementsByTagName('body')[0].appendChild(script);
	}
})();