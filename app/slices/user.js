import { createSlice } from '@reduxjs/toolkit';

export const addUserReducer = (state, action) => [...state, action.payload];
export const deleteUserReducer = (state, action) => {
  const newState = [...state];

  delete newState[action.payload];

  return newState;
};

export const modifyUserReducer = (state, action) => {
  const newState = [...state];

  const { modifyIndex, modifiedUser } = action.payload;

  const userToModify = { ...newState[modifyIndex] };

  Object.keys(modifiedUser).forEach(key => {
    if (modifiedUser[key].trim()) {
      userToModify[key] = modifiedUser[key];
    }
  });

  newState[modifyIndex] = userToModify;

  return newState;
};

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser: addUserReducer,
    deleteUser: deleteUserReducer,
    modifyUser: modifyUserReducer,
  },
});

export const { addUser, deleteUser, modifyUser } = userSlice.actions;
export default userSlice.reducer;
