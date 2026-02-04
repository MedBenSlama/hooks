import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

// Initial sample movies data
const initialMovies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg',
    rating: 5
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    rating: 5
  },
  {
    id: 3,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    rating: 4
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg',
    rating: 4
  },
  {
    id: 5,
    title: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg',
    rating: 5
  },
  {
    id: 6,
    title: 'The Matrix',
    description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg',
    rating: 4
  }
];

function App() {
  // State for movies list
  const [movies, setMovies] = useState(initialMovies);
  
  // State for filters
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  // Add new movie handler
  const handleAddMovie = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };

  // Filter movies based on title and rating
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = movie.rating >= ratingFilter;
    return matchesTitle && matchesRating;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 My Movie Collection</h1>
        <p>Discover and manage your favorite movies</p>
      </header>

      <main className="app-main">
        <div className="sidebar">
          <AddMovie onAddMovie={handleAddMovie} />
          <Filter
            titleFilter={titleFilter}
            setTitleFilter={setTitleFilter}
            ratingFilter={ratingFilter}
            setRatingFilter={setRatingFilter}
          />
        </div>

        <div className="content">
          <div className="movies-header">
            <h2>Movies ({filteredMovies.length})</h2>
          </div>
          <MovieList movies={filteredMovies} />
        </div>
      </main>

      <footer className="app-footer">
        <p>Movie App - Built with React Hooks</p>
      </footer>
    </div>
  );
}

export default App;
