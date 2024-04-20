
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;


// if we click on the start/reset
document.getElementById("startreset").onclick =
function(){

    //    '  if we are playing'
    if(playing == true){

        location.reload(); //reload page

    } else{ //if we are not playing

        // change mode to playing
        playing = true;

         // set score to 0
        score = 0;


        document.getElementById("scorevalue").innerHTML =
            score;
        // document.getElementById("timeremaining").style.display = "block"; 
            // show countdown
        show("timeremaining");
        
            timeremaining = 60;
            document.getElementById("timeremainingvalue").innerHTML = 
             timeremaining;

            //  hide game over box
            hide("gameover");

        // change button to reset 
        document.getElementById("startreset").innerHTML = 
            "Reset Game";


            // start Countdown
            startCountdown();

            // generate a new Q & A
            generateQA();
    }
}
// if we click on the start/reset
    //    '  if we are playing'
    //    'reload page'
    // if we are not playing
        // set score to 0
        // show countdown
        // reduce time by 1 sec in loop
            // time left ?
                // yes --> continue
                // no --> gameover 
        // change button to reset 
        // generate new Q & A



// if we click on answer box
    // if we are playing
        // correct?
            // yes 
                // increase score
                // show correct box for 1 sec
                // generate new Q&A
            // no
                // show try again box for 1 sec
    for(i=1; i<5; i++){
        document.getElementById("box" + i).onclick =
        function(){
            // chech if we are playing
            if(playing == true){ //yes
                if(this.innerHTML == correctAnswer){
                    // correct answer

                    score++; //increase score by 1

    document.getElementById("scorevalue").innerHTML = 
        score;

                    // hide wrong box and show correct box
                    hide("wrong");
                    show("correct");
                    setTimeout(function(){
                        hide("correct");
                    }, 1000);

                    // generate new Q&A
                    generateQA();
                }else{
                    hide("correct");
                    show("wrong");
                    setTimeout(function(){
                        hide("wrong");
                    }, 1000);
                }
            }
        }
    }


    // FUNCTIONS


    // start counter
    function startCountdown(){
        action = setInterval(function(){
            timeremaining -= 1;
            document.getElementById("timeremainingvalue").innerHTML = 
             timeremaining;
             if(timeremaining == 0){ //Game over
                stopCountdown();

    // document.getElementById("gameover").style.display = "block"; 
    // this is visible by changing the display property to visible
                show("gameover");

    document.getElementById("gameover").innerHTML =
        "<p>Game Over!</p> <p>Your score is " + score + ". </p>";

    // document.getElementById("timeremaining").style.display = "none";
        hide("timeremaining");
        hide("correct");
        hide("wrong");
        playing = false;
    document.getElementById("startreset").innerHTML =
        "Start Game";
             }
        },1000);
    }

    // stop counter
    function stopCountdown(){
        clearInterval(action);
    }


    // hide an element
    function hide(Id){
        document.getElementById(Id).style.display =
            "none";
    }


    // show and element
    function show(Id){
        document.getElementById(Id).style.display =
            "block";
    }


    // Generate question and multiple answers
    function generateQA(){
        var x = 1 + Math.round(9*Math.random());
        var y = 1 + Math.round(9*Math.random());
        correctAnswer = x*y;

        document.getElementById("question").innerHTML = 
            x + "x" + y;
          var correctPosition = 1+Math.round(3*Math.random());

        document.getElementById("box"+correctPosition).innerHTML =
            correctAnswer; //Fill one box with the correct answer

    // fill the other boxes with wrong answers
    var answers = [correctAnswer];

    for (i=1; i<5; i++){
        if(i != correctPosition){
            var wrongAnswer;
          do{
            wrongAnswer = (1 + Math.round(9*Math.random()))*(1 + Math.
                round(9*Math.random())); // a wrong answer
          }while(answers.indexOf(wrongAnswer)>-1) {
           
          }

    document.getElementById("box"+i).innerHTML =
                wrongAnswer;
                answers.push(wrongAnswer);

        }
    }

    }