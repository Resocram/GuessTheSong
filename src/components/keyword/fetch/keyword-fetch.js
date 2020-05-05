import React from 'react'
import ReactDOM from 'react-dom'
import {keyWord} from '../transition/keyword-transition'
import {keywordDeezerParse, invalid} from '../keywordDeezerParse/keywordDeezerParse'
import {Game} from '../../game/game'
import {HomeScreen} from '../../home/home'
const deezerURL  = "https://api.deezer.com"
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
        keywordDeezerParse(this.state)
        if(invalid){
            ReactDOM.render(<HomeScreen />, document.getElementById('root'))
        }else{
            ReactDOM.render(<Game />,document.getElementById('root'))
        }
    }


    render(){
        return(
            //Loading screen
            <h1>LOADING</h1>


        )
    }
}

export {KeywordFetch}

