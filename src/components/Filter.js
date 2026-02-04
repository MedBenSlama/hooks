import React from 'react';

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div className="filter-container">
      <h3>Filter Movies</h3>
      <div className="filter-group">
        <label htmlFor="title-filter">Search by Title:</label>
        <input
          type="text"
          id="title-filter"
          placeholder="Enter movie title..."
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="rating-filter">Minimum Rating:</label>
        <select
          id="rating-filter"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(Number(e.target.value))}
        >
          <option value={0}>All Ratings</option>
          <option value={1}>1 Star & Above</option>
          <option value={2}>2 Stars & Above</option>
          <option value={3}>3 Stars & Above</option>
          <option value={4}>4 Stars & Above</option>
          <option value={5}>5 Stars Only</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
