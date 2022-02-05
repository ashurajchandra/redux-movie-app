import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.scss";

import { Footer,
  Header,
  Home,
  MovieDetail,
  PageNotFound} from './Components/';
// import { PageNotFound } from './Components';

function App(store) {
  console.log("store",store)
  return (
    <>
    <div className="App">
    <Router>
    <Header/>
    <div className="container">
    <Routes>
     
    <Route path="/" element={<Home />}/>
        <Route path="movie:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
        {/* </Route> */}
       
    </Routes>
    </div>
    <Footer/>
  </Router>
    </div>
    </>
  );
}

export default App;
