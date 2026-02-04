import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 5
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? Number(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title.trim() || !formData.description.trim() || !formData.posterURL.trim()) {
      alert('Please fill in all fields');
      return;
    }

    onAddMovie({
      ...formData,
      id: Date.now() // Generate unique ID
    });

    // Reset form
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: 5
    });
    setIsFormVisible(false);
  };

  return (
    <div className="add-movie-container">
      {!isFormVisible ? (
        <button 
          className="add-movie-btn"
          onClick={() => setIsFormVisible(true)}
        >
          + Add New Movie
        </button>
      ) : (
        <form className="add-movie-form" onSubmit={handleSubmit}>
          <h3>Add New Movie</h3>
          
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter movie title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter movie description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="posterURL">Poster URL:</label>
            <input
              type="url"
              id="posterURL"
              name="posterURL"
              placeholder="Enter poster image URL"
              value={formData.posterURL}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">Add Movie</button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => setIsFormVisible(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddMovie;
