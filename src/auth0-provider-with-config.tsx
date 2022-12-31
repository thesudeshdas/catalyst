import { Auth0Provider } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

interface Auth0ProviderWithConfigProps {
  children: React.ReactNode;
}

export const Auth0ProviderWithConfig = (): JSX.Element | null => {
  const navigate = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || '/', { replace: true });
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      <Outlet />
    </Auth0Provider>
  );
};
