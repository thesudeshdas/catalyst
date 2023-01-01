import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { useAppSelector } from '../../../app/hooks';

export default function ProtectedRoute() {
  const authStatus = useAppSelector((state) => state.auth.status);

  return !authStatus ? <Navigate to='/sign-in' replace={true} /> : <Outlet />;
}
