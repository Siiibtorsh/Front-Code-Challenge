import React, { useEffect, useRef, useCallback } from 'react';
import { useUsers } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserProvider } from '../../context/UserContext';

const UsersBody = () => {
   const { users, loading, error, hasMore, fetchUsers, loadMore } = useUsers();
   const navigate = useNavigate();
   const observer = useRef();
   const { isAuthenticated } = useAuth();

   useEffect(() => {
      if (!isAuthenticated) {
         navigate('/auth/login');
         return;
      }
      fetchUsers();
   }, [isAuthenticated, navigate, fetchUsers]);

   const lastUserElementRef = useCallback(node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
         if (entries[0].isIntersecting && hasMore) {
            loadMore();
         }
      });
      if (node) observer.current.observe(node);
   }, [loading, hasMore, loadMore]);

   const getAvatarUrl = (gender, avatarId) => {
      return `/avatars/${gender.toLowerCase()}/${avatarId}.png`;
   };

   if (error) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gradient-radial from-sibtorsh-50 via-white to-white">
            <div className="text-red-600 text-xl bg-red-50 px-6 py-4 rounded-lg shadow">خطا: {error}</div>
         </div>
      );
   }

   return (
      <UserProvider>
         <div className="min-h-screen bg-gradient-radial from-sibtorsh-50 via-white to-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between mb-12">
                  <h1 className="text-4xl font-extrabold text-gray-900">لیست کاربران سیب ترش</h1>
                  <img className="h-16 w-auto" src="/sibtorsh-logo.svg" alt="سیب ترش" />
               </div>
               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                  {users.map((user, index) => (
                     <div
                        ref={index === users.length - 1 ? lastUserElementRef : null}
                        key={user.id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                     >
                        <div className="relative aspect-square">
                           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 group-hover:to-black/70 transition-all duration-300" />
                           <img
                              src={getAvatarUrl(user.gender, user.avatar)}
                              alt={`${user.firstName} ${user.lastName}`}
                              className="w-full h-full object-cover"
                           />
                           <div className="absolute bottom-0 right-0 p-3 text-white">
                              <h2 className="text-lg font-bold leading-tight">
                                 {user.firstName}<br />{user.lastName}
                              </h2>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               {loading && (
                  <div className="flex justify-center mt-12">
                     <div className="relative">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-sibtorsh-200 border-t-sibtorsh-600"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <img src="/sibtorsh-logo.svg" alt="loading" className="w-8 h-8" />
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </UserProvider>
   );
};

export default UsersBody;
