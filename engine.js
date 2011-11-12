var disguise = function() {
	console.log($('img[src$="headfront.png"]').attr('src', 'https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/avatars/36/headfront.png'));
}

$(document).ready(function() {
	disguise();
});