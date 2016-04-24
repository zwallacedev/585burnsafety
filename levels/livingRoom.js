var hazardsFound;
var draggable = false;
var outletFixed = false;
var ovenMittOn = false;
var score = 0;
var totalScore = 0;
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
  'ramen': 'There is a hot bowl of ramen where the toddler is trying to reach.',
  'potOfWater': 'The handle of the pot is sticking out.',
  'fork': 'There\'s a fork in the microwave, and this definitely shouldn\'t be there.',
  'formula': 'You shouldn\'t give a toddler hot formula because it has hot spots.',
  'baby': 'There shouldn\'t be a baby in the kitchen.',
  'toddler': 'There shouldn\'t be a toddler in the kitchen.',
  'burner': 'The front burner is on.',
  'kitchenAshTray': 'There\'s a lit cigarette in the ash tray.',
  'kitchenLighter': 'There\'s a lighter in the reach of a child.',
  'kitchenCoffee': 'There\'s a hot coffee that can be easily knocked off the counter.',
  'ramenBox': 'There shouldn\'t be anything on top of the microwave.',
  'ovenMitt': 'You should wear an ovenmitt when pulling something out of the oven.'
}
$(document).ready(function () {
  // localStorage.setItem('lvonescore', 0);
  // localStorage.setItem('lvtwoscore', 0);
  // localStorage.setItem('konescore', 0);
  // localStorage.setItem('ktwoscore', 0);
  // localStorage.setItem('gonescore', 0);

    var livingRoomOneScore = parseInt(localStorage.getItem('lvonescore'));
    var kitchenOneScore = parseInt(localStorage.getItem('konescore'));
    var garageOneScore = parseInt(localStorage.getItem('gonescore'));
    var garageTwoScore = parseInt(localStorage.getItem('gtwoscore'));
    var livingRoomTwoScore = parseInt(localStorage.getItem('lvtwoscore'));
    var kitchenTwoScore = parseInt(localStorage.getItem('ktwoscore'));
    if(livingRoomOneScore != null && livingRoomOneScore != '' && !isNaN(livingRoomOneScore)){
      totalScore+=livingRoomOneScore;
    }
    if(kitchenOneScore != null && kitchenOneScore != '' && !isNaN(kitchenOneScore)){
      totalScore+=kitchenOneScore;
    }
    if(kitchenTwoScore != null && kitchenTwoScore != '' && !isNaN(kitchenTwoScore)){
      totalScore+=kitchenTwoScore;
    }
    if(garageOneScore != null && garageOneScore != '' && !isNaN(garageOneScore)){
      totalScore+=garageOneScore;
    }
    if(garageTwoScore != null && garageTwoScore != '' && !isNaN(garageTwoScore)){
      totalScore+=garageTwoScore;
    }
    if(livingRoomTwoScore != null && livingRoomTwoScore != '' && !isNaN(livingRoomTwoScore)){
      totalScore+=livingRoomTwoScore;
    }
$('.hideWin').click(function(e){
    e.stopPropagation();
     $(this).toggle();
   });
  $('.goodClick').click(function(e){
    e.stopPropagation();
    if(this.id == "workingSD"){
      return;
    }
    if(this.id == "outletCover"){
      if(!outletFixed){
        $("#outletCover").css('opacity', '1');
        decrementCnt(false);
        outletFixed = true;
      }
      return;
    }

    if(this.id == "ovenMitt"){
      if(!ovenMittOn){
        $("#ovenMitt").css('opacity', '1');
        decrementCnt(false);
        ovenMittOn = true;
        alert(hashValue[this.id.toString()]);
      }
      return;
    }
    $(this).toggle();
    if(this.id == "brokenSD"){
      $("#workingSD").css('visibility', 'visible');
    }
    decrementCnt(false);
    alert(hashValue[this.id.toString()]);
  });
  if($('#level').attr('name')=='livingroomone'){
    hazardsFound = 10;
  }else if($('#level').attr('name') == 'kitchenone'){
    hazardsFound = 11;
  }else if($('#level').attr('name') == 'menu'){
    $('#totalScore').html('Score: '+totalScore);
    return;
  }else if($('#level').attr('name') == 'garageone'){
    hazardsFound = 8;
  }else if($('#level').attr('name') == 'livingdraggable'){
    hazardsFound = 4;
  }else if($('#level').attr('name') == 'kitchendraggable'){
    hazardsFound = 8;
  }else if($('#level').attr('name') == 'garagedraggable'){
    hazardsFound = 5;
  }

  $('.container-fluid').click(function(e){
    e.stopPropagation();
    console.log("Nooooo. A hazard was NOT clicked!");
  });
//this is for the timer
function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;
    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if($(".counter").html() <= 0){
          checkScore(msLeft);
          return;
        }
        if ( msLeft < 1000 ) {
            checkScore(msLeft);
            //alert('game over!');
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            //$("#timer").html(hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            $(".timer").html(mins + ':' + twoDigits(time.getUTCSeconds()));
           setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    //element = document.getElementById( elementName );
    //alert('here: '+element);
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}


var checkScore = function(msLeft){
  if(score <= 0 & msLeft <= 0){
    alert('Game over.');

    return;
  }
  score = Math.round(Math.pow(score, 1.2));
  score += Math.round(msLeft/1000);
  alert('You had a score of '+score);
  if(score>=390){
     $("#threeStars").css('visibility', 'visible');
  }
  else if(score<390 & score>=200){
    $("#twoStars").css('visibility', 'visible');
  }
  else if(score<200 & score>=60){
    $("#oneStar").css('visibility', 'visible');
  }
  else{
    $("#noStars").css('visibility', 'visible');
    //add a no stars image
  }
  if($('#level').attr('name')=='livingroomone'){
    localStorage.setItem("lvonescore", score);
  }else if($('#level').attr('name') == 'kitchenone'){
    localStorage.setItem("konescore", score);
  }else if($('#level').attr('name') == 'garageone'){
    localStorage.setItem("gonescore", score);
  }else if($('#level').attr('name') == 'livingdraggable'){
    localStorage.setItem('lvtwoscore', score);
  }else if($('#level').attr('name') == 'kitchendraggable'){
    localStorage.setItem('ktwoscore', score);
  }else if($('#level').attr('name') == 'garagedraggable'){
    localStorage.setItem('gtwoscore', score);
  }

}
    countdown( "timer", 0, 30 );

});
function decrementCnt(draggable){
  if(draggable){
    score+=20;
  }else{
    score+=10;
  }
  hazardsFound--;
  $(".counter").html(hazardsFound);
  //if(hazardsFound<=0){
  //  $("#levelWin").css('visibility', 'visible');
  //} 
}


var getScore = function(){
    var tmp = 0;
    var livingRoomOneScore = parseInt(localStorage.getItem('lvonescore'));
    var kitchenOneScore = parseInt(localStorage.getItem('konescore'));
    var garageOneScore = parseInt(localStorage.getItem('gonescore'));
    if(livingRoomOneScore != null && livingRoomOneScore != '' && !isNaN(livingRoomOneScore)){
      tmp += livingRoomOneScore;
    }
    if(kitchenOneScore != null && kitchenOneScore != '' && !isNaN(kitchenOneScore)){
      tmp+=kitchenOneScore;
    }
    if(garageOneScore != null && garageOneScore != '' && !isNaN(garageOneScore)){
      tmp+=garageOneScore;
    } 
    return tmp;
  };