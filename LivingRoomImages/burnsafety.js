var hashValue= {
	'ashTrayImage': 'There\'s a lit cigarette in the ash tray.',
	'brokenSmokeDetectorImage': 'The Smoke detector should be working.',
	'candleImage': 'The candle is lit when the person is not awake.',
	'coffeeImage': 'Hot coffee on table.',
	'frayedTVWireImage': 'Frayed TV Wire can cause an electrical fire.',
	'lighterImage': 'Lighter left out where the baby could reach.',
	'matchesImage': 'Matches left out where the child can reach.',
	'outletCoverImage': 'Outlet error.',
	'powerStripImage': 'Power strip error.',
	'spaceHeaterImage':'Space heater shouldn\'t be so close to the couch.',
}
var hazardsCollected = 0;

var imgClicked = function(id){
	alert(hashValue[id.toString()]);
	$("#"+id).remove();
	$("#"+id+"Button").remove();
	hazardsCollected++;
	//this isn't working yet.
	document.getElementById("counter").innerHTML = "We have found "+hazardsCollected+"/10 hazards.";
	if(hazardsCollected==10){
		alert('You won!! Congrats!');
	}
}
