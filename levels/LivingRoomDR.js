var isDown = false;
var workingSDTry = 0;
var matchesTry = 0;
var lighterTry = 0;
var outletCoverTry = 0;
var sillyTry = 0;
var origOffset;

$(document).ready(function () {

  $(".drag").draggable();
  $(".drag").hover(function( event ) {
    if(!isDown){
      thisWidth = $("#"+event.target.id).width();
      thisHeight = $("#"+event.target.id).height();
      $("#"+event.target.id).width(thisWidth+10);
      $("#"+event.target.id).height(thisHeight+10);
    }
  }, function( event ) {
    if(!isDown){
      $("#"+event.target.id).width(thisWidth);
      $("#"+event.target.id).height(thisHeight);
    }
  });

  $(".drag").mouseup(function( event ) {
    $("#"+event.target.id).width(thisWidth);
    $("#"+event.target.id).height(thisHeight);
    $(".helper").css('opacity', '0');;
    isDown = false;

    //var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";

    //object specs
    var objectOffset = $("#"+event.target.id).offset();
    var objectHeight = $("#"+event.target.id).height();
    var objectWidth = $("#"+event.target.id).width();
    var objectCenterX = objectOffset.left + (objectWidth/2);
    var objectCenterY = objectOffset.top + (objectHeight/2);

    //flame specs
    var spotName = event.target.id+"Spot";
    var flameOffset = $("#"+spotName).offset();
    var flameHeight = $("#"+spotName).height();
    var flameWidth = $("#"+spotName).width();
    var flameCenterX = flameOffset.left + (flameWidth/2);
    var flameCenterY = flameOffset.top + (flameHeight/2);

    var dist = Math.sqrt( (Math.pow(flameCenterX - objectCenterX,2)) + (Math.pow(flameCenterY - objectCenterY,2)) )

    if(dist < 50){
      switch(event.target.id){
        case "workingSD":
          //alert("Smoke detectors should be working at all times!  Tell a parent if you see a broken one!");
          $('#workingSD').hide();
          $('#brokenSD').hide();
          $('#workingSDFirm').toggle();
          showPopover('brokenSD');
          decrementCnt(true);
          break;
        case "matches":
         // alert("Don't play with matches!  Put them somewhere safe if you see them!");
          $('#matches').hide();
          showPopover('matches');
          decrementCnt(true);
          break;
        case "lighter":
          //alert("Don't play with lighters!  Put them somewhere safe if you see them!");
          $('#lighter').hide();
          showPopover('lighter');
          decrementCnt(true);
          break;
        case "outletCover":
          //alert("Outlets should be covered at all times!  Tell a parent if you see one open!");
          $('#outletCover').hide();
          $('#outletCoverFirm').toggle();
          showPopover('outletCover');
          decrementCnt(true);
          break;
        default:
          break;
      }
    }
  });

  $(".drag").mousedown(function( event ) {
    isDown = true;
    origOffset = $("#"+event.target.id).offset();
    switch(event.target.id){
      case "workingSD":
        workingSDTry++;
        if(workingSDTry > 3){
          $("#workingSDSpot").css('opacity', '1');
        }
        break;
      case "matches":
        matchesTry++;
        if(matchesTry > 3){
          $("#matchesSpot").css('opacity', '1');
        }
        break;
      case "lighter":
        lighterTry++;
        if(lighterTry > 3){
          $("#lighterSpot").css('opacity', '1');
        }
        break;
      case "outletCover":
        outletCoverTry++;
        if(outletCoverTry > 3){
          $("#outletCoverSpot").css('opacity', '1');
        }
        break;
      case "sillyString":
        sillyTry++;
        if(sillyTry > 3){
          $("#shelf4").toggle();
        }
        break;
      default:
        break;
    }
  });

});
