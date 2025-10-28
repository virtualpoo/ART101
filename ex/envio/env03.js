// declaring an array with name myDiary
let myDiary = ["Chiikawa", "Hachiware", "Usagi"];

// declaring an object with name myFav
let myFav = {
    character: "Chiikawa",
    type:"cute little thing",
    signatureColor: "pink", 
    nickname: "Chii"
};

// declaring an object with name littleCat
let littleCat = {
    character: "hachiware",
    type: "cute little cat",
    signatureColor: "blue",
    nickname: "hachi"
};

// declaring an object with name fatRabbit
let fatRabbit = {
    character: "Usagi",
    type: "rabbit",
    signatureColor: "yellow",
    nickname: "fatty"
};

let megaSentence;

megaSentence = "<p>Dear Diary, today I saw a cutle clip of three little cuties. I found out that they are" + myFav + ", " + littleCat + ", " + fatRabbit +"</p>";
megaSentence = megaSentence + "<p>My favourite character is little" + nickname +" thi sis how i think they would interact in my diary"+ "</p>";

$("#output").html(megaSentence);