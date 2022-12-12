import React from 'react';
import { useDispatch } from 'react-redux';
import FlexBox from '../../components/FlexBox';
import { modifyUser } from '../../slices/user';

import './styles.css';

export default function ModifyUser() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const { userId, firstName, lastName, zipCode } = e.currentTarget.elements;
    dispatch(
      modifyUser({
        modifyIndex: userId.value,
        modifiedUser: {
          firstName: firstName.value,
          lastName: lastName.value,
          zipCode: zipCode.value,
        },
      }),
    );
  };

  return (
    <FlexBox style={{ width: '20%' }}>
      <form onSubmit={handleSubmit}>
        <label>
          User id to modify
          <input id="userId" />
        </label>
        <label>
          First Name
          <input id="firstName" />
        </label>
        <label>
          Last Name
          <input id="lastName" />
        </label>
        <label>
          Zip Code
          <input id="zipCode" />
        </label>

        <button type="submit">Modify User</button>
      </form>
    </FlexBox>
  );
}
