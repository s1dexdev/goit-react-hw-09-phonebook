import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './main.module.css';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

  return (
    <div className={styles.navigation}>
      <NavLink
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          className={styles.link}
          activeClassName={styles.activeLink}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
