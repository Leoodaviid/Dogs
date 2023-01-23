import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  const { login } = useContext(UserContext);

  if (login) return <Outlet />;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRouter;
