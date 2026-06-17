import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Login() {

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const loginSubmit = async (data) => {

    try {

      const response = await api.post("/users/login",
        {
          email: data.email,
          password: data.password
        }
      );

      toast.success("Login realizado com sucesso");

      login(response.data.user);

      reset();

    } catch (error) {

      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro de comunicação com servidor");
      }

    }

  };

  return (
    <form onSubmit={handleSubmit(loginSubmit)}>

      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email obrigatório"
        })}
      />

      <p>{errors.email?.message}</p>

      <input
        type="password"
        placeholder="Senha"
        {...register("password", {
          required: "Senha obrigatória"
        })}
      />

      <p>{errors.password?.message}</p>

      <button type="submit">
        Entrar
      </button>

    </form>
  );
}

export default Login;