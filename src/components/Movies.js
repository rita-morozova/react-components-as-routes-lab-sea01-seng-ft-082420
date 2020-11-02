import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
        <div key={movie.title}>
          <h2>Title: {movie.title}</h2>
          <h2>Time: {movie.time}</h2>
          <h2>Genres: </h2>
          <ul>
            {movie.genres.map((genre, index) =>(
              <li key={index}>
                {genre}
              </li>
            ))}
          </ul>
          </div>))}
    </div>
  );
};

export default Movies;
