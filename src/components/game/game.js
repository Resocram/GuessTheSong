import React from 'react'
import {trackTitle, trackMP3} from '../jsonParse/jsonParse'
import './game.css'

let score = 0;
let currentRound = 0;
let currAudio;
const correctAudio = new Audio("http://docs.google.com/uc?export=open&id=1zNSi5xLPnsWpvaGgTYZG2-t1nrf9_wTu")
const wrongAudio = new Audio("http://docs.google.com/uc?export=open&id=1HayElluSvoRbg7V-M94UbnKN3giIgv19")

correctAudio.addEventListener("ended", () => {
    currAudio = new Audio(trackMP3[currentRound]);
    currAudio.play();
    document.getElementById('response').innerHTML = "";
})

wrongAudio.addEventListener("ended", () => {
    currAudio = new Audio(trackMP3[currentRound]);
    currAudio.play();
    document.getElementById('response').innerHTML = "";
    document.getElementById('score').innerHTML = `Your current score ${score} out of ${currentRound}`
})
class Game extends React.Component{

    handleKeyDown(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            checkGuess();
        }
    }
    render(){
        currAudio = new Audio(trackMP3[currentRound]);
        currAudio.play();
        currAudio.addEventListener("ended", noTime);
        console.log(String(currAudio.duration));
        return(
            <div>
                <h1 id = "response"> </h1>
                <form className = "container-guess">
                    <label className = 'guess fade-in' id = "guess-label">Guess:</label>
                    <input type = "text"className = 'guess fade-in' id = "guess" name = "guess" onKeyPress={this.handleKeyDown}></input> 
                </form>
                
                <h3 id = "score">Your current score: {score} out of {currentRound}</h3>;
            </div>
            
        )
        
    }
    
}

function noTime(){
    document.getElementById('response').innerHTML = "You ran out of time!"
    currAudio.pause();
    currentRound++;
    wrongAudio.play();
}

function checkGuess(){
    console.log(String(trackTitle[currentRound]))

    if(formatAnswer()){
        score++;
        currentRound++;
        document.getElementById('score').innerHTML = `Your current score ${score} out of ${currentRound}`
    }
}

function playCorrect(){
    currAudio.pause();
    correctAudio.play()    
}

//NEED TO FORMAT ANSWER
function formatAnswer(){
    const guess = String(document.getElementById('guess').value).toLowerCase();
    const answer = String(trackTitle[currentRound]).toLowerCase();
    if(guess === answer){
        document.getElementById('response').innerHTML = "Correct!"
        playCorrect();
        return true;
    }

    document.getElementById('response').innerHTML = "Try again"
    return false;

}


export {Game}
