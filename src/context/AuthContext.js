import React, { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(false)

   const login = useCallback(async (credentials) => {
      setIsLoading(true)
      try {
         await new Promise(resolve => setTimeout(resolve, 1000));
         setIsAuthenticated(true);
         return true;
      } catch (err) {
         setError(err.message);
         return false;
      } finally {
         setIsLoading(false)
      }
   }, []);

   const logout = useCallback(() => {
      setIsAuthenticated(false);
   }, []);

   return (
      <AuthContext.Provider value={{
         isAuthenticated,
         error,
         login,
         logout,
         loggingIn: isLoading
      }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
   }
   return context;
};

export default AuthContext;
