import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';

export default function ProtectedRoute() {
  const authStatus = useAppSelector((state) => state.auth.signInStatus);

  return !authStatus ? <Navigate to='/sign-in' replace={true} /> : <Outlet />;
}
