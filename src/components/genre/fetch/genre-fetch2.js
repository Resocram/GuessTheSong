import React from 'react'
import ReactDOM from 'react-dom'
import {Game} from '../../game/game'
import {trackTitleG, trackArtistG} from '../genreParse/genreLastFMParse'
import {numRounds} from '../genreParse/genreLastFMParse'

const deezerURL  = "https://api.deezer.com"
const queryParams = "/search?q="

let trackMP3G;
class GenreFetch2 extends React.Component{
    constructor(){
        super();
        this.state={data: []};
    }
    async componentDidMount(){
        trackMP3G = [];
        for(let i = 0; i<numRounds; i++){ 
            const endpoint = deezerURL + queryParams + encodeURIComponent(trackArtistG[i]) + "%20" + encodeURIComponent(trackTitleG[i]); 
            const response = await fetch(endpoint);
            if(response.ok){
                let jsonResponse = await response.json();
                this.setState({data: jsonResponse})
            }
            trackMP3G.push(this.state.data.data[0].preview);
        }
        
        ReactDOM.render(<Game />,document.getElementById('root'))

    }

    render(){
        return(
            //Loading screen
            <h1>LOADING</h1>
        )
    }
}

export {trackMP3G, GenreFetch2}

