var oneStop = false;
var twoStop = false;
var threeStop = false;
var origOffset;

$(document).ready(function () {
  $(".square").draggable();
  $(".square").mouseup(function( event ) {
    //var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";

    //object specs
    var objectOffset = $("#"+event.target.id).offset();
    var objectHeight = $("#"+event.target.id).height();
    var objectWidth = $("#"+event.target.id).width();
    var objectCenterX = objectOffset.left + (objectWidth/2);
    var objectCenterY = objectOffset.top + (objectHeight/2);

    if(oneStop && (event.target.id != "one")){
      alert("please move box one");
      $("#"+event.target.id).animate({ top: origOffset.top, left: origOffset.left });
      return;
    }else if(twoStop && (event.target.id != "two")){
      alert("please move box two");
      $("#"+event.target.id).animate({ top: origOffset.top, left: origOffset.left });
      return;
    }else if(threeStop && (event.target.id != "three")){
      alert("please move box three");
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

    if(dist < 200){
      alert("Box " + event.target.id + " is too close to the frame.  Please move it away.");
      switch(event.target.id){
        case "one":
          oneStop = true;
          break;
        case "two":
          twoStop = true;
          break;
        case "three":
          threeStop = true;
          break;
        default:
          break;
      }
    }else{
      oneStop = false;
      twoStop = false;
      threeStop = false;
    }
  });

  $(".square").mousedown(function( event ) {
    origOffset = $("#"+event.target.id).offset();
  });

});
