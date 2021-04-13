import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
