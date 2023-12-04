import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { user, isAuthenticated, loading } = useAuth();
    console.log(user, isAuthenticated);

    if(loading) return <h1>Loading...</h1>

    if(!loading && !isAuthenticated && !user) return <Navigate to = '/login' replace />
  return <Outlet />;
}

export default ProtectedRoute
