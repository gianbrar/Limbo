var killer = "";
var name = "";
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
            killer = "your psychotic neighbor neighbor, aptly named " + name + ".";
            break;
        }
    case 3:
        killer = "a distant cousin"
}
var deathStory = "Long story short, you died after " + killer;
