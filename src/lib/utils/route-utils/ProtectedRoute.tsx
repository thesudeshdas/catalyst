import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

export default function ProtectedRoute() {
  const [user, setUser] = useState(null);
  const [authStatus, setAuthStatus] = useState(false);

  return !user ? <Navigate to='/' replace={true} /> : <Outlet />;
}
