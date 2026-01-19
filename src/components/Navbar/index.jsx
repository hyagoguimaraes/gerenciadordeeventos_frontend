import { useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';
import { Nav, Container, Logo, NavMenu, UserActions, LogoutButton } from "./style";
import { Home, Calendar, PlusCircle, LogOut, User, Sparkles } from "lucide-react";
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
    if (window.location.pathname !== '/eventos') {
      navigate('/eventos');
    }
    setTimeout(() => openModal(), 150);
  }

  return (
    <Nav>
      <Container>
        <Logo onClick={() => navigate("/home")}>
          <Sparkles size={28} strokeWidth={2.5} />
          VibeCheck
        </Logo>

        <NavMenu>
          <NavLink to="/home">
            <Home size={20} /> Home
          </NavLink>
          <NavLink to="/eventos">
            <Calendar size={20} /> Meus Eventos
          </NavLink>
          <a href="#" onClick={handleNewEventClick}>
            <PlusCircle size={20} /> <span>Novo Evento</span>
          </a>
        </NavMenu>

        <UserActions>
          <div className="user-badge">
            <User size={18} />
            <span>{user?.nome || 'Usuário'}</span>
          </div>
          <LogoutButton onClick={handleLogout} data-tooltip="Sair da Conta">
            <LogOut size={18} />
          </LogoutButton>
        </UserActions>
      </Container>
    </Nav>
  )
}