import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;
const getItems = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  },
);

export default { getFilter, getItems, getVisibleContacts };
