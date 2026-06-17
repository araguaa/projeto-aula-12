import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";
import ListaUsuarios from "./components/ListaUsuarios";
import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import Profile from "./pages/Profile";

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div>

      <Navbar
        user={user}
        logout={logout}
      />

      <div className="hero">

        <div className="overlay">

          <div className="content">

            <h1>
              Sistema de Autenticação
            </h1>

            <p>
              Cadastro e Login com React,
              Axios, Node.js e SQLite.
            </p>

            {
              !user ? (

                <>
                  <button
                    className="switch-btn"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {
                      isLogin
                        ? "Cadastre-se"
                        : "Login"
                    }
                  </button>

                  {
                    isLogin
                      ? <Login  />
                      : <Cadastro />
                  }
                </>

              ) : (

                <Routes>

                  <Route
                    path="/"
                    element={
                      <Home user={user} />
                    }
                  />

                  <Route
                    path="/usuarios"
                    element={
                      <Usuarios />
                    }
                  />

                  <Route
                    path="/profile"
                    element={
                      <Profile />
                    }
                  />

                </Routes>

              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

  export default App;