import { useContext, useEffect, useMemo, useState } from "react";
import eventService from './../../services/eventService';
import { EventCard } from './../../components/EventCard/index';
import {
  Container, Header, List, TitleContainer, SearchContainer,
  SearchInput, LoadingWrapper, ToastConfirmContainer
} from "./style";
import { Layout } from "../../components/Layout";
import { Search } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import { EventModalContext } from "../../context/EventModalContext";
import Fuse from "fuse.js";
import { EventModal } from "../../components/EventModal";
import toast from "react-hot-toast";

export function Eventos() {
  const { user } = useContext(AuthContext);
  const { openModal } = useContext(EventModalContext);
  const [eventos, setEventos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) carregarEventos();
  }, [user]);

  const eventosFiltrados = useMemo(() => {
    if (!search) return eventos;
    const fuse = new Fuse(eventos, {
      keys: ["nome", "cidade", "bairro", "uf"],
      threshold: 0.6,
    });
    return fuse.search(search).map(resposta => resposta.item);
  }, [search, eventos]);

  async function carregarEventos() {
    try {
      setLoading(true);
      const response = await eventService.listar(user.id);
      setEventos(response.data);
    } catch (error) {
      toast.error("Não foi possível carregar os eventos.");
    } finally {
      setLoading(false);
    }
  }

  async function confirmarExclusao(id, toastId) {
    toast.dismiss(toastId);
    const loadingToast = toast.loading("Removendo evento...");
    try {
      await eventService.deletar(id);
      setEventos(prev => prev.filter(e => e.id !== id));
      toast.success("Evento removido com sucesso!", { id: loadingToast });
    } catch (error) {
      toast.error("Erro ao deletar evento.", { id: loadingToast });
    }
  }

  function handleDelete(id) {
    toast((t) => (
      <ToastConfirmContainer>
        <span>Excluir este evento?</span>
        <button className="confirm-btn" onClick={() => confirmarExclusao(id, t.id)}>Sim</button>
        <button className="cancel-btn" onClick={() => toast.dismiss(t.id)}>Não</button>
      </ToastConfirmContainer>
    ), { duration: 5000 });
  }

  return (
    <Layout>
      <Container>
        <Header>
          <TitleContainer>
            <h2>Meus Eventos</h2>
            <p>Gerencie suas programações e atividades</p>
          </TitleContainer>

          <SearchContainer>
            <Search size={18} color="#717171" />
            <SearchInput
              type="text"
              placeholder="Buscar por nome ou local..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchContainer>
        </Header>

        {loading ? (
          <LoadingWrapper>
            <div className="loader" />
            <p>Carregando eventos...</p>
          </LoadingWrapper>
        ) : (
          <List>
            {eventosFiltrados.map(evento => (
              <EventCard
                key={evento.id}
                evento={evento}
                onEdit={() => openModal(evento)}
                onDelete={() => handleDelete(evento.id)}
              />
            ))}
          </List>
        )}
        <EventModal onSaveSuccess={carregarEventos} />
      </Container>
    </Layout>
  );
}