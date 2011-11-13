var disguise = {
	mask: undefined,
	setup: function(mask) {
		console.log('setting up');
		
		console.log($('img[src*="avatars"]').parent());
		
		disguise.mask = mask;
		
		$('img[src*="avatars"]').parent().each(disguise.don);
		
		$($('.roomView').children()[1]).delegate('*', 'DOMNodeInserted', disguise.respond);
	},
	respond: function(event) {
		if (event.srcElement.nodeType == 1 && /avatars/.test(event.srcElement.innerHTML)) {
			disguise.don($(event.srcElement).find('img[src*="avatars"]').first().parent());
		}
	},
	don: function(elem) {
		console.log('donning disguise...');
		
		if (typeof elem == 'number') elem = this;
		
		// Start by setting the correct style on the wrapper.
		$(elem).attr('style', disguise.mask.style.wrapper);
		
		// Next, decide whether the original is a body- or torso-based and whether this character is DJing.
		var body = $(elem).find('img[src*="body"]').size();
		var dj = $(elem).parent().css('top').slice(0, -2) < 100; // A rough approximation.
		
		// Edit heads.
		$(elem).find('img[src*="headfront"]').first().attr('src', disguise.mask.imgs.headfront).attr('style', disguise.mask.style.headfront);
		$(elem).find('img[src*="headback"]').first().attr('src', disguise.mask.imgs.headback).attr('style', disguise.mask.style.headback);
		
		if (body) {
			if (disguise.mask.body) {
				$(elem).find('img[src*="bodyfront"]').first().attr('src', disguise.mask.imgs.bodyfront).attr('style', disguise.mask.style.bodyfront);
				$(elem).find('img[src*="bodyback"]').first().attr('src', disguise.mask.imgs.bodyback).attr('style', disguise.mask.style.bodyback);
			} else {
				$(elem).find('img[src*="bodyfront"], img[src*="bodyback"]').remove();
				$(elem).append($(document.createElement('img')).attr('src', disguise.mask.imgs.fronttorso).attr('style', disguise.mask.style.fronttorso));
				$(elem).append($(document.createElement('img')).attr('src', disguise.mask.imgs.backtorso).attr('style', disguise.mask.style.backtorso));
				$(elem).append($(document.createElement('img')).attr('src', disguise.mask.imgs.leftarm).attr('style', disguise.mask.style.leftarm));
				$(elem).append($(document.createElement('img')).attr('src', disguise.mask.imgs.rightarm).attr('style', disguise.mask.style.rightarm));
				$(elem).append($(document.createElement('img')).attr('src', disguise.mask.imgs.legs).attr('style', disguise.mask.style.legs));
			}
		} else {
			if (!disguise.mask.body) {
				$(elem).find('img[src*="fronttorso"]').first().attr('src', disguise.mask.imgs.fronttorso).attr('style', disguise.mask.style.fronttorso);
				$(elem).find('img[src*="backtorso"]').first().attr('src', disguise.mask.imgs.backtorso).attr('style', disguise.mask.style.backtorso);
				$(elem).find('img[src*="leftarm"]').first().attr('src', disguise.mask.imgs.leftarm).attr('style', disguise.mask.style.leftarm);
				$(elem).find('img[src*="rightarm"]').first().attr('src', disguise.mask.imgs.rightarm).attr('style', disguise.mask.style.rightarm);
				$(elem).find('img[src*="legs"]').first().attr('src', disguise.mask.imgs.legs).attr('style', disguise.mask.style.legs);
			} else {
				$(elem).find('img[src*="fronttorso"], img[src*="backtorso"], img[src*="leftarm"], img[src*="rightarm"], img[src*="legs"]').remove();
				$(elem).append($(document.createElement('img')).attr('src', disguise.mask.imgs.bodyfront).attr('style', disguise.mask.style.bodyfront));
				$(elem).append($(document.createElement('img')).attr('src', disguise.mask.imgs.bodyback).attr('style', disguise.mask.style.bodyback));
			}
		}
		
		if (dj) {
			$(elem).find('img[src*="back"]').css({ 'display': 'none' });
		} else {
			$(elem).find('img[src*="front"]').css({ 'display': 'none' });
		}
		
		console.log('disguise donned...');
	}
};

var disguises = {
	monkey: {
		body: true,
		imgs: {
			bodyback: 'https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/bodyback.png',
			bodyfront: 'https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/bodyfront.png',
			headfront: 'https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/headfront.png',
			headback: 'https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/headback.png'
		},
		style: {
			wrapper: 'position: absolute; margin-left: -15px; margin-top: -15px; cursor: pointer;',
			bodyback: 'position: absolute; left: 22px; top: 58.85px; z-index: 0;',
			bodyfront: 'position: absolute; left: 26px; top: 69.55px; z-index: 0;',
			headfront: 'position: absolute; z-index: 1; left: 0px; top: 0px;',
			headback: 'position: absolute; left: 0px; top: 0px; z-index: 1;'
		}
	}
};

$(document).ready(function() {
	//window.setTimeout(disguise.setup, 1000, disguises.monkey);
	disguise.setup(disguises.monkey);
});

/*
var q4 = function(e) {
	if (e.srcElement.nodeType == 1 && /avatars/.test(e.srcElement.innerHTML)) {
		console.log({ srcElement: e.srcElement.innerHTML, imgs: $(e.srcElement).find('img'), target: e.target });
	}
};
*/

/*

: Monkey DJ

<div style="position: absolute; left: 240px; top: 30px; z-index: 30; ">
	<div style="position: absolute; margin-left: -15px; margin-top: -15px; cursor: pointer; ">
		<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/bodyback.png" style="position: absolute; display: none; ">
		<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/bodyfront.png" style="position: absolute; left: 22px; top: 58.85px; z-index: 0; ">
		<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/headfront.png" style="position: absolute; z-index: 1; -webkit-transform: rotate(0deg); left: 0px; top: 0px; ">
		<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/55/headback.png" style="position: absolute; display: none; -webkit-transform: rotate(0deg); left: 0px; top: 0px; ">
	</div>
</div>

: Monkey Crowd

<div style="position: absolute; margin-left: -15px; margin-top: -15px; cursor: pointer; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/65/bodyback.png" style="position: absolute; left: 26px; top: 69.55px; z-index: 0; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/65/bodyfront.png" style="position: absolute; display: none; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/65/headfront.png" style="position: absolute; display: none; ">
	<img src="https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/scaled/65/headback.png" style="position: absolute; left: 0px; top: 0px; z-index: 1; ">
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
