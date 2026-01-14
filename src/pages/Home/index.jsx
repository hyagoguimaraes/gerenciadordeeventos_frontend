import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Layout } from "../../components/Layout";
import { HomeContainer, WelcomeSection, StatsGrid, StatCard, SectionHeader } from "./style";
import { Calendar, CheckCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import eventService from "../../services/eventService";
import { EventCard } from "../../components/EventCard";

export function Home() {
  const { user } = useContext(AuthContext);
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
        .slice(0, 3);

      setStats({
        total,
        cidades: cidadesUnicas,
        proximos
      });
    } catch (error) {
      console.error("Erro ao carregar dados da Home", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <HomeContainer>
        <WelcomeSection>
          <h1>Bem-vindo de volta, {user?.email?.split('@')[0]}!</h1>
          <p>Você tem {stats.proximos.length} eventos agendados para os próximos dias.</p>
        </WelcomeSection>

        <StatsGrid>
          <StatCard>
            <div className="icon-box"><Calendar size={24} /></div>
            <div className="text-box">
              <h4>Total de Eventos</h4>
              <strong>{stats.total}</strong>
            </div>
          </StatCard>

          <StatCard>
            <div className="icon-box"><CheckCircle size={24} /></div>
            <div className="text-box">
              <h4>Ativos</h4>
              <strong>{stats.proximos.length}</strong>
            </div>
          </StatCard>

          <StatCard>
            <div className="icon-box"><MapPin size={24} /></div>
            <div className="text-box">
              <h4>Cidades</h4>
              <strong>{stats.cidades}</strong>
            </div>
          </StatCard>
        </StatsGrid>

        <section>
          <SectionHeader>
            <h3>Próximos Eventos</h3>
            <Link to="/eventos">Ver todos</Link>
          </SectionHeader>

          {loading ? (
            <p>Carregando agenda...</p>
          ) : stats.proximos.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {stats.proximos.map(evento => (
                <EventCard key={evento.id} evento={evento} />
              ))}
            </div>
          ) : (
            <p style={{ color: '#717171' }}>
              Você ainda não tem eventos para os próximos dias.
              <Link to="/eventos" style={{ color: '#ff385c', marginLeft: '5px' }}>Crie um agora!</Link>
            </p>
          )}
        </section>
      </HomeContainer>
    </Layout>
  );
}