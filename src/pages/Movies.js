import Navigation from "../components/Navigation";
import Card from "../components/Card";
import '../components/SearchBar.css'
import { useState } from 'react'
import cardsObj from "../components/CardsObj";

const Movies = () => {
    let [data,setData] = useState(cardsObj.filter(card => card.category === "Movie" && card.carousel === undefined))
    let [result, setResult] = useState("Movies")

    function filterData(e) {
        let currentValue = e.currentTarget.value;
        const filteredData = cardsObj.filter(el => {
            if (currentValue === '') {
                return el;
            }
            else {
                return el.name.toLowerCase().includes(currentValue.toLowerCase())
            }})

        setData(data = filteredData.filter(item => {return item.category === "Movie" }))
        if(currentValue === '') {
            setResult(result = 'Movies')
        } else {
            setResult(result = `Found ${data.length} results for '${currentValue}'`)
        }
    }

    return (
        <div className="main-wraper">
            <Navigation color="#5A698F" color2="#FFFFFF" color3="#5A698F" color4="#5A698F"/>
            <div className="cards-section">
                <div className="container">
                    <div className="search">
                        <div className="searchInputs"> 
                            <button>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.01" width="32" height="32" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.08 21.2L27.6133 25.72C27.8657 25.9704 28.0077 26.3111 28.0077 26.6667C28.0077 27.0222 27.8657 27.363 27.6133 27.6133C27.363 27.8657 27.0222 28.0077 26.6667 28.0077C26.3111 28.0077 25.9704 27.8657 25.72 27.6133L21.2 23.08C19.3366 24.5426 17.0355 25.3363 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667C25.3363 17.0355 24.5426 19.3366 23.08 21.2ZM14.6667 6.66667C10.2484 6.66667 6.66667 10.2484 6.66667 14.6667C6.66667 19.0849 10.2484 22.6667 14.6667 22.6667C19.0849 22.6667 22.6667 19.0849 22.6667 14.6667C22.6667 10.2484 19.0849 6.66667 14.6667 6.66667Z" fill="white"/>
                                </svg>
                            </button>
                            <input placeholder="Search for Movies..." onChange={filterData} type="text"/>
                        </div>
                        <div className='results'>
                            <h2>{result}</h2>
                            <div className="cards-container">
                                {data.map(item => <Card image={item.img} year={item.year} category={item.category} category2={item.category2} name={item.name}/> )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies;