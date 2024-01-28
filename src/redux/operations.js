import { createAsyncThunk } from '@reduxjs/toolkit';
import { delContact, getContactById, getContacts, postContact } from 'services';

export const apiGetContacts = createAsyncThunk(
  'contacts/apiGetContacts',
  async (_, thankApi) => {
    try {
      const contacts = await getContacts();
      return contacts.data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetContactById = createAsyncThunk(
  'contacts/apiGetContactById',
  async (contactId, thankApi) => {
    try {
      const contact = await getContactById(contactId);
      return contact.data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

export const apiPostContact = createAsyncThunk(
  'contacts/apiPostContact',
  async (contactDetails, thankApi) => {
    try {
      const contacts = await postContact(contactDetails);
      return contacts.data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteContact = createAsyncThunk(
  'contacts/apiDeleteContact',
  async (contactId, thankApi) => {
    try {
      const contacts = await delContact(contactId);
      return contacts.data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);
