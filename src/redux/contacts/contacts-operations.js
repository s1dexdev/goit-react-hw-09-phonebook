import Axios from 'axios';
import actions from './contacts-actions';

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  Axios.get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error.message)));
};

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  Axios.post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error.message)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  Axios.delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error.message)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
