import React,{useEffect} from 'react';
import { useDispatch } from "react-redux";
import {MovieListing} from '../';
import movieApi from "../../Common/Apis/MovieApi";
import {APIKey} from "../../Common/Apis/MovieApiKey";
import { addMovies } from '../../Features/Movies/MovieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
    useEffect(() => {
       const fetchMovies = async ()=>{
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${movieText}&type=movie`
          )
        .catch((error)=>{
            console.log("THE RESPONSE FROM ERROR",error);
        })
        console.log("API RESPONSE:",response)
        dispatch(addMovies(response.data))
       }
       fetchMovies()
      },[]);
    return (
        <div>
            home
            <MovieListing/>
        </div>
    );
};

export default Home;