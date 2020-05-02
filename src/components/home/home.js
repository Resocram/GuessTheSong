import React from 'react';
import ReactDOM from 'react-dom'
import './home.css';
import {Keyword} from '../keyword/keyword-transition';
import Genre from '../genre/genre';


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
            <button className = 'button home' onClick = {() => fade('Keyword')}>{categories[0]}</button>
            <button className = 'button home' onClick = {() => fade('Genre')}>{categories[1]}</button>
        </div>
    </div>
    )
  }
}

function fade(name){
    Array.from(document.getElementsByClassName('home')).forEach((element)=>{element.style.display = 'none'});
    if(name === 'Keyword'){
      ReactDOM.render(<Keyword />,document.getElementById('root'))
    }
    else{
      ReactDOM.render(<Genre />,document.getElementById('root'))
    }
}


export default HomeScreen

