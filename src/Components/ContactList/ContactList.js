import React from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

const ContactList = (props) => {
  const { contacts, filter, deleteFunction } = props;

  return (
    <ul>
      {contacts
        .filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map((contact) => {
          return (
            <ContactListItem key={contact.id} deleteFunction={deleteFunction} contact={contact}>
            </ContactListItem>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};

export default ContactList;
