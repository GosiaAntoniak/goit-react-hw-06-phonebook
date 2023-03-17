import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = (props) => {
  const {deleteFunction, contact} = props;

  return (
    <li>
      {contact.name} : {contact.number}{' '}
      <button id={contact.id} onClick={deleteFunction}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  deleteFunction: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
};

export default ContactListItem;
