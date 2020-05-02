import React from 'react'
import ReactDOM from 'react-dom'
import {keyWord} from '../transition/keyword-transition'
import {parseResponse} from '../../jsonParse/jsonParse'
import {Game} from '../../game/game'
const deezerURL  = "https://cors-anywhere.herokuapp.com/https://api.deezer.com"
const queryParams = "/search?q="

class KeywordFetch extends React.Component{
    constructor(){
        super();
        this.state={data: []};
    }
    async componentDidMount(){
        const endpoint = deezerURL + queryParams + encodeURIComponent(keyWord);
        const response = await fetch(endpoint);
        if(response.ok){
            let jsonResponse = await response.json();
            this.setState({data: jsonResponse})
        }
        parseResponse(this.state)
        ReactDOM.render(<Game />,document.getElementById('root'))
    }


    render(){
        return(
            //Loading screen
            <h1>LOADING</h1>


        )
    }
}

export {KeywordFetch}

