import React, { useEffect, useState } from 'react'
import lodash, { sortBy } from 'lodash';


import '../../components/MovieList/MovieList.css'
import Fire from '../../assets/fire.png';
import MovieCard from './MovieCard';
import FilterGroup from '../../components/MovieList/FilterGroup.jsx';

// import Party from '../assets/partying-face.png';
// import Star from '../assets/glowing-star.png'; 

const MovieList = ({type, title, emoji}) => {
    const [data, setData] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const [minRating, setMinRating] = useState([]);
    const [sort, setSort] = useState({
      by:'default',
      order: 'asc'
    })

    useEffect(() =>{
        fetchMovies();
          }, [])

    useEffect(() => {
        if(sort.by !== 'default'){
          const sortedMovies= lodash.orderBy(filterMovies, [sort.by], [sort.order]);
          setFilterMovies(sortedMovies);
        }else{
          fetchMovies();
        }
    }, [sort])
    

          const fetchMovies = async () => {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/${type}?api_key=d41312979ade77d0b01066871d4b4a56`
              );
            const data = await response.json();
            setData(data.results);
            setFilterMovies(data.results);
          }
          
          const handlefilter = rate =>{

            if(rate === minRating){
              setMinRating(0);
              setFilterMovies(data)
            }else{
              setMinRating(rate);

              const filtered = data.filter((movie) => movie.vote_average >= rate);
               setFilterMovies(filtered);
            }

          }

          const handleSort = e =>{
            const {name, value} = e.target;
            setSort(prev => ({...prev, [name]: value}))
          }

  return (
    
    <section className='movie_list' id={type}>

  
        <header className='movie_list_header'>
            <h2 className='movie_list_heading'>{title}
                <img src={emoji} alt={`${emoji} icon` } className='navbar_emoji'/>
            </h2>

            <div className='movie_list_fs'>

               <FilterGroup 
               minRating={minRating} 
               onRatingClick={handlefilter}
               ratings={[8,7,6]}
               ></FilterGroup>

                <select name="by" className="movie_sorting" id="" 
                  onChange={handleSort}
                  value={sort.by}
                >
                    <option value="default">SortBy</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>

                <select name="order" className='movie_sorting' id=""
                  onChange={handleSort}
                  value={sort.order}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

        </header>
        <div className='movie_cards'>
        {filterMovies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.original_title}
            release_date={movie.release_date}
            rating ={movie.vote_average}
            description={movie.overview}
            link={`https://www.themoviedb.org/movie/${movie.id}`}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Adjust the URL for the movie poster
            // Add more props as needed to pass data to MovieCard component
          />
        ))}
            </div>
    </section>
  )
}

export default MovieList