import React from 'react';
import {useSelector} from 'react-redux';
import { getAllMovies } from '../../Features/Movies/MovieSlice';


const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    console.log("movies",movies);
    return (
        <div>
            movie list
        </div>
    );
};

export default MovieListing;