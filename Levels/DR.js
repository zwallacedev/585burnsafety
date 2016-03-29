var aerosolStop = false;
var towelStop = false;
var np1Stop = false;
var np2Stop = false;
var sillyStop = false;
var isDown = false;
var origOffset;

$(document).ready(function () {
  $(".drag").draggable();
  $('.drag').each(function(){
    $(this).css({'top' : getRandomInt(20,70)+'%', 'left' : getRandomInt(20,70)+'%'});
  });

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
    $(".helper").hide();
    isDown = false;

    //var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";

    //object specs
    var objectOffset = $("#"+event.target.id).offset();
    var objectHeight = $("#"+event.target.id).height();
    var objectWidth = $("#"+event.target.id).width();
    var objectCenterX = objectOffset.left + (objectWidth/2);
    var objectCenterY = objectOffset.top + (objectHeight/2);

    if(aerosolStop && (event.target.id != "aerosol")){
      alert("please move aerosol");
      $("#"+event.target.id).animate({ top: origOffset.top, left: origOffset.left });
      return;
    }else if(towelStop && (event.target.id != "beachTowel")){
      alert("please move beach towel");
      $("#"+event.target.id).animate({ top: origOffset.top, left: origOffset.left });
      return;
    }else if(np1Stop && (event.target.id != "np1")){
      alert("please move nail polish 1");
      $("#"+event.target.id).animate({ top: origOffset.top, left: origOffset.left });
      return;
    }else if(np2Stop && (event.target.id != "np2")){
      alert("please move nail polish 2");
      $("#"+event.target.id).animate({ top: origOffset.top, left: origOffset.left });
      return;
    }else if(sillyStop && (event.target.id != "sillyString")){
      alert("please move nail silly string");
      $("#"+event.target.id).animate({ top: origOffset.top, left: origOffset.left });
      return;
    }


    //flame specs
    var flameOffset = $("#flame").offset();
    var flameHeight = $("#flame").height();
    var flameWidth = $("#flame").width();
    var flameCenterX = flameOffset.left + (flameWidth/2);
    var flameCenterY = flameOffset.top + (flameHeight/2);

    var dist = Math.sqrt( (Math.pow(flameCenterX - objectCenterX,2)) + (Math.pow(flameCenterY - objectCenterY,2)) )

    if(dist < 150){
      alert(event.target.id + " is too close to the heater.  Please move it away.");
      switch(event.target.id){
        case "aerosol":
          aerosolStop = true;
          break;
        case "beachTowel":
          towelStop = true;
          break;
        case "np1":
          np1Stop = true;
          break;
        case "np2":
          np2Stop = true;
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
      case "aerosol":
        $("#shelf1").toggle();
        break;
      case "beachTowel":
        $("#shelf2").toggle();
        break;
      case "np1":
        $("#shelf3").toggle();
        break;
      case "np2":
        $("#shelf3").toggle();
        break;
      case "sillyString":
        $("#shelf4").toggle();
        break;
      default:
        break;
    }
  });

});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
