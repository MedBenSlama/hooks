import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterURL} alt={title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-description">{description}</p>
        <div className="movie-rating">
          <span className="rating-label">Rating: </span>
          <span className="stars">{renderStars(rating)}</span>
          <span className="rating-number">({rating}/5)</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
