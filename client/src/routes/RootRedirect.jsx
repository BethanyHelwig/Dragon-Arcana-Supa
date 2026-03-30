import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom'; 

// If an unauthenticated user attempts to access a restricted route,
// they are redirected to the login page;
// If they are authenticated, they are redirected to the dashboard
const RootRedirect = () => {
  const { session } = useAuth();

  if (session === undefined) {
    return <div>Loading...</div>;
  }

  return session ? <Navigate to="/dashboard" /> : <Navigate to="/login" />; 
};

export default RootRedirect;