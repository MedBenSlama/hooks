import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Filter from './components/Filter';

// Données des films
const initialMovies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg',
    rating: 5,
    trailerURL: 'https://www.youtube.com/embed/6hB3S9bIaco'
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests of his ability to fight injustice.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    rating: 5,
    trailerURL: 'https://www.youtube.com/embed/EXeTwQWrcwY'
  },
  {
    id: 3,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a C.E.O.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    rating: 4,
    trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0'
  }
];

function App() {
  const [movies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  // Filtrer les films
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1> My Movie Collection</h1>
        </header>

        <Routes>
          <Route path="/" element={
            <main className="app-main">
              <div className="sidebar">
                <Filter
                  titleFilter={titleFilter}
                  setTitleFilter={setTitleFilter}
                  ratingFilter={ratingFilter}
                  setRatingFilter={setRatingFilter}
                />
              </div>
              <div className="content">
                <MovieList movies={filteredMovies} />
              </div>
            </main>
          } />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
