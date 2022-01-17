import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./service/authentication/RequireAuth";
import Dashboard from "./pages/dashboard/Dashboard";
import News from "./pages/dashboard/news/News";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/news"
          element={
            <RequireAuth>
              <News />
            </RequireAuth>
          }
        />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
