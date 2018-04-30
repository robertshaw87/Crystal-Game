$(document).ready(function() {
    var wins=0;
    var losses=0;
    var crystalValue=0;
    // number of gems to generate
    var numGems=4;

    // returns a random integer between 0 and the argument(inclusive)
    function randInt(maxInt){
        return (Math.floor(Math.random() * (maxInt+1)))
    }
// game reset function
//  reset values to default
    // generate random value for the crystal
    // generate 4 new gems with one guaranteed to have a value of 1
    function gameReset() {
        crystalValue = (randInt(101) +19);
        updateDisplays();
        // create a list of 4 unique random ints between 1 and 12 for the gems
        var gemArray = [];
        for (var i=0; i<numGems; i++){
            var tempInt;
            do {
                tempInt=1 + randInt(11);
            } while (gemArray.indexOf(tempInt) !== -1);
            gemArray.push(tempInt);
        }
        // ensure that there is always a gem with value 1 so the game is solveable
        if (gemArray.indexOf(1) === -1) {
            gemArray[randInt(3)]=1;
        }
        console.log(gemArray)
        for (var i=0; i<gemArray.length; i++) {
            var tempGem=$("<div>")

        }
    }

// update displays of values
    function updateDisplays() {
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);
        $("#crystal-core-text").text(crystalValue);
    }


    gameReset();


// listen to click on gems
// subtract value of clicked gem from crystal
// if crystal is 0, win
// if crystal is less than 0, lose
// else, update crystal value

// if reset button clicked, reset values to default
});