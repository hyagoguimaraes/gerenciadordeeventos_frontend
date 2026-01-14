import { useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../Context/AuthContext';
import { Nav, Container, Logo, NavMenu, UserActions, LogoutButton } from "./style";
import { Home, Calendar, PlusCircle, LogOut, User } from "lucide-react";
import { EventModalContext } from "../../context/EventModalContext";

export function Navbar() {
  const { logout, user } = useContext(AuthContext);
  const { openModal } = useContext(EventModalContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  function handleNewEventClick(event) {
    event.preventDefault();
    navigate('/eventos');
    setTimeout(() => openModal(), 100);
  }

  return (
    <Nav>
      <Container>
        <Logo onClick={() => navigate("/home")}>
          Eventos<span>Manager</span>
        </Logo>

        <NavMenu>
          <NavLink to="/home">
            <Home size={18} /> Home
          </NavLink>
          <NavLink to="/eventos">
            <Calendar size={18} /> Meus Eventos
          </NavLink>
          <a href="#" onClick={handleNewEventClick}>
            <PlusCircle size={18} /> Novo Evento
          </a>
        </NavMenu>

        <UserActions>
          <div className="user-badge">
            <User size={18} />
            <span>{user?.email?.split('@')[0]}</span>
          </div>
          <LogoutButton onClick={handleLogout} title="Sair">
            <LogOut size={18} />
          </LogoutButton>
        </UserActions>
      </Container>
    </Nav>
  )
}