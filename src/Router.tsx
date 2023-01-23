import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import { UserStorage } from "./UserContext";
import ProtectedRouter from "./components/Helper/protectedRouter";

export default function Routes() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <WrapperRoutes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route element={<ProtectedRouter />}>
            <Route path="conta/*" element={<User />} />
          </Route>
        </WrapperRoutes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
