import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import {
  postUserDetails,
  getUserDetails,
  updateUserDetails,
  deleteUserDetails,
} from './crudAction';

const initialState = {
  userDataList: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    deleteCrudList: (state, { payload }) => {
      state.userDataList = state.userDataList.filter(
        (item) => item.id !== payload.id
      );
    },
  },
  extraReducers: (builder) => {
    const handleAsyncAction = (
      actionType,
      stateUpdateFn,
      successMessage,
      errorMessage
    ) => {
      builder
        .addCase(actionType.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(actionType.fulfilled, (state, action) => {
          state.status = 'succeeded';
          stateUpdateFn(state, action.payload);
          if (successMessage) {
            toast.success(successMessage, {
              toastId: `${actionType.typePrefix}Success`,
              autoClose: 3000,
            });
          }
        })
        .addCase(actionType.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
          if (errorMessage) {
            toast.error(errorMessage || action.error.message, {
              toastId: `${actionType.typePrefix}Error`,
              autoClose: 3000,
            });
          }
        });
    };

    handleAsyncAction(
      postUserDetails,
      (state, payload) => {
        state.userDataList.push(payload);
      },
      'New user added successfully!',
      'Failed to add new user. Please try again!'
    );

    handleAsyncAction(
      getUserDetails,
      (state, payload) => {
        state.userDataList = payload;
      },
      'User details fetched successfully!',
      'Failed to fetch user details. Please try again!'
    );

    handleAsyncAction(
      updateUserDetails,
      (state, payload) => {
        const itemIndex = state.userDataList.findIndex(
          (item) => item.id === payload.id
        );
        if (itemIndex !== -1) {
          state.userDataList[itemIndex] = payload;
        }
      },
      'User updated successfully!',
      'Failed to update user. Please try again!'
    );

    handleAsyncAction(
      deleteUserDetails,
      (state, payload) => {
        state.userDataList = state.userDataList.filter(
          (item) => item.id !== payload.id
        );
      },
      'User deleted successfully!',
      'Failed to delete user. Please try again!'
    );
  },
});

export const { addCrudList, deleteCrudList } = crudSlice.actions;
export default crudSlice.reducer;
