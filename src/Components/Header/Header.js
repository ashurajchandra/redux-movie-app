import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchMoviesData,
  fetchSeriesData,
} from "../../Features/Movies/MovieSlice";
import user from "../../Images/user.png";
import "./Header.scss";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText === "") return alert("Please enter search term!");
    dispatch(fetchMoviesData(searchText));
    dispatch(fetchSeriesData(searchText));
    setSearchText("");
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            placeholder="search your movie"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
