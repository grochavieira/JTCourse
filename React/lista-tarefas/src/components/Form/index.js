import React from "react";
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

import "./Form.css";

export default function Form({ handleSubmit, handleInput, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input onChange={handleInput} value={novaTarefa} type="text" />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
