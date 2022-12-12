import {
  addUserReducer,
  deleteUserReducer,
  modifyUserReducer,
} from '../slices/user';

describe('addUserReducer', () => {
  let state;
  beforeEach(() => {
    state = [];
  });

  it('should add a user to an empty state from payload', () => {
    const newState = addUserReducer(state, {
      payload: {
        firstName: 'John',
        lastName: 'Smith',
        zipCode: '12345',
      },
    });

    expect(newState[0].firstName).toEqual('John');
    expect(newState[0].lastName).toEqual('Smith');
    expect(newState[0].zipCode).toEqual('12345');
  });

  it('should add a user to an already populated state', () => {
    state.push({
      firstName: 'Mary',
      lastName: 'Doe',
      zipCode: '54321',
    });

    const newState = addUserReducer(state, {
      payload: {
        firstName: 'John',
        lastName: 'Smith',
        zipCode: '12345',
      },
    });

    expect(newState[0].firstName).toEqual('Mary');
    expect(newState[0].lastName).toEqual('Doe');
    expect(newState[0].zipCode).toEqual('54321');

    expect(newState[1].firstName).toEqual('John');
    expect(newState[1].lastName).toEqual('Smith');
    expect(newState[1].zipCode).toEqual('12345');
  });
});

describe('deleteUserReducer', () => {
  let state;

  beforeEach(() => {
    state = [
      {
        firstName: 'Mary',
        lastName: 'Doe',
        zipCode: '54321',
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        zipCode: '12345',
      },
    ];
  });

  it('should delete a user from state if there is only one user', () => {
    state = [state[0]];
    expect(state.length).toEqual(1);
    const newState = deleteUserReducer(state, { payload: 0 });

    expect(newState[0]).toEqual(undefined);
  });

  it('should delete a user from state if there are multiple users and preserve the indices', () => {
    const newState = deleteUserReducer(state, { payload: 0 });

    expect(newState[0]).toEqual(undefined);
    expect(newState[1].firstName).toEqual('John');
  });
});

describe('modifyUserReducer', () => {
  let state;

  beforeEach(() => {
    state = [
      {
        firstName: 'Mary',
        lastName: 'Doe',
        zipCode: '54321',
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        zipCode: '12345',
      },
    ];
  });

  it('should be able modify any of the properties of a user object in state', () => {
    const modifiedUser = {
      firstName: 'John',
      lastName: '',
      zipCode: '12345',
    };

    const newState = modifyUserReducer(state, {
      payload: {
        modifyIndex: 0,
        modifiedUser,
      },
    });

    expect(newState[0]).toEqual({ ...modifiedUser, lastName: 'Doe' });
  });
});
