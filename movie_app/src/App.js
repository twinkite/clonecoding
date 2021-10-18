import React, { useState, useEffect } from "react";
import axios from 'axios';
import Movie from './Movie';
import PropTypes from "prop-types";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [test, setTest] = useState([1,2,3,4]);
  const getMovies = async() => {
    const {
      data: {
        data : {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    setIsLoading(false);
    setMovies({movies}.movies);
    
  }
  useEffect(() => {
    getMovies();
  }, [])

  

  return (
    <div>
      {isLoading ? "Loading..." : 
      movies.map(movie => {
        return <Movie 
        key={movie.id}
        id={movie.id} 
        title={movie.title} 
        year ={movie.year} 
        summary = {movie.summary}
        poster={movie.medium_cover_image}/> 
      })}
      
    </div>
  );
}

export default App;
