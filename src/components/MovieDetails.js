import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-details-page">
        <h2>Movie Not Found</h2>
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="movie-details-page">
      <Link to="/" className="back-btn">← Back to Home</Link>

      <div className="movie-details">
        <div className="movie-details-poster">
          <img src={movie.posterURL} alt={movie.title} />
        </div>

        <div className="movie-details-content">
          <h1>{movie.title}</h1>
          <p className="rating">⭐ {movie.rating}/5</p>
          <p className="description">{movie.description}</p>

          {movie.trailerURL && (
            <div className="trailer-container">
              <h3>Trailer</h3>
              <iframe
                src={movie.trailerURL}
                title={`${movie.title} Trailer`}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
