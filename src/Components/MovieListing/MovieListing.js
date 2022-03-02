import React from 'react';
import {useSelector} from 'react-redux';

import "./MovieListing.scss";
import { getAllMovies, getAllSeries } from '../../Features/Movies/MovieSlice';
import {MovieCard} from '../index';


const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const series = useSelector(getAllSeries)
    let renderMovies

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

   let renderSeries = ''
    renderSeries = series.Response === 'True'?(
        series.Search.map((movie,index)=>(
            <MovieCard key={index} data={movie}/>
        ))
    ):(<div className='shows-error'>
    <h3>{series.Error}</h3></div>)
    return (
        <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
        <div className="show-list">
          <h2>Series</h2>
          <div className="movie-container">{ renderSeries}</div>
        </div>
      </div>
    );
};

export default MovieListing;