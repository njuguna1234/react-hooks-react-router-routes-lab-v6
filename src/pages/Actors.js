import React from 'react';
import NavBar from '../components/NavBar';

const actors = [
  // Replace with actual data or fetch from API
  { name: 'Actor 1', movies: ['Movie 1', 'Movie 2'] },
  { name: 'Actor 2', movies: ['Movie 3', 'Movie 4'] },
];

function Actors() {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
