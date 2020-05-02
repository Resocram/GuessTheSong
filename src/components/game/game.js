import React from 'react'
import {trackTitle, trackMP3, parseResponse} from '../jsonParse/jsonParse'


class Game extends React.Component{

    render(){
        return(
            <audio controls>
            <source src = {trackMP3[0]} type = "audio/mp3"></source>
            </audio>
        )
        
    }
    
}


export {Game}
