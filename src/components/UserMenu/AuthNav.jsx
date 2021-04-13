import { NavLink } from 'react-router-dom';
import styles from './main.module.css';

const AuthNav = () => (
  <div className={styles.nav}>
    <NavLink
      className={styles.link}
      activeClassName={styles.activeLink}
      to="/login"
    >
      Log in
    </NavLink>
    <NavLink
      className={styles.link}
      activeClassName={styles.activeLink}
      to="/register"
    >
      Sign up
    </NavLink>
  </div>
);

export default AuthNav;
