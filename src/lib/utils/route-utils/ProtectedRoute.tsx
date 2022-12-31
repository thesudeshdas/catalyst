import { withAuthenticationRequired } from '@auth0/auth0-react';
import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const Component = withAuthenticationRequired(Outlet);

  return <Component />;
}
