import { createSlice } from '@reduxjs/toolkit';

const initialState={
    movies: {}
  }
export const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state, action) => {
            state.movies= action.payload
            console.log("action",action.payload.Search)
            console.log("state.movies",state.movies)
          }
    }
  
});
console.log("initialState",initialState.movies)

// Action creators are generated for each case reducer function
export const {addMovies } =  movieSlice.actions
export const getAllMovies = (state)=>state.movies
export default movieSlice.reducer