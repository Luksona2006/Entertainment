import './Card.css'
import fav from '../images/card/favourites.png'
import favClicked from '../images/card/favourites-clicked.png'
import tv from '../images/card/tv.png'
import movie from '../images/card/movie.png'
import play from '../images/card/play.png'
import React, { useState } from 'react'
import cardsObj from './CardsObj'

function Card(props) {
    let storageObj = cardsObj;

    if (localStorage.getItem('cards') !== null) {
        storageObj = JSON.parse(localStorage.getItem('cards'))
    }

    localStorage.setItem('cards', JSON.stringify(storageObj))

    let [imgSrc, setImg] = useState(() => {
        for (let d = 0; d < storageObj.length; d++) {
            if (props.name === storageObj[d].name) {
                if (storageObj[d].marked === true) {
                    return favClicked
                } else {
                    return fav
                }
            }
        }
    })

    function changeImg() {
        if (imgSrc === fav) {
            setImg(imgSrc = favClicked)
            for (let i = 0; i < storageObj.length; i++) {
                if (props.name === storageObj[i].name) {
                    storageObj[i].marked = !storageObj[i].marked
                }
            }
        } else {
            setImg(imgSrc = fav)
            for (let l = 0; l < storageObj.length; l++) {
                if (props.name === storageObj[l].name) {
                    storageObj[l].marked = !storageObj[l].marked
                }
            }
        }
        localStorage.setItem('cards', JSON.stringify(storageObj))
    }

    return (
        <div className='card'>
            <div className='relative'>
                <img className="image" src={props.image} alt="movie wallpaper" />
                <button onClick={changeImg}><img src={imgSrc} alt="favourites" /></button>
                <div className="cardHover">
                    <img src={play} alt="play button" />
                </div>
            </div>
            <div className="description">
                <span>{props.year}</span>
                <div className='circle'></div>
                <div className="category"><img src={props.category === "Movie" ? movie : tv} alt="category" /><span>{props.category}</span></div>
                <div className='circle'></div>
                <span>{props.category2}</span>
            </div>
            <h6>{props.name}</h6>
        </div>
    )
}

export default Card