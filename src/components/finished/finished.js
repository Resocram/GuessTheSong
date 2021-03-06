
import React from 'react'
import ReactDOM from 'react-dom'
import {HomeScreen} from '../home/home'
import {trackTitle, trackArtist} from '../game/game'
import {score} from '../game/game'
import {numRounds} from '../keyword/keywordDeezerParse/keywordDeezerParse'
import './finished.css'

const win = new Audio(require('../game/sounds/win.mp3'))

const lose = new Audio(require('../game/sounds/lose.mp3'))

lose.addEventListener("ended", () => {
    ReactDOM.render(<HomeScreen />, document.getElementById('root'))

})

win.addEventListener("ended", () => {
    ReactDOM.render(<HomeScreen />, document.getElementById('root'))

})



class Finished extends React.Component{
    render(){
        let message;
        if(score/numRounds >= 0.5){
            message = <h1>Congratulations! You scored {score} out of {numRounds}</h1>
            win.play();
        }
        else{ 
            lose.play();
            message = <h1>You only scored {score} out of {numRounds}. Better luck next time!</h1>
        }
        return (
            <div>
                {message}
                <ol id = "list">
                <li id = "d1">{trackTitle[0]} by {trackArtist[0]}</li>
                <li id = "d2">{trackTitle[1]} by {trackArtist[1]}</li>
                <li id = "d3">{trackTitle[2]} by {trackArtist[2]}</li>
                <li id = "d4">{trackTitle[3]} by {trackArtist[3]}</li>
                <li id = "d5">{trackTitle[4]} by {trackArtist[4]}</li>
                <li id = "d6">{trackTitle[5]} by {trackArtist[5]}</li>
                <li id = "d7">{trackTitle[6]} by {trackArtist[6]}</li>
                <li id = "d8">{trackTitle[7]} by {trackArtist[7]}</li>
                <li id = "d9">{trackTitle[8]} by {trackArtist[8]}</li>
                <li id = "d10">{trackTitle[9]} by {trackArtist[9]}</li>
            </ol>
          </div>
        )


    }
}

export {Finished}