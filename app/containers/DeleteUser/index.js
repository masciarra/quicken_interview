/*
 * UserForm
 *
 * User input
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import FlexBox from '../../components/FlexBox';
import { deleteUser } from '../../slices/user';

export default function DeleteUser() {
  const dispatch = useDispatch();

  return (
    <FlexBox style={{ width: '20%' }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(deleteUser(e.currentTarget.elements.userId.value));
        }}
      >
        <label>
          User id to delete
          <input id="userId" />
        </label>
        <button type="submit">Delete User</button>
      </form>
    </FlexBox>
  );
}
