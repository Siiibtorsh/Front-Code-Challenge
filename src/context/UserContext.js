import React, { createContext, useContext, useState, useCallback } from 'react';
import { fetchUsers } from '../services/userService';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [page, setPage] = useState(1);
   const [hasMore, setHasMore] = useState(true);

   const _fetchUsers = useCallback(async () => {
      try {
         setLoading(true);
         setError(null);
         const limit = 20;
         const response = await fetchUsers(page, limit);
         setUsers(prevUsers => page === 1 ? response : [...prevUsers, ...response]);
         setHasMore(response.length === limit);
      } catch (err) {
         setError(err.message);
      } finally {
         setLoading(false);
      }
   }, [page]);

   const loadMore = useCallback(() => {
      if (!loading && hasMore) {
         setPage(prevPage => prevPage + 1);
      }
   }, [loading, hasMore]);

   return (
      <UserContext.Provider value={{
         users,
         loading,
         error,
         hasMore,
         fetchUsers: _fetchUsers,
         loadMore
      }}>
         {children}
      </UserContext.Provider>
   );
};

export const useUsers = () => {
   const context = useContext(UserContext);
   if (!context) {
      throw new Error('useUsers must be used within a UserProvider');
   }
   return context;
};

export default UserContext;
