import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import { authSelectors } from '../../redux/auth';
import styles from './main.module.css';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
