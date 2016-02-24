var hazardsFound = 0;
var outletFixed = false;
var hashValue= {
  'ashTray': 'There\'s a lit cigarette in the ash tray.',
  'brokenSD': 'The Smoke detector should be working.',
  'candle': 'The candle is lit when the person is not awake.',
  'coffee': 'Hot coffee on table.',
  'fray': 'Frayed TV Wire can cause an electrical fire.',
  'lighter': 'Lighter left out where the baby could reach.',
  'matches': 'Matches left out where the child can reach.',
  'outletCover': 'You should have Outlet Covers.',
  'powerStrip': 'Power strip error.',
  'spaceHeater':'Space heater shouldn\'t be so close to the couch.',
}
$(document).ready(function () {
  $('.goodClick').click(function(e){
    e.stopPropagation();
    if(this.id == "workingSD"){
      return;
    }
    if(this.id == "outletCover"){
      if(!outletFixed){
        $("#outletCover").css('opacity', '1');
        incrementCnt();
        outletFixed = true;
      }
      return;
    }
    $(this).toggle();
    if(this.id == "brokenSD"){
      $("#workingSD").css('visibility', 'visible');
    }
    incrementCnt();
    imgClicked(this.id);
  });

  $('.container-fluid').click(function(e){
    e.stopPropagation();
    console.log("Nooooo. A hazard was NOT clicked!");
  });


});

var incrementCnt = function(){
  hazardsFound++;
  $("#counter > h1").html("Number of Hazards Found: " + hazardsFound);
  if(hazardsFound==10){
    $("#levelWin").css('visibility', 'visible');
  }
};
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
};
var initGame = function() {
  
}