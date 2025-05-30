import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";

function App() {
  // config React Router
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to /auth/login in startup */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        {/* Auth */}
        <Route path="/auth/login" element={<LoginPage />} />
        {/* Dashboard */}
        <Route path="/dashboard/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
