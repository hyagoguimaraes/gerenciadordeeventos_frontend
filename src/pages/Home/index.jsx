import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Layout } from "../../components/Layout";
import { HomeContainer, WelcomeSection, StatsGrid, SectionHeader, EventsGrid, EmptyStateText, LoadingWrapper, ToastConfirmContainer } from "./style";
import { Calendar, CheckCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import eventService from "../../services/eventService";
import { EventCard } from "../../components/EventCard";
import { CardResumo } from "../../components/CardResumo";
import { EventModalContext } from "../../context/EventModalContext";
import { EventModal } from "../../components/EventModal";
import toast from "react-hot-toast";

export function Home() {
  const { user } = useContext(AuthContext);
  const { openModal } = useContext(EventModalContext);
  const [stats, setStats] = useState({ total: 0, cidades: 0, proximos: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) {
      carregarDadosHome();
    }
  }, [user]);

  async function carregarDadosHome() {
    try {
      setLoading(true);
      const response = await eventService.listar(user.id);
      const todosEventos = response.data;

      const total = todosEventos.length;
      const cidadesUnicas = new Set(todosEventos.map(event => event.cidade.toLowerCase())).size;
      const hoje = new Date();

      const proximos = todosEventos
        .filter(event => new Date(event.data) >= hoje)
        .sort((dia1, dia2) => new Date(dia1.data) - new Date(dia2.data))
        .slice(0, 5);

      setStats({ total, cidades: cidadesUnicas, proximos });
    } catch (error) {
      toast.error("Erro ao carregar dados do painel.");
    } finally {
      setLoading(false);
    }
  }

  async function confirmarExclusao(id, toastId) {
    toast.dismiss(toastId);
    const loadingToast = toast.loading("Removendo...");
    try {
      await eventService.deletar(id);
      await carregarDadosHome();
      toast.success("Evento removido!", { id: loadingToast });
    } catch (error) {
      toast.error("Não foi possível excluir.", { id: loadingToast });
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
      <HomeContainer>
        <WelcomeSection>
          <h1>Bem-vindo de volta, {user?.nome || 'Usuário'}!</h1>
          <p>Você tem {stats.proximos.length} eventos agendados para os próximos dias.</p>
        </WelcomeSection>

        <StatsGrid>
          <CardResumo icon={Calendar} title="Total de Eventos" value={stats.total} />
          <CardResumo icon={CheckCircle} title="Ativos" value={stats.proximos.length} />
          <CardResumo icon={MapPin} title="Cidades" value={stats.cidades} />
        </StatsGrid>

        <section>
          <SectionHeader>
            <h3>Próximos Eventos</h3>
            <Link to="/eventos">Ver todos</Link>
          </SectionHeader>

          {loading ? (
            <LoadingWrapper>
              <div className="loader"></div>
              <p>Atualizando sua agenda...</p>
            </LoadingWrapper>
          ) : stats.proximos.length > 0 ? (
            <EventsGrid>
              {stats.proximos.map(evento => (
                <EventCard
                  key={evento.id}
                  evento={evento}
                  onEdit={() => openModal(evento)}
                  onDelete={() => handleDelete(evento.id)}
                />
              ))}
            </EventsGrid>
          ) : (
            <EmptyStateText>
              Nenhum evento próximo. <Link to="/eventos">Crie um agora!</Link>
            </EmptyStateText>
          )}
        </section>
        <EventModal onSaveSuccess={carregarDadosHome} />
      </HomeContainer>
    </Layout>
  );
}