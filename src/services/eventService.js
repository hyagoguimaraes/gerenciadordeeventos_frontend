import api from "./api";

const eventService = {
  listar: (adminId) => api.get(`/eventos?adminId=${adminId}`),
  criar: (adminId, data) => api.post(`/eventos?adminId=${adminId}`, data),
  atualizar: (id, data) => api.put(`/eventos/${id}`, data),
  deletar: (id) => api.delete(`/eventos/${id}`),
}

export default eventService;