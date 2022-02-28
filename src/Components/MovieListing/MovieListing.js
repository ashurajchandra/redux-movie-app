import React from 'react';
import {useSelector} from 'react-redux';

import "./MovieListing.scss";
import { MovieCard } from '..';
import { getAllMovies } from '../../Features/Movies/MovieSlice';


const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    console.log("movies",movies);
    let renderMovies ='';
    renderMovies = movies.Response ==='True'?(
        movies.Search.map((movie,index)=>(
            <MovieCard key={index} data={movie}/>
        ))
    ):(<div>{movies.Error}</div>)
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>{renderMovies}</div>
            </div>
        </div>
    );
};

export default MovieListing;