import React from 'react'
import ReactDOM from 'react-dom'
import {trackTitleK, trackMP3K, trackArtistK, numRounds} from '../keyword/keywordDeezerParse/keywordDeezerParse'
import {trackTitleG, trackArtistG} from '../genre/genreParse/genreLastFMParse'
import {trackMP3G} from '../genre/fetch/genre-fetch2'
import './game.css'
import {Finished} from '../finished/finished'
import {clicked} from '../home/home'
let score;
let currentRound;
let timeLeft;
let currAudio;
let timerId;
let trackTitle;
let trackMP3;
let trackArtist;



const correctAudio = new Audio(require("./sounds/correct.mp3"))
const wrongAudio = new Audio(require("./sounds/wrong.mp3"))

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
        if(clicked === 'Keyword'){
            trackTitle = trackTitleK;
            trackMP3 = trackMP3K;
            trackArtist = trackArtistK;
        }
        else{
            trackTitle = trackTitleG;
            trackMP3 = trackMP3G;
            trackArtist = trackArtistG;
        }
        // console.log(trackTitle);
        // console.log(trackMP3)
        score = 0;
        currentRound = 0;
        timeLeft = 29;
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
                <ol id = "list">
                    <li id = "l1">{trackTitle[0]} by {trackArtist[0]}</li>
                    <li id = "l2">{trackTitle[1]} by {trackArtist[1]}</li>
                    <li id = "l3">{trackTitle[2]} by {trackArtist[2]}</li>
                    <li id = "l4">{trackTitle[3]} by {trackArtist[3]}</li>
                    <li id = "l5">{trackTitle[4]} by {trackArtist[4]}</li>
                    <li id = "l6">{trackTitle[5]} by {trackArtist[5]}</li>
                    <li id = "l7">{trackTitle[6]} by {trackArtist[6]}</li>
                    <li id = "l8">{trackTitle[7]} by {trackArtist[7]}</li>
                    <li id = "l9">{trackTitle[8]} by {trackArtist[8]}</li>
                    <li id = "l10">{trackTitle[9]} by {trackArtist[9]}</li>
                </ol>
            </div>
            
        )
        
    }
    
}

function nextRound(){
    if(currentRound  === numRounds){
        ReactDOM.render(<Finished />, document.getElementById('root'));
    }else{
    stopTimer();
    document.getElementById(String("l" + currentRound)).style.visibility = 'visible'
    document.getElementById('guess').value = "";
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
    document.getElementById('response').style.color = "#f05b56";
    document.getElementById('response').innerHTML = "You ran out of time!"
    currAudio.pause();
    currentRound++;
    document.getElementById('score').innerHTML = `Your current score: ${score} out of ${currentRound}`
    wrongAudio.play();
}

function playCorrect(){
    stopTimer();
    document.getElementById('skip').style.visibility = "hidden";
    document.getElementById('response').style.visibility = "visible";
    document.getElementById('response').style.color = "#a6eb7a";
    document.getElementById('response').innerHTML = "Correct!"
    currAudio.pause();
    score++;
    currentRound++;
    document.getElementById('score').innerHTML = `Your current score: ${score} out of ${currentRound}`
    correctAudio.play()    
}


function checkGuess(){
    const guess = String(document.getElementById('guess').value).toLowerCase();
    const answer = String(trackTitle[currentRound]).toLowerCase();
    const regexWord = /[\w]+/g;
    const regexBrackets = /\(.+\)/g;
    const answerNoBrackets = answer.replace(regexBrackets, "");
    const answerArray = answerNoBrackets.match(regexWord)
    const finalGuess = guess.trim();
    const finalAnswer = answerArray.join(" ");
    if(finalGuess === finalAnswer){

        playCorrect();
        return true;
    }
    else if(answerArray.includes(finalGuess)){
        document.getElementById('response').style.visibility = "visible"; 
        document.getElementById('response').style.color = "white";
        document.getElementById('response').innerHTML = "You're close!"
    }
    else{
    document.getElementById('response').style.visibility = "visible"; 
    document.getElementById('response').style.color = "white";
    document.getElementById('response').innerHTML = "Try again"
    }
    return false;

}


export {score, Game, trackTitle}
