import React, { Component, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cardsObj from "./CardsObj";
import fav from '../images/card/favourites.png'
import favClicked from '../images/card/favourites-clicked.png'
import movie from '../images/card/movie.png'
import tv from '../images/card/tv.png'
import play from '../images/card/play.png'
import './Carousel.css'

let carouselData = cardsObj.filter(element => element.carousel === true)

function CarouselCard(props) {
  let storageObj = cardsObj;
    
  if(localStorage.getItem('cards') !== null) {
      storageObj = JSON.parse(localStorage.getItem('cards'))
  }

  localStorage.setItem('cards', JSON.stringify(storageObj))
  
  let [imgSrc, setImg] = useState(() => {
      for(let d = 0; d < storageObj.length; d++) {
          if(props.name === storageObj[d].name) {
              if(storageObj[d].marked === true) {
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
          for(let i = 0; i < storageObj.length; i++) {
              if(props.name === storageObj[i].name) {
                  storageObj[i].marked = !storageObj[i].marked
              }
          }
      } else {
          setImg(imgSrc = fav)
          for(let l = 0; l < storageObj.length; l++) {
              if(props.name === storageObj[l].name) {
                  storageObj[l].marked = !storageObj[l].marked
              }
          }
      } 
      localStorage.setItem('cards', JSON.stringify(storageObj))
  }
  
    return (
        <div className="carouselDiv">
            <img className="carouselImg" src={props.img} alt="img" />
            <div className="carousel-content">
                <div className="carouselDescription">
                    <h4>{props.year}</h4>
                    <div className="circle"></div>
                    <div className="category"><img src={props.category === "Movie" ? movie : tv} alt="category" /><h4>{props.category}</h4></div>
                    <div className="circle"></div>
                    <h4>{props.category2}</h4>
                </div>
                <h3>{props.name}</h3>
            </div>
            <div className="cardHover">
                <img src={play} alt="play button" />
            </div>
            <img className="fav-img" onClick={changeImg} src={imgSrc} alt="favourites" />
        </div>
    )
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 650,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]
    };
    return (
      <Slider {...settings}>
          {carouselData.map((item) => (<CarouselCard img={item.imgCarousel} year={item.year} category={item.category} category2={item.category2} name={item.name}/> ))}
      </Slider>
    );
  }
}





