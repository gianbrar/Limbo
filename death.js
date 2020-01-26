var killer;
var name;

var verb;

var employed = true;
var job;


var prisonSentence;


switch (Math.floor((Math.random() * 50) + 1)) {
    case 1:
        job = "Engineer";
        break;
    case 2:
        job = "Homeless";
        employed = false;
        break;
    case 3:
        job = "Recently Downvoted Reddit User";
        employed = false;
        break;
    case 4:
        job = "Twitch Streamer";
        break;
    case 5:
        job = "Fornite Fanatic";
        employed = false;
        break;
    case 6:
        job = "Construction Worker";
        break;
    case 7:
        job = "Real Estate Mogul";
        break;
    case 8:
        job = "Software Developer";
        break;
    case 9:
        job = "Chef";
        break;
    case 10:
        job = "Baker";
        break;
    case 11:
        job = "Lawyer";
        break;
    case 12:
        job = "Cybersecurity Specialist";
        break;
    case 13:
        job = "Corporate Attorney";
        break;
    case 14:
        job = "Electrical Engineer";
        break;
    case 15:
        job = "Mathematician";
        break;
    case 16:
        job = "Botanist";
        break;
    case 17:
        job = "Semicolon";
        break;
    case 18:
        job = "Javascript Debugger";
        break;
    case 19:
        job = "Factory Line Worker";
        break;
    case 20:
        job = "Professional Bamboozler";
        break;
    case 21:
        job = "";
}
switch (Math.floor((Math.random() * 50) + 1)) {
    case 1:
        killer = "a Yakuza Boss";
        break;
    case 2:
        switch (Math.floor((Math.random() * 11) + 1)) {
            case 1:
            name = "Ray";
                break;
            case 2:
                name = "Steve";
                break;
            case 3:
                name = "Dan";
                break;
            case 4:
                name = "Edna";
                break;
            case 5:
                name = "Susan";
                break;
            case 6:
                name = "Issac";
                break;
            case 7:
                name = "Jeremey";
                break;
            case 8:
                name = "Lucifer";
                break;
            case 9:
                name = "Richard";
                break;
            case 10:
                name = "Grayson";
                break;
            case 11:
                name = "Cain";
            killer = "your psychotic neighbor neighbor, aptly named " + name + ",";
            break;
        }
    case 3:
        killer = "a distant cousin";
        break;
    case 4:
        killer = "an overenergetic child";
        break;
    case 5:
        if (employed === true) {
            killer = "that annoying guy from work";
        }
        else {
            killer = "your mom";
        }
        break;
    case 6:
        killer = "your mom";
        break;
    case 7:
        killer = "some neighborhood kids";
        break;
}



switch (Math.floor((Math.random() * 15) + 1)) {
    case 1:
        verb = "smashed";
        break;
    case 2:
        verb = "crushed";
        break;
    case 3:
        verb = "pinched";
        break;
    case 4:
        verb = "collapsed";
        break;
    case 5:
        verb = "stabbed";
        break;
    case 6:
        verb = "ate";
        break;
    case 7:
        verb = "vicously ripped out";
        break;
    case 8:
        verb = "LAZ'RD";
        break;
    case 9:
        verb = "severed";
        break;
    case 10:
        verb = "burnt";
        break;
    case 11:
        verb = "decapitated";
        break;
    verb = " " + verb + " "
}



var prisonSentenceLen = Math.floor((Math.random() * 31)); 
if (prisonSentenceLen === 30) {
    prisonSentence = "Your monstrous foe was given a life sentence.";
}
else if (prisonSentenceLen === 0) {
    prisonSentence = "Your murderer got off scot free, with not a single charge nor any additions to their criminal record. Despite this, they were noted as 'Guilty.' Looks like no one cared about you!";
}
else if (prisonSentenceLen >= 20){
    prisonSentence = "Your killer got off with " + prisonSentence + " years. You feel like justice has been served.";
}
else if (prisonSentenceLen >= 15){
    prisonSentence = "Your killer got off with " + prisonSentence + " years.";
}
else if (prisonSentenceLen >= 10){
    prisonSentence = "Your killer got off with only " + prisonSentence + " years.";
}
else if (prisonSentenceLen >= 5){
    prisonSentence = "Your killer got off with only " + prisonSentence + " years. You feel like they deserved more for killing you.";
}
else {
    prisonSentence = "Your killer got off with only " + prisonSentence + " years. AnOtHeR eFfEcTiVe RuLiNg StRaIgHt FrOm tHe UnItEd StAtEs JuStIcE sYsTeM.";
}



var deathStory = "Long story short, you died after " + killer + verb + " your" + "";
document.getElementById("death_story")