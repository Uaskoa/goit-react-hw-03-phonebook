import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <>
    <h3>Find contacts by name</h3>
    <input
      type="text"
      className="input"
      value={value}
      name="filter"
      onChange={onChange}
    ></input>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
