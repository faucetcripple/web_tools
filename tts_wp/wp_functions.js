/*
NOTES: made for d74g0n's creations to listen and respond to him.

it's a simple word processing framework. passing around words like keys.

it detects word patterns by matching keys and child keys of a dataobject (robot_commands) && when valid => it executes the function in the last object key.

only designed for 2 and 3 word commands; the words have to be strung together anywhere in the input.

logic assumptions:
    all commands are words connected together
    
*/


function wordPro(msg, confidence) {
    let wordarr = sentance_to_word_array(msg);
    if (wordarr.length > 1) {
        findCommand(wordarr);
    }
    //    return wordarr.join(' ');;
}

let stwaverbose = true; // debug level

function sentance_to_word_array(sentance) {
    // add space for ending marker.
    sentance += ' ';
    let wordlist = [];
    let word = new String();
    for (i = 0; i < sentance.length; i++) {
        if (sentance[i] == ' ') {
            wordlist.push(word);
            word = '';
        } else {
            word += sentance[i];
        }
    }

    // fixed for undefined first string character case::
    let str = wordlist[0];
    if (str[0] == undefined) {
        wordlist[0] = str.substr(1);
        wordlist.shift();
    }

    if (stwaverbose) { // dumb quick verbosity switch. debug level.
        console.log(wordlist);
    }

    return wordlist;
}

// EXECUTION IS TRASHING THE END OF THE SENTANCE; no MULTICOMMANDS UNTIL FIXED::
function verifySingle(wordlist) {
    if (robot_commands[wordlist[0]]) {
        //        console.log(`command ${wordlist[0]} found`);
        return true;
    }
    return false;
}

function verifyDouble(wordlist) {
    if (robot_commands[wordlist[0]][wordlist[1]]) {
        //        console.log(`child ${wordlist[1]} found`);
        //check::
        //if function of it exists run it; other wise return true;
        if (typeof robot_commands[wordlist[0]][wordlist[1]] == "function") {
            // call function::
            console.log('EXECUTION');
            robot_commands[wordlist[0]][wordlist[1]]();
            return false;
        } else {
            return true;
        }
    }

    return false;
}

function verifyTriple(wordlist) {
    // swap to !undefined



    if (robot_commands[wordlist[0]][wordlist[1]][wordlist[2]]) {
        console.log(`TRIPLE child ${wordlist[2]} found`);

        if (typeof robot_commands[wordlist[0]][wordlist[1]][wordlist[2]] == "function") {
            console.log('EXECUTION');
            robot_commands[wordlist[0]][wordlist[1]][wordlist[2]]();
            return false;
        } else {
            return true;
        }
    }
    return false;
}


function trimWordlist(wordlist) {
    if (wordlist.length > 1) {
        wordlist.shift();
    }
    return wordlist;
}

function findCommand(wordlist) {
    if (verifySingle(wordlist)) {
        //        console.log('we made it folks');
        if (verifyDouble(wordlist) && wordlist.length >= 1) {
            //            console.log('we double made it folks');
            if (verifyTriple(wordlist) && wordlist.length >= 2) {
                //            console.log('we triple made it folks');
            }
        }

    } else {
        if (wordlist.length > 1) {
            findCommand(trimWordlist(wordlist));
        } else {
            //            console.log('sentance complete');
        }
    }
}

console.log('word_processing_slave');
