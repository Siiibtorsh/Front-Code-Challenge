import React, { Suspense } from 'react';
import { useRoutes, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import Loading from './components/Loading';
import routes from './routes';
import './index.css';

function App() {
    return (
        <AuthProvider>
            <Suspense fallback={<Loading />}>
                <RouterProvider router={routes} />
            </Suspense>
        </AuthProvider>
    );
}

export default App;
