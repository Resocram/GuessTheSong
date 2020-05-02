import React from 'react'
import {trackTitle, trackMP3} from '../jsonParse/jsonParse'
import './game.css'

let score = 0;
let currentRound = 0;
let currAudio;


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
        return(
            <div>
                <h1 id = "response"></h1>
                <form className = "container-guess">
                    <label className = 'guess fade-in' id = "guess-label">Guess:</label>
                    <input type = "text"className = 'guess fade-in' id = "guess" name = "guess" onKeyPress={this.handleKeyDown}></input> 
                </form>
                
                <h3 id = "score">Your current score: {score} out of {currentRound}</h3>;
            </div>
            
        )
        
    }
    
}

function checkGuess(){
    console.log(String(trackTitle[currentRound]))

    if(formatAnswer()){
        score++;
        currentRound++;
        document.getElementById('score').innerHTML = `Your current score ${score} out of ${currentRound}`
        currAudio.pause();
        currAudio = new Audio(trackMP3[currentRound]);
        currAudio.play();
    }
}

//NEED TO FORMAT ANSWER
function formatAnswer(){
    const guess = String(document.getElementById('guess').value).toLowerCase();
    const answer = String(trackTitle[currentRound]).toLowerCase();
    if(guess === answer){
        document.getElementById('response').innerHTML = "Correct!"
        //PLAY CHECKMARK SOUND?
        return true;
    }
    document.getElementById('response').innerHTML = "Try again"
    return false;

}

export {Game}
