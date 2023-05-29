import { Link } from "react-router-dom";

export const LoginToRegister = () => {
  return (
    <div>
      <span>
        Crie sua conta!
      </span>
      <Link to="/register">Cadastrar</Link>
    </div>
  );
};