import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

export default function UserTable() {
  const users = useSelector(state => state.user);

  return (
    <table
      style={{
        marginLeft: '10%',
        marginRight: '10%',
        width: '80%',
        marginTop: 40,
      }}
    >
      <tbody>
        {users.length > 0 && (
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Zip Code</th>
          </tr>
        )}
        {users.map((user, index) => {
          if (user) {
            const { firstName, lastName, zipCode } = user;
            return (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={index}>
                <td>{index}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{zipCode}</td>
              </tr>
            );
          }
          return <></>;
        })}
      </tbody>
    </table>
  );
}
