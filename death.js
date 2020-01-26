function setDeathStory(){
    var killer;
    var name;

    var verb;
    
    var noun;

    var employed = true;
    var job;


    var prisonSentence;

    //Job and employment status
    switch (Math.floor((Math.random() * 31) + 1)) {
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
            job = "Linux Kernel Hacker";
            break;
        case 22:
            job = "Hyperdrive Maintenance Worker";
            break;
        case 23:
            job = "Sith Lord";
            break;
        case 24:
            job = "The Guy From Star Trek Who Launches the Photon Torpedos";
            break;
        case 25:
            job = "Instagram Influencer";
            break;
        case 26:
            job = "Tyrant";
            break;
        case 27:
            job = "President of [insert random third world country here]";
            break;
        case 28:
            job = "Priest";
            break;
        case 29:
            job = "Monk";
            break;
        case 30:
            job = "Anebriated Giraffe";
            break;
        case 31:
            job = "Alarm Clock";
    }
    
    
    
    //Your killer
    switch (Math.floor((Math.random() * 7) + 1)) {
        case 1:
            killer = "a Yakuza Boss";
            break;
        case 2:
            killer = "a psychotic neighbor neighbor, aptly named " + name + ",";
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
                    break;
            }
            killer = "your psychotic neighbor neighbor, aptly named " + name + ",";
            break;
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
    
    
    
    //What they did or verb
    switch (Math.floor((Math.random() * 12) + 1)) {
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
        case 12:
            verb = "stole";
            break;
    }
    verb = " " + verb + " "

    
    
    //Body part or noun
    switch (Math.floor((Math.random() * 11) + 1)) {
        case 1:
            noun = "cereberal cortex";
            break;
        case 2:
            noun = "lungs";
            break;
        case 3:
            noun = " frontal lobe";
            break;
        case 4:
            noun = "left ring finger's middle knuckle";
            break;
        case 5:
            noun = "favorite wrist bone";
            break;
        case 6:
            noun = "nose hair";
            break;
        case 7:
            noun = "right femur";
            break;
        case 8:
            noun = "favorite incisor";
            break;
        case 9:
            noun = "kidneys";
            break;
        case 10:
            noun = "pancreas";
            break;
        case 11:
            noun = "Lungs";
            break;
    }

    
    
    //Prison sentence
    var prisonSentenceLen = Math.floor((Math.random() * 31));
    if (prisonSentenceLen === 30) {
        prisonSentence = "Your monstrous foe was given a life sentence.";
    }
    else if (prisonSentenceLen === 0) {
        prisonSentence = "Your murderer got off scot free, with not a single charge nor any additions to their criminal record. Despite this, they were noted as 'Guilty.' Looks like no one cared about you!";
    }
    else if (prisonSentenceLen >= 20){
        prisonSentence = "Your killer got off with " + prisonSentenceLen + " years. You feel like justice has been served.";
    }
    else if (prisonSentenceLen >= 15){
        prisonSentence = "Your killer got off with " + prisonSentenceLen + " years.";
    }
    else if (prisonSentenceLen >= 10){
        prisonSentence = "Your killer got off with only " + prisonSentenceLen + " years.";
    }
    else if (prisonSentenceLen >= 5){
        prisonSentence = "Your killer got off with only " + prisonSentenceLen + " years. You feel like they deserved more for killing you.";
    }
    else {
        prisonSentence = "Your killer got off with only " + prisonSentenceLen + " years. Another effective ruling from the United States Justice System.";
    }

    
    
    var deathStory = "Long story short, you died after " + killer + verb + "your " + noun + ". " + prisonSentence;
    var causeOfDeath = "Died after " + killer + verb + "their " + noun;
    document.getElementById("death_story").innerHTML = deathStory + " . ... . . . . .. . .. .. . . . . . .. .. . .. .. . .. .. . . . . . . .. . ." + causeOfDeath;
}