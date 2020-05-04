import React from 'react'
import ReactDOM from 'react-dom'
import {trackTitle, trackMP3, rounds} from '../jsonParse/jsonParse'
import './game.css'
import {Finished} from '../finished/finished'
let score = 0;
let currentRound = 0;
let timeLeft = 29;
let currAudio;
let timerId;
const correctAudio = new Audio("https://audio.clyp.it/wmf2dkmm.mp3?Expires=1588561639&Signature=YE7jnYEJqib9PsD-YGVLyAgrEueaM6TgpVKpb5y2uyWANNH6OQWquDdMQaSQ3ylvqfnF6WSgDXj8155dGBE1gXF5jVgGTK4zIqRtemx2Nz8EscvXXQuSVEKOT3xlDS8iyO31f4z7u45EA3gVfSjTQpTDpn59PCc2pzt7fd5Eln8_&Key-Pair-Id=APKAJ4AMQB3XYIRCZ5PA")
const wrongAudio = new Audio("https://audio.clyp.it/xyy15ze3.mp3?Expires=1588561695&Signature=k9kgJeki6hwj-60N8lS~yxfOedYWcQVzsLGhKn0KTIb96RGHLkIE~hLxc06i13e34V08BnGiwJuYKNQi4mywsWxSwq7szjwfYkUB9c5BoJWDubgyi92bnkcSTQawphKr3QukLzhaJnbnmVDR1SO0U7wMQLmX-~N3HTIdvMw7AyE_&Key-Pair-Id=APKAJ4AMQB3XYIRCZ5PA")

correctAudio.addEventListener("ended", () => {
    nextRound();
})

wrongAudio.addEventListener("ended", () => {
    nextRound();

})

class Game extends React.Component{

    handleKeyDown(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            checkGuess();
        }
    }
    componentDidMount(){
        currAudio = new Audio(trackMP3[currentRound]);
        currAudio.play();
        startTimer();
        currAudio.addEventListener("ended", noTime);        
    }
    render(){      
        return(
            <div id = 'parent'>
                <h1 id = "response">Blank</h1>
                <div className = "container-guess">
                    <label className = 'guess fade-in' id = "guess-label">Guess:</label>
                    <input type = "text"className = 'guess fade-in' id = "guess" name = "guess" onKeyPress={this.handleKeyDown}></input> 
                    <button className = 'button' id = 'skip' onClick = {skip}>Skip</button>
                </div>
               
                <h3 id = "score">Your current score: {score} out of {currentRound}</h3>
                <p id = 'timer'>Timer:</p>
            </div>
            
        )
        
    }
    
}

function nextRound(){
    if(currentRound  === rounds){
        ReactDOM.render(<Finished />, document.getElementById('root'));
    }else{
    stopTimer();
    
    currAudio = new Audio(trackMP3[currentRound]);
    currAudio.play();
    timeLeft = 29;
    startTimer();
    currAudio.addEventListener("ended", noTime);
    document.getElementById('response').style.visibility = "hidden";
    }
}

function skip(){
    document.getElementById('skip').style.visibility = "hidden";
    currAudio.pause();
    currentRound++;
    document.getElementById('score').innerHTML = `Your current score: ${score} out of ${currentRound}`
    nextRound();
}

function stopTimer(){
    const timer = document.getElementById('timer');
    clearTimeout(timerId);
    timer.style.visibility = "hidden";

}

function startTimer(){
    const timer = document.getElementById('timer');
    const skip = document.getElementById('skip');
    timerId = setInterval(() => {
        if (timeLeft <= 15){
            timer.style.visibility = "visible"
            timer.innerHTML = `${timeLeft}`
        }
        if(timeLeft<= 25){
            skip.style.visibility = 'visible'            
        }

        timeLeft--;
    },1000);

}
function noTime(){
    stopTimer();
    document.getElementById('skip').style.visibility = "hidden";
    document.getElementById('response').style.visibility = "visible";
    document.getElementById('response').innerHTML = "You ran out of time!"
    currAudio.pause();
    currentRound++;
    document.getElementById('score').innerHTML = `Your current score: ${score} out of ${currentRound}`
    wrongAudio.play();
}

function playCorrect(){
    currAudio.pause();
    score++;
    currentRound++;
    document.getElementById('score').innerHTML = `Your current score: ${score} out of ${currentRound}`

    correctAudio.play()    
}

//NEED TO FORMAT ANSWER
function checkGuess(){
    const guess = String(document.getElementById('guess').value).toLowerCase();
    const answer = String(trackTitle[currentRound]).toLowerCase();
    if(guess === answer){
        document.getElementById('skip').style.visibility = "hidden";
        document.getElementById('response').style.visibility = "visible";
        document.getElementById('response').innerHTML = "Correct!"
        stopTimer();
        playCorrect();
        return true;
    }
    document.getElementById('response').style.visibility = "visible"; 
    document.getElementById('response').innerHTML = "Try again"
    return false;

}


export {Game}
