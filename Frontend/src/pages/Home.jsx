function Home({ user }) {

  return (

    <div className="logged-user">

      <h2>
        Bem-vindo, {user.name}
      </h2>

      <p>
        Status: Online
      </p>

    </div>

  );

}

export default Home;