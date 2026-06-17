import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../services/api";

function Cadastro() {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {

    try {

      const response = await api.post("/users/register",
        {
          name: data.name,
          email: data.email,
          password: data.password
        }
      );

      alert(response.data.message);
      reset();

    } catch (error) {

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro de comunicação com servidor");
      }

    }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        type="text"
        placeholder="Nome"
        {...register("name", {
          required: "Nome é obrigatório"
        })}
      />

      <p>{errors.name?.message}</p>

      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email obrigatório",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email inválido"
          }
        })}
      />

      <p>{errors.email?.message}</p>

      <input
        type="password"
        placeholder="Senha"
        {...register("password", {
          required: "Senha obrigatória",
          minLength: {
            value: 6,
            message: "Mínimo 6 caracteres"
          }
        })}
      />

      <p>{errors.password?.message}</p>

      <input
        type="password"
        placeholder="Confirmar Senha"
        {...register("confirmPassword", {
          required: "Confirme a senha",
          validate: value =>
            value === watch("password")
              || "As senhas não coincidem"
        })}
      />

      <p>{errors.confirmPassword?.message}</p>

      <button type="submit">
        Cadastrar
      </button>

    </form>
  );
}

export default Cadastro;