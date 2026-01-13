import api from "./api";

const eventService = {
  listar: () => api.get("/events"),
  criar: (data) => api.post("/events", data),
  atualizar: (id, data) => api.put(`/events/${id}`, data),
  deletar: (id) => api.delete(`/events/${id}`),
}

export default eventService;