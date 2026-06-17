import { Link } from "react-router-dom";

function Navbar({ user, logout }) {

  return (
    <nav className="navbar">

      <div className="nav-left">

        <Link
          to="/"
          className="logo"
        >
          AuthSystem
        </Link>

        {
          user && (

            <div className="nav-links">

              <Link to="/usuarios">
                Usuários
              </Link>

            </div>

          )
        }

      </div>

      <div>

        {
          user ? (
            <>

              <Link
                to="/profile"
                className="user-name"
              >
                {user.name}
              </Link>

              <button
                className="logout-btn"
                onClick={logout}
              >
                Sair
              </button>

            </>
          ) : (
            <span>Visitante</span>
          )
        }

      </div>

    </nav>
  );

}

export default Navbar;