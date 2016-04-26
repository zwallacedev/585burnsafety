var hazardsFound;
var draggable = false;
var outletFixed = false;
var ovenMittOn = false;
var score = 0;
var totalScore = 0;
var paused = false;
var resumed = false;
var hashValue= {
  'ashTray': 'Never leave cigarettes unattended or smoke while tired.  Smoke outside the home in a designated area.',
  'brokenSD': 'Working smoke alarms save lives!  Replace the battery at least once a year.  Smoke alarms should be placed in every level of the home and inside and outside of every sleeping room.',
  'candle': 'Never burn candles while unattended or near curtains or other objects that could easily catch fire.',
  'coffee': 'Hot liquids burn like fire, keep liquids out of the reach of children and use anti-spill lids when possible.',
  'fray': 'Replaced frayed wires throw away appliances with frayed wires.  Do not use if the power cords feels hot to touch.',
  'lighter': 'Keep matches and cigarette lighters out of the reach of Children.  Place them in locked cabinets high above the counter tops.',
  'matches': 'Keep matches and cigarette lighters out of the reach of Children.  Place them in locked cabinets high above the counter tops.',
  'outletCover': 'Prevent the possibility of an electrical shock by using clear outlet covers.  Clear covers do not draw the child’s attention like brightly colored ones.',
  'powerStrip': 'Do not overload power strips, use only the designated amount of plugs.  Do not use if the cord feel hot.',
  'spaceHeater':'Space heaters should be kept three feet away from anything that can burn.  Use space heaters with automatic shut off features.',
  'ramen': 'Be careful when removing hot objects from the microwave.  Remember to allow objects to cool before opening them.  To prevent a steam burn, open popcorn or objects covered in plastic film or popcorn away from you.',
  'potOfWater': 'Cook on back burners…always turn pot handles to prevent them from being tipped over by children or adults.',
  'fork': 'Never place any metal object in a microwave! Placing a fork or any other metal object in a microwave could start a fire.',
  'formula': 'Always test baby formula before giving it to children…if heated in the microwave, be aware of uneven heating. ',
  'baby': 'Create a kid safe zone in front of the stove. Teach children not to step inside the zone when the stove is on – or keep young children safe by keeping them out the kitchen while the stove is in use.',
  'toddler': 'When cooking or preparing foods, keep children away from the stove or other areas in the kitchen that may pose a danger.  Encourage them to sit at the table or in sight of the food preparer.',
  'burner': 'Create a “kid safe zone” in front of the stove.  Instruct children not to step inside the zone when the appliance is in use – or – for cooktops with front dials, place a guard over the dials to prevent them from accidently being turned on by little children. ',
  'kitchenAshTray': 'If parents smoke, they should smoke outside of the home in a clearly defined area.  Tell a parent to dampen cigarette butts to ensure that they are extinguished.  Alert an adult if you see a cigarette unattended!',
  'kitchenLighter': 'Keep matches and cigarette lighters out of the reach of Children.  Place them in locked cabinets or high above the counter tops whenever possible.',
  'kitchenCoffee': 'Keep hot liquids  such as coffee at the back of the counter out of the reach of children.  For best results, use a coffee mug with a no-spill lid if possible. ',
  'ramenBox': 'Properly store microwaveable foods in cabinets or on shelves and not on top of  the microwave.',
  'ovenMitt': 'When handling hot pots and pans, use a long (over the wrist) oven mitt to prevent the possibility of a burn.  Be certain to replace the mitt when it becomes worn or thin.',
  'crockpotCord':'Keep small appliances (crock pots, toasters, etc.) at the back of the counter with the cords unplugged and out of reach. ',
  'bbqLighter':'Flammable liquids such as lighter fluid should be stored on high shelves in well a ventilated area.',
  'milkJug':'Store gasoline and other flammable in approved,  properly labeled containers.  ',
  'boxes':'All exits need to be kept clear of boxes and other objects that may obstruct egress in the event of an emergency.',
  'fertilizer':'Keep fertilizers, chemicals and other harmful liquids in tightly sealed, clearly labeled containers. ',
  'gasCan':'Gasoline should be stored at room temperature, away from potential heat sources such as the sun, gas water heaters/furnaces and at least 50 feet from ignition sources such as pilot lights.',
  'hotExhaust':'Make certain there is proper ventilation inside the garage, so that fumes are vented to the outside. Be wary of the hot exhaust outlets on recently used vehicles!',
  'extCord':'All malfunctioning cords, chargers, etc should be discarded.  Never use cords or appliances that are in poor or frayed condition.',
  'heater':'If you see any leaks, steam, smoke, or other possible problems with a water heater, tell an adult!',
  'mcExhaust':'Make certain there is proper ventilation inside the garage, so that fumes are vented to the outside. Be wary of the hot exhaust outlets on recently used vehicles!',
  'garageBaby':'Never let children play in the garage – it is a dangerous environment!',  
}
$(document).ready(function () {


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
$('#popover').click(function(e){
    e.stopPropagation();
    $('#popover-text').toggle();
     $(this).toggle();
     paused = false;
     resumed = true;
   });
$('#popover-text').click(function(e){
    e.stopPropagation();
    $('#popover').toggle();
     $(this).toggle();
     paused= false;
     resumed = true;
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
      showPopover(this.id);
      return;
    }

    if(this.id == "ovenMitt"){
      if(!ovenMittOn){
        $("#ovenMitt").css('opacity', '1');
        decrementCnt(false);
        ovenMittOn = true;
        showPopover(this.id);
      }
      return;
    }
    $(this).toggle();
    if(this.id == "brokenSD"){
      $("#workingSD").css('visibility', 'visible');
    }
    decrementCnt(false);
    showPopover(this.id);
  });
  if($('#level').attr('name')=='livingroomone'){
    hazardsFound = 10;
  }else if($('#level').attr('name') == 'kitchenone'){
    hazardsFound = 10;
  }else if($('#level').attr('name') == 'menu'){
    $('#totalScore').html('Score: '+totalScore);
    return;
  }else if($('#level').attr('name') == 'garageone'){
    hazardsFound = 9;
  }else if($('#level').attr('name') == 'livingdraggable'){
    hazardsFound = 4;
  }else if($('#level').attr('name') == 'kitchendraggable'){
    hazardsFound = 8;
  }else if($('#level').attr('name') == 'garagedraggable'){
    hazardsFound = 5;
  }else if($('#level').attr('name') == 'splash'){
    localStorage.setItem('lvonescore', 0);
    localStorage.setItem('lvtwoscore', 0);
    localStorage.setItem('konescore', 0);
    localStorage.setItem('ktwoscore', 0);
    localStorage.setItem('gonescore', 0);
    localStorage.setItem('gtwoscore', 0);
    totalScore= 0;
  }

  $('.container-fluid').click(function(e){
    e.stopPropagation();
    console.log("Nooooo. A hazard was NOT clicked!");
  });
//this is for the timer
function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time, pauseTime, resumeTime;
    var firstPause = true;
    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        if(paused){
          if(firstPause){
            pauseTime = (+new Date);
            firstPause = false;
          }
          setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
        if(resumed){
          resumeTime = (+new Date);
          var diff = resumeTime - pauseTime;
          endTime += diff;
          resumed = false;
          firstPause = true;
        }
        msLeft = endTime - (+new Date);

        if($(".counter").html() <= 0){
          checkScore(msLeft);
          return;
        }
        if ( msLeft < 1000 ) {
            checkScore(msLeft);
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            if(!paused){
              $(".timer").html(mins + ':' + twoDigits(time.getUTCSeconds()));
            }
           setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }
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
  $("#levelScore").css('visibility', 'visible');
  $("#levelScore").html('Score: '+score);
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
    countdown( "timer", 3, 30 );


});
function decrementCnt(draggable){
  if(draggable){
    score+=20;
  }else{
    score+=10;
  }
  hazardsFound--;
  $(".counter").html(hazardsFound);

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

var showPopover = function(id){
  paused = true;
  var test = hashValue[id.toString()];
  if(test != undefined){
    $("#popover-text").html(hashValue[id.toString()]);
  }else{
    $("#popover-text").html('Invalid hash value.');
  }
    $("#popover").toggle();
    $("#popover-text").toggle();
};
