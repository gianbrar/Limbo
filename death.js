var killer = "";
var name = "";
var verb = "";
var employed = true;
var job = "";
switch (Math.floor((Math.random() * 50) + 1)) {
    case 1:
        job = "Engineer";
        break;
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
        killer = ""
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
        verb = "a Yakuza Boss";
        break;
}


var deathStory = "Long story short, you died after " + killer;
document.getElementById("death_story", deathStory)