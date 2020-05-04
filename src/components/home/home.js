import React from 'react';
import ReactDOM from 'react-dom'
import './home.css';
import {KeywordTransition} from '../keyword/transition/keyword-transition';
import Genre from '../genre/genre';


const title = "Can you guess the song?"
const select = "Choose a category"
const categories = ["Keyword", "Genre"]

class HomeScreen extends React.Component{
  render(){
    return (
      <div className = "fade-in"> 
        <h1 className = "home">{title}</h1>
        <br />
        <h2 className = "home">{select}</h2>
        <br />
        <br />
        <br />
        <br />
        <div className = 'container home'>
            <button className = 'button home' onClick = {() => button('Keyword')}>{categories[0]}</button>
            <button className = 'button home' onClick = {() => button('Genre')}>{categories[1]}</button>
        </div>
    </div>
    )
  }
}

function button(name){
    if(name === 'Keyword'){
      ReactDOM.render(<KeywordTransition />,document.getElementById('root'))
    }
    else{
      ReactDOM.render(<Genre />,document.getElementById('root'))
    }
}


export {HomeScreen}

