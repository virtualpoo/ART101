// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "personal bike", "rental bike", "some random car", "friends"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "metro bus",
    route: 19,
    print: "Mountain Lion",
    hasMiddleDoor: true,
    drivers: ["the guy with a red beard"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes["metro bus"] + myCommutes["UCSC taps bus"] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers["the guy with a red beard"] + "</p>";

$("#output").html(megaSentence);