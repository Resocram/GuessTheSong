import React from 'react'
import ReactDOM from 'react-dom'
import {chosenGenre} from '../transition/genre-transition'
import {genreLastFMParse, invalid} from '../genreParse/genreLastFMParse'
import {GenreFetch2} from './genre-fetch2'
import {HomeScreen} from '../../home/home'

const lastFMURL  = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag="
const queryParams = "&api_key="
const APIKEY = "2da73dbc292983c9669e3faacd32e6da"
const format = "&format=json"

class GenreFetch extends React.Component{
    constructor(){
        super();
        this.state={data: []};
    }
    async componentDidMount(){
        const endpoint = lastFMURL+ chosenGenre + queryParams+ APIKEY + format;
        const response = await fetch(endpoint);
        if(response.ok){
             let jsonResponse = await response.json();
             this.setState({data: jsonResponse})
        }
        genreLastFMParse(this.state);
         if(invalid){
            ReactDOM.render(<HomeScreen />, document.getElementById('root'))
         }
         ReactDOM.render(<GenreFetch2 />,document.getElementById('root'))

    }

    render(){
        return(
            //Loading screen
            <h1>LOADING</h1>
        )
    }
}

export {GenreFetch}

