import * as React from 'react';
import './user-form.style.scss';

const UserForm = ({onChange, user}) => {

  function handleFirstNameChange(e) {
    onChange('firstName', e.target.value);
  }

  function handleLastNameChange(e) {
    onChange('lastName', e.target.value);
  }

  return (
    <div className="user-form-container">
      <input placeholder='First name' type="text" value={ user.firstName } onChange={handleFirstNameChange} />
      <input placeholder='Last name' type="text" value={ user.lastName } onChange={handleLastNameChange} />
    </div>
  );
};

export default UserForm;
