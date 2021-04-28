import { Component } from 'react';
import shortId from 'shortid';
import './ContactForm.scss';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortId.generate();
  phoneInputId = shortId.generate();

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handlePhoneChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-label" htmlFor={this.nameInputId}>
          <span className="form-label-title">Name</span>
          <input
            className="input"
            type="text"
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleNameChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className="form-label" htmlFor={this.phoneInputId}>
          <span className="form-label-title">Number</span>
          <input
            className="input"
            type="tel"
            id={this.phoneInputId}
            value={this.state.number}
            name="number"
            onChange={this.handlePhoneChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button className="form-button button" type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
