$(document).ready(function() {
	$('body').append($(document.createElement('p')).css({ 'position': 'absolute', 'margin': '3em auto', 'padding': '1em', 'font-size': '48px', 'color': 'yellow', 'background': 'red' }).append(document.createTextNode('Hello!')));
});