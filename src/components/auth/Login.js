import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginBody = () => {
   const [credentials, setCredentials] = useState({ username: '', password: '' });
   const { login, loggingIn } = useAuth();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const success = await login(credentials);
      if (success) {
         navigate('/dashboard/users');
      }
   };

   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-radial from-sibtorsh-50 via-white to-white py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
               <img className="mx-auto h-32 w-auto animate-pulse" src="/sibtorsh-logo.svg" alt="سیب ترش" />
               <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  به سیب ترش خوش آمدید
               </h2>
               <p className="mt-2 text-sm text-gray-600">
                  برای ورود به پنل کاربری، اطلاعات خود را وارد کنید
               </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
               <div className="rounded-md space-y-4">
                  <div>
                     <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        نام کاربری
                     </label>
                     <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sibtorsh-500 focus:border-transparent transition-all duration-200 text-right direction-rtl"
                        placeholder="نام کاربری خود را وارد کنید"
                        value={credentials.username}
                        onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                     />
                  </div>
                  <div>
                     <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        رمز عبور
                     </label>
                     <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sibtorsh-500 focus:border-transparent transition-all duration-200 text-right direction-rtl"
                        placeholder="رمز عبور خود را وارد کنید"
                        value={credentials.password}
                        onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                     />
                  </div>
               </div>

               <div>
                  <button
                     disabled={loggingIn}
                     type="submit"
                     className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-sibtorsh-600 to-sibtorsh-500 hover:from-sibtorsh-700 hover:to-sibtorsh-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sibtorsh-500 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-75"
                  >
                     <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg className="h-5 w-5 text-sibtorsh-200 group-hover:text-sibtorsh-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                           <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                        </svg>
                     </span>
                     {loggingIn ? 'ورود ...' : 'ورود به پنل کاربری'}
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default LoginBody;
