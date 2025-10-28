var count = 0;

$("#touchusagi").click(function () {
   if (count < 5) { mood = "uraaa!"; }
   else if ((count >= 5) && (count < 10)) { mood = "unaaaaaa.."; }
   else { mood = "(_   _)。˚ ᶻ z 𐰁"; }
   $("#touchusagi").html("Clicks: " + count + " " + mood);
   
   count = count + 1;
   $("#una").css("background-image" );


});

var totalNumber = 0;
$("#touchchii").click(function () {
   if (totalNumber < 5) { mood = "(˶˃ ᗜ ˂˶)"; }
   else if ((totalNumber >= 5) && (totalNumber < 10)) { mood = "ehehee"; }
   else { mood = "guh so much ( ô ‸ ō )....?????"; }
   $("#touchchii").html("Clicks: " + totalNumber + " " + mood);
   
   totalNumber = totalNumber + 1;

});
