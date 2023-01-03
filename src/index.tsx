import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  PageCallback,
  PageFeed,
  PageHome,
  PageProfile,
  PageSignIn,
  PageSignUp,
} from './pages';
import { store } from './app/store';
import { Provider } from 'react-redux';
import theme from './themes/index';
import ProtectedRoute from './lib/utils/route-utils/ProtectedRoute';
import { Layout } from './components';

const root = createRoot(document.getElementById('root')!);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [{ path: '/profile', element: <PageProfile /> }],
      },
      // { path: '/profile', element: <PageProfile /> },
      {
        path: '/callback',
        element: <PageCallback />,
      },
      {
        path: '/',
        element: <PageHome />,
      },
      {
        path: '/feed',
        element: <PageFeed />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <PageSignIn />,
  },
  {
    path: '/sign-up',
    element: <PageSignUp />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
