import { useState, useEffect } from "react";

import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";

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

                <div className="logged-user">

                  <h2>
                    Bem-vindo, {user.name}
                  </h2>

                  <p>
                    Status: Online
                  </p>

                </div>

              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

  export default App;