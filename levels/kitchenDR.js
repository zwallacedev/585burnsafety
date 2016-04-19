var aerosolStop = false;
var towelStop = false;
var np1Stop = false;
var np2Stop = false;
var sillyStop = false;
var isDown = false;
var ramenTry = 0;
var potOfWaterTry = 0;
var forkTry = 0;
var formulaTry = 0;
var ovenMittTry = 0;
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
    console.log(spotName);
    var flameOffset = $("#"+spotName).offset();
    var flameHeight = $("#"+spotName).height();
    var flameWidth = $("#"+spotName).width();
    var flameCenterX = flameOffset.left + (flameWidth/2);
    var flameCenterY = flameOffset.top + (flameHeight/2);

    var dist = Math.sqrt( (Math.pow(flameCenterX - objectCenterX,2)) + (Math.pow(flameCenterY - objectCenterY,2)) )
    console.log(dist);

    if(dist < 75){
      alert("You correctly placed " + event.target.id);
      switch(event.target.id){
        case "ramen":
          $('#ramen').hide();
          $('#ramenFirm').toggle();
          break;
        case "potOfWater":
          $('#potOfWater').hide();
          $('#potOfWaterFirm').toggle();
          break;
        case "fork":
          $('#fork').hide();
          break;
        case "formula":
          $('#formula').hide();
          break;
        case "ovenMitt":
          $('#ovenMitt').hide();
          $('#ovenMittFirm').toggle();
          break;
        case "matches":
          $('#matches').hide();
          break;
        case "lighter":
          $('#lighter').hide();
          break;
        case "outletCover":
          $('#outletCover').hide();
          $('#outletCoverFirm').toggle();
          break;
        case "sillyString":
          sillyStop = true;
          break;
        default:
          break;
      }
    }else{
      aerosolStop = false;
      towelStop = false;
      np1Stop = false;
      np2Stop = false;
      sillyStop = false;
    }
  });

  $(".drag").mousedown(function( event ) {
    isDown = true;
    origOffset = $("#"+event.target.id).offset();
    switch(event.target.id){
      case "ramen":
        ramenTry++;
        if(ramenTry > 3){
          $("#ramenSpot").css('opacity', '1');
        }
        break;
      case "potOfWater":
        potOfWaterTry++;
        if(potOfWaterTry > 3){
          $("#potOfWaterSpot").css('opacity', '1');
        }
        break;
      case "fork":
        forkTry++;
        if(forkTry > 3){
          $("#forkSpot").css('opacity', '1');
        }
        break;
      case "formula":
        formulaTry++;
        if(formulaTry > 3){
          $("#formulaSpot").css('opacity', '1');
        }
        break;
      case "ovenMitt":
        ovenMittTry++;
        if(ovenMittTry > 3){
          $("#ovenMittSpot").css('opacity', '1');
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
