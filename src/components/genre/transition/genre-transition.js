import React from 'react'
import ReactDOM from 'react-dom'
import './genre-transition.css'
import {GenreFetch} from '../fetch/genre-fetch'
let chosenGenre =""

class GenreTransition extends React.Component{
    render(){
        return (
        <div>
            <h1 className = "fade-in">Choose a category</h1>
            <div id = "container-photo">
                <figure> 
                    <img className = 'fade-in genre-photo' id = 'pop' src ={require('../photos/pop.jpg')} alt = "pop" onClick = {() => {genreClick("pop")}} />
                    <figcaption className = 'fade-in genre-caption'>Pop</figcaption>
                </figure>
                <figure> 
                    <img className = 'fade-in genre-photo' id = 'rnb' src ={require('../photos/rnb.jpg')} alt = "rnb" onClick = {() => {genreClick("rnb")}}/>
                    <figcaption className = 'fade-in genre-caption'>R&B</figcaption>
                </figure>
                <figure> 
                    <img className = 'fade-in genre-photo' id = 'rap' src ={require('../photos/rap.jpg')} alt = "rap" onClick = {() => {genreClick("rap")}}/>
                    <figcaption className = 'fade-in genre-caption'>Rap</figcaption>
                </figure>
                <figure> 
                    <img className = 'fade-in genre-photo' id = 'electronic' src ={require('../photos/electronic.jpg')} alt = "electronic" onClick = {() => {genreClick("electronic")}}/>
                    <figcaption className = 'fade-in genre-caption'>Electronic</figcaption>
                </figure>
                <figure> 
                    <img className = 'fade-in genre-photo' id = '80s' src ={require('../photos/80s.jpg')} alt = "80s" onClick = {() => {genreClick("80s")}}/>
                    <figcaption className = 'fade-in genre-caption'>80s</figcaption>
                </figure>
                <figure> 
                    <img className = 'fade-in genre-photo' id = 'country' src ={require('../photos/country.jpg')} alt = "country" onClick = {() => {genreClick("country")}}/>
                    <figcaption className = 'fade-in genre-caption'>Country</figcaption>
                </figure>
                <figure> 
                    <img className = 'fade-in genre-photo' id = 'rock' src ={require('../photos/rock.jpg')} alt = "rock" onClick = {() => {genreClick("rock")}}/>
                    <figcaption className = 'fade-in genre-caption'>Rock</figcaption>
                </figure>
                <figure> 
                    <img className = 'fade-in genre-photo' id = 'punk' src ={require('../photos/punk.jpg')} alt = "punk" onClick = {() => {genreClick("punk")}}/>
                    <figcaption className = 'fade-in genre-caption'>Punk</figcaption>
                </figure>
                <figure> 
                    <img className = 'fade-in genre-photo' id = 'classical' src ={require('../photos/classical.jpg')} alt = "classical" onClick = {() => {genreClick("classical")}} />
                    <figcaption className = 'fade-in genre-caption'>Classical</figcaption>
                </figure>
                <figure> 
                    <img className = 'fade-in genre-photo' id = 'metal' src ={require('../photos/metal.jpg')} alt = "metal" onClick = {() => {genreClick("metal")}} />
                    <figcaption className = 'fade-in genre-caption'>Metal</figcaption>
                </figure>

            </div>
        </div>
        )
    }
}

function genreClick(genre){
    chosenGenre = genre;
    ReactDOM.render(< GenreFetch/>, document.getElementById('root'));
}
export {GenreTransition, chosenGenre};