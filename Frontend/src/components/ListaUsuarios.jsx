import { useEffect, useState } from "react";
import axios from "axios";

function ListaUsuarios() {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {

    buscarUsuarios(page);

  }, [page]);

  const buscarUsuarios = async (currentPage) => {

    try {

      const response = await axios.get(
        `http://localhost:3000/users?page=${currentPage}&limit=5`
      );

      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="user-list">

      <h2>Usuários Cadastrados</h2>

      {
        users.map((user) => (

          <div
            key={user.id}
            className="user-card"
          >
            <strong>{user.name}</strong>

            <p>{user.email}</p>

          </div>

        ))
      }

      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </button>

        <span>
          Página {page} de {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Próxima
        </button>

      </div>

    </div>

  );

}

export default ListaUsuarios;