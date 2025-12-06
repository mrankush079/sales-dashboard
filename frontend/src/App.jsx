// src/App.jsx
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

export default function App() {
  const { user } = useAuth();
  const [screen, setScreen] = useState("login");

  if (!user) {
    return screen === "login" ? (
      <Login switchToRegister={() => setScreen("register")} />
    ) : (
      <Register switchToLogin={() => setScreen("login")} />
    );
  }

  return <Dashboard />;
}
