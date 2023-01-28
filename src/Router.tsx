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
import Photo from "./components/Photo/Photo";
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/NotFound/NotFound";

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
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:user" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </WrapperRoutes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
