import Navigation from "../components/Navigation";
import Card from "../components/Card";
import '../components/SearchBar.css'
import { useState } from 'react'
import '../components/useLocalStorage'

const Marked = () => {
    let [data,setData] = useState(JSON.parse(localStorage.getItem('cards')).filter(card => card.marked === true))
    let [resultMovie, setResultMovie] = useState("Bookmarked Movies")
    let [resultTV, setResultTV] = useState("Bookmarked TV Series")
    let [movieSpan, setMovieSpan] = useState("")
    let [tvSpan, setTvSpan] = useState("")

    function filterData(e) {
        let currentValue = e.currentTarget.value;
        const filteredData = data.filter(el => {
            if (currentValue === '') {  
                return el;
            }
            else {
                return el.name.toLowerCase().includes(currentValue.toLowerCase());      
            }})

        setData(data = filteredData)
        if(currentValue === '') {
            setResultMovie(resultMovie = "Bookmarked Movies")
            setResultTV(resultTV = "Bookmarked TV Series")
            setMovieSpan(movieSpan = "")
            setTvSpan(tvSpan = "")
        } else {
            let moviesData = filteredData.filter(element => element.category === "Movie")
            let tvData = filteredData.filter(element => element.category === "TV Series")
            setResultMovie(resultMovie = `Found ${moviesData.length} results for '${currentValue}'`)
            setResultTV(resultTV = `Found ${tvData.length} results for '${currentValue}'`)
            setMovieSpan(movieSpan = "(Bookmarked Movies)")
            setTvSpan(tvSpan = "(Bookmarked TV Series)")
        }
    }

    return (
        <div className="main-wraper">
            <Navigation color="#5A698F" color2="#5A698F" color3="#5A698F" color4="#FFFFFF"/>
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
                            <input placeholder="Search for bookmarked shows..." onChange={filterData} type="text"/>
                        </div>
                        <div className='results'>
                            <h2>{resultMovie} <span>{movieSpan}</span></h2>
                            <div className="cards-container">
                                {data.map(item => item.category === "Movie" ? <Card image={item.img} year={item.year} category={item.category} category2={item.category2} name={item.name}/> : <></>)}
                            </div>
                            <h2>{resultTV} <span>{tvSpan}</span></h2>
                            <div className="cards-container">
                                {data.map(item => item.category === "TV Series" ? <Card image={item.img} year={item.year} category={item.category} category2={item.category2} name={item.name}/> : <></>)} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marked;