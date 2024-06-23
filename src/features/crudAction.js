import { createAsyncThunk } from '@reduxjs/toolkit';

export const postUserDetails = createAsyncThunk(
  'crud/postUserDetails',
  async (user) => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Failed to add new user. Please try again !');
    }

    const data = await response.json();
    return data;
  }
);

export const getUserDetails = createAsyncThunk(
  'crud/getUserDetails',
  async () => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  }
);
export const updateUserDetails = createAsyncThunk(
  'crud/updateUserDetails',
  async (user) => {
    const response = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  }
);

export const deleteUserDetails = createAsyncThunk(
  'crud/deleteUserDetails',
  async (user) => {
    const response = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  }
);
