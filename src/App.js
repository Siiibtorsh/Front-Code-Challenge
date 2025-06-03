import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth/login" Component={Login} />
        <Route path="/dashboard/users" Component={Users} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
