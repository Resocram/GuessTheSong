import React from 'react'

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

                <label for ="keyword" className = 'keyword' id = "keyword-label">Enter the keyword:</label>
                <input type = "text"className = 'keyword' id = "keyword-search" name = "keyword" onKeyPress={this.handleKeyDown}></input>
                
            </form>
        )
    }
}

function extractSearch(){
    const search = document.getElementById('keyword-search').value;
    //document.getElementById("TEST").innerHTML = search;
}

export default Keyword;