$(document).ready(function() {
    var wins=0;
    var losses=0;
    var crystalValue=0;
    // number of gems to generate
    var numGems=4;
    // used to store the order of the gem images
    var gemImages = ["0","1", "2", "3"];

    // returns a random integer between 0 and the argument(inclusive)
    function randInt(maxInt){
        return (Math.floor(Math.random() * (maxInt+1)))
    }

    // randomizes the order of the elements within an array
    function shuffleArr(arr) {
        for (var i = 0; i<arr.length; i++) {
            var j = randInt(i);
            var temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }

        return arr;
    }
// game reset function
//  reset values to default
    // generate random value for the crystal
    // generate 4 new gems with one guaranteed to have a value of 1
    function gameReset() {
        $("#gem-row").empty();
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
        // randomize the order of the gem images
        gemImages = shuffleArr(gemImages);
        for (var i=0; i<gemArray.length; i++) {
            var tempGem=$("<div>");
            tempGem.attr("class", "col-3 gem");
            tempGem.attr("id","gem"+i);
            tempGem.attr("value", gemArray[i]);
            tempGem.html('<img id="crystal-img" src="assets/images/gem'+gemImages[i]+'.png" alt="gem'+gemImages[i]+'" style="width:100%;">');
            $("#gem-row").append(tempGem);
        }
    }

// update displays of values
    function updateDisplays() {
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);
        $("#crystal-core-text").text(crystalValue);
    }

    gameReset();

    $(".gem").on("click", function(){
        $("#player-message").empty()
        console.log($(this));
        crystalValue -= parseInt($(this).attr("value"));

        if (crystalValue === 0) {
            $("#player-message").text("You won! Congratulations!");
            wins+=1;
            gameReset();
        } else if (crystalValue <= 0) {
            $("#player-message").text("You lost! You drained too much energy from the crystal!");
            losses+=1;
            gameReset();
        } else {
            updateDisplays();
        }
    });

    $("#reset-button").on("click", function(){
        $("#player-message").text("You gave up on the puzzle. Good luck on this one!");
        losses += 1;
        gameReset();
    });

// listen to click on gems
// subtract value of clicked gem from crystal
// if crystal is 0, win
// if crystal is less than 0, lose
// else, update crystal value

// if reset button clicked, reset values to default
});