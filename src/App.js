import { Component } from 'react';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import shortId from 'shortid';
import './styles.css';
import './App.scss';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSearchChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const normalizedName = name.toLowerCase();

    // if (
    //   this.state.contacts.filter(
    //     contact => contact.name.toLowerCase() === normalizedName,
    //   ).length > 0
    // ) {
    //   return alert(`${name} is already in contacts.`);
    // }

    if (
      this.state.contacts.find(
        ({ name }) => name.toLowerCase() === normalizedName,
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: shortId.generate(), name, number },
      ],
    }));

    // /   /через concat
    // this.setState({
    //   contacts: contacts.concat({ id: shortId.generate(), name, number }),
    // });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App">
        <div className="container">
          <div className="phonebook">
            <h1>Phonebook</h1>

            <ContactForm onSubmit={this.formSubmitHandler} />

            <h2>Contacts</h2>

            <Filter
              value={this.state.filter}
              onChange={this.handleSearchChange}
            />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
