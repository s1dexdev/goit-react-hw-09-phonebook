import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import AppBar from './components/UserMenu/AppBar';
import PrivateRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';
import styles from './App.module.css';

const HomeView = lazy(() => import('./components/views/HomeView'));
const LoginView = lazy(() => import('./components/views/LoginView'));
const RegisterView = lazy(() => import('./components/views/RegisterView'));
const ContactsView = lazy(() => import('./components/views/ContactsView'));

const App = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute path="/register" restricted component={RegisterView} />
          <PublicRoute path="/login" restricted component={LoginView} />
          <PrivateRoute path="/contacts" component={ContactsView} />
          <Route component={HomeView} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
