var disguise = {
	mask: undefined,
	setup: function(mask) {
		this.mask = mask;
		
		this.don($('img[src*="avatars"]').each(this.don)[0].parent());
		
		$($('.roomView').children()[1]).delegate('*', 'DOMNodeInserted', disguise.respond);
	},
	respond: function(event) {
		if (event.srcElement.nodeType == 1 && /avatars/.test(event.srcElement.innerHTML)) {
			disguise.don($(event.srcElement).find('img[src*="avatars"]').each(disguise.don)[0].parent());
		}
	},
	don: function() {
		var src = $(this).attr('src');
		
		if (!src) { // Must be the wrapper div.
			$(this).css(disguise.mask.dj.wrapper);
		} else if (src.substr(-12) == 'bodyback.png') {
			$(this).attr('src', disguise.mask.imgs.bodyback).css(disguise.mask.dj.bodyback);
		} else if (src.substr(-12) == 'bodyback.png') {
			$(this).attr('src', disguise.mask.imgs.bodyback).css(disguise.mask.dj.bodyback);
		} else if (src.substr(-12) == 'bodyback.png') {
			$(this).attr('src', disguise.mask.imgs.bodyback).css(disguise.mask.dj.bodyback);
		} else if (src.substr(-12) == 'bodyback.png') {
			$(this).attr('src', disguise.mask.imgs.bodyback).css(disguise.mask.dj.bodyback);
		}
	}
};

$(document).ready(function() {
	setup(disguises.monkey);
});

/*
var q4 = function(e) {
	if (e.srcElement.nodeType == 1 && /avatars/.test(e.srcElement.innerHTML)) {
		console.log({ srcElement: e.srcElement.innerHTML, imgs: $(e.srcElement).find('img'), target: e.target });
	}
};
*/

/*
<div style="position: absolute; left: 240px; top: 30px; z-index: 30; ">
	<div style="position: absolute; margin-left: -15px; margin-top: -15px; cursor: pointer; ">
		<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/bodyback.png" style="position: absolute; display: none; ">
		<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/bodyfront.png" style="position: absolute; left: 22px; top: 58.85px; z-index: 0; ">
		<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/headfront.png" style="position: absolute; z-index: 1; -webkit-transform: rotate(0deg); left: 0px; top: 0px; ">
		<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/headback.png" style="position: absolute; display: none; -webkit-transform: rotate(0deg); left: 0px; top: 0px; ">
	</div>
</div>

<div style="position: absolute; margin-left: -6px; margin-top: -2px; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/10/scaled/65/legs.png" style="position: absolute; left: 26.650000000000002px; top: 65px; z-index: 0; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/10/scaled/65/fronttorso.png" style="position: absolute; display: none; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/10/scaled/65/backtorso.png" style="position: absolute; left: 26.650000000000002px; top: 57.85px; z-index: 1; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/10/scaled/65/leftarm.png" style="position: absolute; left: 17.55px; top: 58.5px; z-index: 2; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/10/scaled/65/rightarm.png" style="position: absolute; left: 40.95px; top: 58.5px; z-index: 3; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/10/scaled/65/headfront.png" style="position: absolute; display: none; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/10/scaled/65/headback.png" style="position: absolute; left: 0px; top: 0px; z-index: 4; ">
</div>
*/

var disguises = {
	monkey: {
		imgs: {
			bodyback: 'https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/bodyback.png',
			bodyfront: 'https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/bodyfront.png',
			headfront: 'https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/headfront.png',
			headback: 'https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/headback.png'
		},
		dj: {
			wrapper: 'position: absolute; margin-left: -15px; margin-top: -15px; cursor: pointer;',
			bodyback: 'position: absolute; display: none;',
			bodyfront: 'position: absolute; left: 22px; top: 58.85px; z-index: 0;',
			headfront: 'position: absolute; z-index: 1; -webkit-transform: rotate(0deg); left: 0px; top: 0px;',
			headback: 'position: absolute; display: none; -webkit-transform: rotate(0deg); left: 0px; top: 0px;'
		}
	}
};