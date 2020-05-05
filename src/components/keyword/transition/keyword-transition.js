import React from 'react'
import ReactDOM from 'react-dom'
import './keyword-transition.css'
import {KeywordFetch} from '../fetch/keyword-fetch'
let keyWord = "";
class KeywordTransition extends React.Component{
    handleKeyDown(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            extractSearch();
        }
    }
    render(){
        return (

            <form className = "container-keyword">

                <label className = 'keyword fade-in' id = "keyword-label">Enter the keyword (Artist,Album, etc):</label>
                <input type = "text"className = 'keyword fade-in' id = "keyword-search" name = "keyword-search" onKeyPress={this.handleKeyDown}></input>
                
            </form>
        )
    }
}

function extractSearch(){
    const searchLine = document.getElementById('keyword-search');
    keyWord = searchLine.value;
    if(keyWord === ""){
        alert("You can not search an empty keyword!")
    }else{
    document.getElementsByClassName("container-keyword")[0].style.display = "none";
    ReactDOM.render(<KeywordFetch />,document.getElementById('root'))
    }
}

export {KeywordTransition,keyWord};