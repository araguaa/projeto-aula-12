function Navbar({ user, logout }) {
  return (
    <nav className="navbar">

      <div className="logo">
        AuthSystem
      </div>


      <div>

        {user ? (
          <>
            <span className="user-name">
              {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Sair
            </button>
          </>
        ) : (
          <span>Visitante</span>
        )}

      </div>

    </nav>
  );
}

export default Navbar;