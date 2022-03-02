import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from "../../Common/Apis/MovieApi";
import {APIKey} from "../../Common/Apis/MovieApiKey";
 
export const fetchMoviesData = createAsyncThunk('movies/fetchMoviesData', async (term)=>{
  const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    )
    return response.data
  });
  export const fetchSeriesData = createAsyncThunk('movies/fetchSeriesData', async (term)=>{
    const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`
      )
      return response.data
    });
    export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
      "movies/fetchAsyncMovieOrShowDetail",
      async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return response.data;
      }
    );

const initialState={
    movies: {},
    series:{},
    selectMovieOrShow:{},
    isLoading:true
  }
export const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
      setIsLoadingFalse:(state)=>{
        state.isLoading=true
      },
      removeSelectedMovieOrShow: (state) => {
        state.selectMovieOrShow = {};
      },
    },
    extraReducers:{
      [fetchMoviesData.pending]:()=>{
        console.log("promise pending")
      },
      [fetchMoviesData.fulfilled]:(state,action)=>{
        console.log("fetched movie  succesfully");
        return {...state, isLoading:false, movies:action.payload}
      },
      [fetchMoviesData.rejected]:()=>{
        console.log("promise rejected");
      },
      [fetchSeriesData.fulfilled]:(state,action)=>{
        console.log("fetched show data succesfully");
        return {...state, series:action.payload}
      },
      [fetchAsyncMovieOrShowDetail.pending]: () => {
        console.log("fetchAsyncMovieOrShowDetail promise pendiong");
      },
      [fetchAsyncMovieOrShowDetail.fulfilled]: (state, action) => {
        console.log("Fetched fetchAsyncMovieOrShowDetail Successfully!");
        return { ...state, selectMovieOrShow: action.payload };
      },
      [fetchAsyncMovieOrShowDetail.rejected]: () => {
        console.log("fetchAsyncMovieOrShowDetail promise rejected");
      },
    }
  
});


// Action creators are generated for each case reducer function
export const {addMovies } =  movieSlice.actions
export const { removeSelectedMovieOrShow,setIsLoadingFalse } = movieSlice.actions;
export const getAllMovies = (state)=>state.movies
export const getAllSeries = (state)=>state.series
export const getSelectedMovieOrShow = (state) =>state.selectMovieOrShow;
export const getLoading = (state) =>state.isLoading;
export default movieSlice.reducer

