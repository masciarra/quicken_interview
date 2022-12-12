/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import FlexBox from '../../components/FlexBox';
import DeleteUser from '../DeleteUser';
import ModifyUser from '../ModifyUser';
import UserForm from '../UserForm';
import UserTable from '../UserTable';

import './styles.css';

export default function HomePage() {
  return (
    <>
      <FlexBox className="formContainer">
        <UserForm />
        <ModifyUser />
        <DeleteUser />
      </FlexBox>
      <UserTable />
    </>
  );
}
