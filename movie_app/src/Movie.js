import React from 'react';
import PropTypes from "prop-types";

const Movie = ({id, title, year, summary, poster}) => {
  return (
    <div>
      <h5>{id} </h5>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
