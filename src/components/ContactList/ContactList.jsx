import ContactListItem from './ContactListItem';
import './ContactList.scss';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="contact-list">
    {contacts.map(contact => (
      <ContactListItem
        id={contact.id}
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
