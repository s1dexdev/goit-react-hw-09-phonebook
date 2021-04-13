import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './main.module.css';

const LoginView = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();

  const onLogin = (email, password) => {
    dispatch(authOperations.logIn({ email, password }));
  };

  const handleChange = event => {
    const value = event.currentTarget.value;
    const inputName = event.currentTarget.name;

    switch (inputName) {
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

  const resetForm = () => {
    setUserEmail('');
    setUserPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    onLogin(userEmail, userPassword);
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
        <label htmlFor="user-email">Email</label>
        <label htmlFor="user-pass">Password</label>
      </div>
      <div className={styles.inputBox}>
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
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginView;
