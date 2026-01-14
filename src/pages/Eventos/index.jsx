import { useContext, useEffect, useState } from "react";
import eventService from './../../services/eventService';
import { EventCard } from './../../components/EventCard/index';
import { AddButton, Container, Header, List, TitleContainer, Form } from "./style";
import { Layout } from "../../components/Layout";
import { Plus, Search, UploadCloud } from "lucide-react";
import { Modal } from "../../components/Modal";
import { Input } from './../../components/Input/index';
import { Button } from './../../components/Button/index';
import { AuthContext } from "../../Context/AuthContext";
import { EventModalContext } from "../../context/EventModalContext";

export function Eventos() {
  const { user } = useContext(AuthContext);
  const [eventos, setEventos] = useState([]);
  const [search, setSearch] = useState("");
  const { isModalOpen, openModal, closeModal, editingEvent } = useContext(EventModalContext);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: null,
    nome: "",
    data: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    imagem: ""
  });

  useEffect(() => {
    if (user && user.id) {
      carregarEventos();
    }
  }, [user]);

  useEffect(() => {
    if (editingEvent) {
      setFormData({ ...editingEvent, data: editingEvent.data.split('T')[0] });
    } else {
      setFormData({
        id: null,
        nome: "",
        data: "",
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        imagem: ""
      });
    }
  }, [editingEvent, isModalOpen]);

  async function carregarEventos() {
    if (!user || !user.id) {
      console.error("Usuário não identificado para carregar eventos.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await eventService.listar(user.id);
      setEventos(response.data);
    } catch (error) {
      console.error("Erro ao carregar eventos", error);
    } finally {
      setLoading(false);
    }
  }

  // const handleOpenModal = (evento = null) => {
  //   if (evento) {
  //     setFormData({ ...evento, data: evento.data.split('T')[0] });
  //   } else {
  //     setFormData({ id: null, nome: "", data: "", cep: "", logradouro: "", numero: "", bairro: "", cidade: "", imagem: "" });
  //   }
  //   setIsModalOpen(true);
  // }

  async function handleBuscaCEP(cep) {
    const valor = cep.replace(/\D/g, '');
    if (valor.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${valor}/json`)
        const data = await response.json();
        if (!data.erro) {
          setFormData(prev => ({
            ...prev,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: `${data.localidade}`,
            uf: data.uf,
            cep: valor
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar CEP", error);
      }
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imagem: reader.result }))
      }
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (formData.id) {
        await eventService.atualizar(formData.id, formData);
      } else {
        await eventService.criar(user.id, formData);
      }
      carregarEventos();
      closeModal();
    } catch (error) {
      alert("Erro ao salvar: Verifique se todos os campos estão preenchidos.");
    }
  }

  async function handleDelete(id) {
    if (window.confirm("Deseja realmente excluir este evento?")) {
      try {
        await eventService.deletar(id);
        setEventos(prev => prev.filter(e => e.id !== id));
      } catch (error) {
        alert("Erro ao deletar evento.");
      }
    }
  }

  const eventosFiltrados = eventos.filter(evento =>
    evento.nome.toLowerCase().includes(search.toLowerCase()) ||
    evento.cidade.toLowerCase().includes(search.toLowerCase()) ||
    evento.bairro.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <Container>
        <Header>
          <TitleContainer>
            <h2>Meus Eventos</h2>
            <p>Gerencie suas programações e atividades</p>
          </TitleContainer>

          <div className="search-container" style={{ position: 'relative', width: '300px' }}>
            <Search
              size={18}
              color="#717171"
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Buscar por nome ou local..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 12px 12px 40px',
                borderRadius: '25px',
                border: '1px solid #ddd',
                outline: 'none',
                fontSize: '0.9rem'
              }}
            />
          </div>
        </Header>

        {loading ? (
          <p>Carregando eventos...</p>
        ) : (
          <List>
            {eventosFiltrados.length > 0 ? (
              eventosFiltrados.map(evento => (
                <EventCard
                  key={evento.id}
                  evento={evento}
                  onEdit={() => openModal(evento)}
                  onDelete={() => handleDelete(evento.id)}
                  editable
                />
              ))
            ) : (
              <p style={{ gridColumn: '1/-1', color: '#717171' }}>Nenhum evento encontrado.</p>
            )}
          </List>
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Gerenciar Evento"
        >
          <Form onSubmit={handleSubmit}>
            <div className="upload-section" style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', marginBottom: '15px' }}>
              {formData.imagem ? (
                <img src={formData.imagem} alt="Preview" style={{ maxHeight: '150px', marginBottom: '10px' }} />
              ) : (
                <UploadCloud size={40} color="#ccc" />
              )}
              <input type="file" accept="image/*" onChange={handleImageChange} id="img-input" style={{ display: 'none' }} />
              <label htmlFor="img-input" style={{ cursor: 'pointer', display: 'block', color: '#666' }}>
                {formData.imagem ? "Alterar Foto" : "Clique para subir a foto do local"}
              </label>
            </div>

            <Input
              placeholder="Nome do Evento"
              value={formData.nome}
              onChange={event => setFormData({ ...formData, nome: event.target.value })}
              required
            />

            <Input
              type="date"
              value={formData.data}
              onChange={event => setFormData({ ...formData, data: event.target.value })}
              required
            />

            <div style={{ display: 'flex', gap: '10px' }}>
              <Input
                placeholder="CEP (00000-000)"
                value={formData.cep}
                onChange={event => {
                  setFormData({ ...formData, cep: event.target.value });
                  if (event.target.value.length === 8) handleBuscaCEP(event.target.value);
                }}
                required
              />
            </div>

            <Input
              placeholder="Rua/Avenida"
              value={formData.logradouro}
              readOnly
              required
            />

            <div style={{ display: 'flex', gap: '10px' }}>
              <Input
                placeholder="Número"
                value={formData.numero}
                onChange={event => setFormData({ ...formData, numero: event.target.value })}
                required
              />

              <Input
                placeholder="Bairro"
                value={formData.bairro}
                readOnly
              />
            </div>

            <Input
              placeholder="Cidade"
              value={formData.cidade}
              readOnly
            />

            <Input
              placeholder="UF"
              value={formData.uf}
              readOnly
            />
            <Button type="submit">Salvar Evento</Button>
          </Form>
        </Modal>
      </Container>
    </Layout>
  );
}