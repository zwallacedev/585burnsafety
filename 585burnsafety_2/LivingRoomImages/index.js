var hazardsFound = 0;
var outletFixed = false;

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
  });

  $('.container-fluid').click(function(e){
    e.stopPropagation();
    console.log("Nooooo. A hazard was NOT clicked!");
  });


});

var incrementCnt = function(){
  hazardsFound++;
  $("#counter > h1").html("Number of Hazards Found: " + hazardsFound);
}
