import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './main.module.css';

const RegisterView = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (name, email, password) => {
    dispatch(authOperations.register({ name, email, password }));
  };

  const resetForm = () => {
    setUserName('');
    setUserEmail('');
    setUserPassword('');
  };

  const handleChange = event => {
    const value = event.currentTarget.value;
    const inputName = event.currentTarget.name;

    switch (inputName) {
      case 'userName':
        setUserName(value);
        break;
      case 'userEmail':
        setUserEmail(value);
        break;
      case 'userPassword':
        setUserPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(userName, userEmail, userPassword);
    resetForm();
  };

  return (
    <form
      className={styles.form}
      name="login_form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className={styles.labelBox}>
        <label htmlFor="user-name">Name</label>
        <label htmlFor="user-email">Email</label>
        <label htmlFor="user-pass">Password</label>
      </div>
      <div className={styles.inputBox}>
        <input
          id="user-name"
          type="name"
          name="userName"
          value={userName}
          onChange={handleChange}
        />
        <input
          id="user-email"
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={handleChange}
        />
        <input
          id="user-pass"
          type="password"
          name="userPassword"
          value={userPassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default RegisterView;
