import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import styles from './main.module.css';

const UserMenu = () => {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div className={styles.nav}>
      <p className={styles.navUserEmail}>{userEmail}</p>
      <button className={styles.navBtn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
