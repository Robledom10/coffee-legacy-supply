import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Navbar() {
  const { usuario, logout } = useAuth();
  return (
    <nav>
      {usuario ? (
        <>
          Bienvenido, {usuario.nombre} |{" "}
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/registro">Registro</Link>
        </>
      )}
    </nav>
  );
}
