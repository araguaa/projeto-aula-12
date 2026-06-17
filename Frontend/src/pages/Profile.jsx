import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../services/api";

function Profile() {

  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {

  try {
    const response =
      await api.put(
        "/users/change-password",
        {
          email: user.email,
          password: data.password
        }
      );

    alert(response.data.message);

  } catch (error) {

    if (error.response) {
      alert(
        error.response.data.message
      );

    } else {
      alert(
        "Erro de comunicação com servidor"
      );
    }
  }
};

  return (

    <div className="logged-user">

      <h2>Meu Perfil</h2>

      <p>
        Nome: {user.name}
      </p>

      <p>
        Email: {user.email}
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
            type="password"
            placeholder="Nova senha"
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
            placeholder="Confirmar senha"
            {...register("confirmPassword", {
            required: "Confirme a senha",
            validate: value =>
                value === watch("password")
                || "As senhas não coincidem"
            })}
        />

        <p>
            {errors.confirmPassword?.message}
        </p>

        <button type="submit">
            Alterar Senha
        </button>

        </form>

    </div>
    
  );

}

export default Profile;