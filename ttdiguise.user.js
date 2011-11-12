// ==UserScript==
// @name                turntable disguise
// @namespace	        https://github.com/apcshields/ttdisguise
// @description	        Allows you to apply disguises to turntable members.
// @version				4
// @include				http://turntable.fm/*
// ==/UserScript==

(function() {
	var scripts = [
	   // 'https://ajax.googleapis.com/ajax/libs/prototype/1.7.0.0/prototype.js',
	    'https://raw.github.com/apcshields/ttdisguise/master/engine.js'
	];
	
	for (i in scripts) {
	    var script = document.createElement('script');
	    script.src = scripts[i];
	    document.getElementsByTagName('body')[0].appendChild(script);
	}
})();