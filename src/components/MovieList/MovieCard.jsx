import React from 'react'
import '../../components/MovieList/MovieCard.css'
import Star from '../../assets/star.png'; 

const MovieCard = (movie) => {
    const { title, poster, release_date, rating, description, link} = movie;
  return (
    <a href={link} className='movie_card' target='_blamk'>
        <img src={poster}
         alt="" className='movie_poster'/>

        <div className="movie_details">
            <h3 className='movie_details_heading'>{title}</h3>
            <div className='movie_date_rate'>
                <p>{release_date}</p>
                <p>{rating}<img src={Star} alt="rating icon" className='card_emoji'/></p>
            </div>
            <div>
                <p className="movie_description">{description.slice(0, 100) + "..."}</p>
            </div>
        </div>
    </a>
  )
}

export default MovieCard