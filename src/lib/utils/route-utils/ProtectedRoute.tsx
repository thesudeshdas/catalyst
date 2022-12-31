import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const authStatus = true;

  return authStatus ? <Outlet /> : <Navigate to='/sign-in' replace={true} />;
}
