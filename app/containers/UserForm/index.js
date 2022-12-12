import React from 'react';
import { useDispatch } from 'react-redux';
import FlexBox from '../../components/FlexBox';
import { addUser } from '../../slices/user';
import './styles.css';

export default function UserForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, zipCode } = e.currentTarget.elements;
    dispatch(
      addUser({
        firstName: firstName.value,
        lastName: lastName.value,
        zipCode: zipCode.value,
      }),
    );
  };

  return (
    <FlexBox style={{ width: '20%' }}>
      <form onSubmit={handleFormSubmit}>
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
        <button type="submit">Add User</button>
      </form>
    </FlexBox>
  );
}
