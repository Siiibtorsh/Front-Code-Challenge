import { createBrowserRouter, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import React from 'react';
import Login from '../pages/Auth/Login';
import Users from '../pages/Users';

const ProtectedRoute = ({ children }) => {
   const { isAuthenticated } = useAuth();

   if (!isAuthenticated) {
      return <Navigate to="/auth/login" replace />;
   }

   return children;
};

const routes = createBrowserRouter([
   {
      path: '/',
      element: <Navigate to="/auth/login" replace />
   },
   {
      path: '/auth/login',
      element: <Login />
   },
   {
      path: '/dashboard/users',
      element: (
         <Users />
      )
   },
   {
      path: '*',
      element: <Navigate to="/" replace />
   }
]);

export default routes;
