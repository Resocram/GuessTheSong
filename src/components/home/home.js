import React from 'react';
import './home.css';


const title = "Can you guess the song?"
const select = "Choose a category"
const categories = ["Keyword", "Genre"]

class HomeScreen extends React.Component{
  render(){
    return (
      <div> 
        <h1 className = "home">{title}</h1>
        <br />
        <h2 className = "home">{select}</h2>
        <br />
        <br />
        <br />
        <br />
        <div className = 'container home'>
            <button className = 'button home' onClick = {() => fade('keyword')}>{categories[0]}</button>
            <button className = 'button home' onClick = {() => fade('genre')}>{categories[1]}</button>
        </div>
    </div>
    )
  }
}

function fade(name){
    Array.from(document.getElementsByClassName('home')).forEach((element)=>{element.style.display = 'none'});
}


export default HomeScreen

