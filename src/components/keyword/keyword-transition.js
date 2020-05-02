import React from 'react'
import ReactDOM from 'react-dom'
import './keyword-transition.css'

let keyWord = "";
class Keyword extends React.Component{
    handleKeyDown(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            extractSearch();
        }
    }
    render(){
        return (

            <form className = "container-keyword">

                <label for ="keyword" className = 'keyword' id = "keyword-label">Enter the keyword (Artist,Album, etc):</label>
                <input type = "text"className = 'keyword' id = "keyword-search" name = "keyword" onKeyPress={this.handleKeyDown}></input>
                
            </form>
        )
    }
}

function extractSearch(){
    const searchLine = document.getElementById('keyword-search');
    keyWord = searchLine.value;
    document.getElementsByClassName("container-keyword")[0].style.display = "none";
}

export {Keyword,keyWord};