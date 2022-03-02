import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {MovieListing} from '../';
import { fetchMoviesData, fetchSeriesData, getLoading,setIsLoadingFalse } from '../../Features/Movies/MovieSlice';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading)
  const movieText ="Harry";
  const seriesText ="Friends"
  console.log("isLoading",isLoading)
    useEffect(() => {
      dispatch(fetchMoviesData(movieText))
      dispatch(fetchSeriesData(seriesText));
      return () => {
        dispatch(setIsLoadingFalse());
      };
      },[dispatch]);
    return (
        <div>
          {isLoading?<div className='loading' >loading....</div>:<MovieListing/>}
            
        </div>
    );
};

export default Home;