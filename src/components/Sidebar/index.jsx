import { useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../Context/AuthContext';
import { Aside, Logo, LogoutButton, NavMenu, UserInfo } from "./style";
import { Home, Calendar, PlusCircle, LogOut, User } from "lucide-react";

export function Sidebar() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <Aside>
      <Logo>Eventos<span>Manager</span></Logo>

      <UserInfo>
        <User size={20} />
        <span>{user?.email?.split('@')[0]}</span>
      </UserInfo>

      <NavMenu>
        <NavLink to="/home">
          <Home size={20} /> Home
        </NavLink>
        <NavLink to="/eventos">
          <Calendar size={20} /> Meus Eventos
        </NavLink>
        <NavLink to="/cadastro">
          <PlusCircle size={20} /> Novo Evento
        </NavLink>
      </NavMenu>

      <LogoutButton onClick={handleLogout}>
        <LogOut size={20} />
        Sair
      </LogoutButton>
    </Aside>
  );
}