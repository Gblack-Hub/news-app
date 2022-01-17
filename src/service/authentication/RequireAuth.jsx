import { useLocation, Navigate } from 'react-router-dom';
import {useAuth} from './useAuth';

export default function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();
  
    if (!auth) {
      return <Navigate to="/auth/login" state={{ from: location }} />;
    }
  
    return children;
  }