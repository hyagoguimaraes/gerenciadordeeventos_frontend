import { useContext, useEffect, useState, useMemo } from "react";
import { AuthContext } from "../../context/AuthContext";
import { EventModalContext } from "../../context/EventModalContext";
import eventService from "../../services/eventService";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { UploadCloud, Image as ImageIcon } from "lucide-react";
import { Form, UploadSection, InputGroup, NumberInputContainer, QuickButtons, QuickButton, ErrorMessage, SubmitButton, FieldWrapper } from "./style"
import toast from "react-hot-toast";

export function EventModal({ onSaveSuccess }) {
  const { user } = useContext(AuthContext);
  const { isModalOpen, closeModal, editingEvent } = useContext(EventModalContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingCep, setIsLoadingCep] = useState(false);
  const [cepError, setCepError] = useState("");
  const initialFormState = {
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
  };
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (isModalOpen) {
      if (editingEvent) {
        setFormData({ ...editingEvent, data: editingEvent.data.split('T')[0] });
      } else {
        setFormData(initialFormState);
      }
      setCepError("");
    }
  }, [editingEvent, isModalOpen]);

  const isFormValid = useMemo(() => {
    return (
      formData.nome.trim() !== "" &&
      formData.data !== "" &&
      formData.cep.length === 9 && !cepError &&
      formData.logradouro !== "" &&
      formData.numero.trim() !== "" &&
      formData.cidade !== "" &&
      formData.uf !== "" &&
      formData.imagem !== ""
    );
  }, [formData, cepError]);

  function formatarCEP(valor) {
    return valor
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  }

  function formatarNumeroEndereco(valor) {
    let value = valor.toUpperCase();
    value = value.replace(/[^0-9KMSN/ ]/g, "");
    return valor.substring(0, 10);
  }

  async function handleBuscaCEP(cep) {
    const apenasNumeros = cep.replace(/\D/g, '');
    if (apenasNumeros.length === 8) {
      setIsLoadingCep(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${apenasNumeros}/json`)
        const data = await response.json();
        if (data.erro) {
          setCepError("O CEP digitado não foi encontrado.");
          setFormData(prev => ({
            ...prev,
            logradouro: "",
            bairro: "",
            cidade: "",
            uf: ""
          }));
        } else {
          setCepError("");
          setFormData(prev => ({
            ...prev,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            uf: data.uf,
            cep: cep
          }));
        }
      } catch {
        setCepError("Erro ao buscar CEP.");
      } finally {
        setIsLoadingCep(false);
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
    if (!isFormValid) {
      toast.error("Por favor, preencha todos os campos corretamente.");
      return;
    } 

    setIsSubmitting(true);
    try {
      if (formData.id) {
        await eventService.atualizar(formData.id, formData);
        toast.success("Evento atualizado com sucesso!");
      } else {
        await eventService.criar(user.id, formData);
        toast.success("Evento criado com sucesso!");
      }
      onSaveSuccess();
      closeModal();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao salvar: Verifique se todos os campos estão preenchidos.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      title={editingEvent ? "Editar Evento" : "Criar Novo Evento"}
    >
      <Form onSubmit={handleSubmit}>

        <UploadSection onClick={() => document.getElementById('img-input').click()}>
          {formData.imagem && <img src={formData.imagem} alt="Preview" />}
          <div className="upload-content">
            <UploadCloud size={32} />
            <label>{formData.imagem ? "Alterar Foto" : "Subir Foto do Local"}</label>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="img-input"
            style={{ display: 'none' }}
          />
        </UploadSection>

        <InputGroup>
          <FieldWrapper $flex={2}>
            <Input
              placeholder="Nome do Evento"
              value={formData.nome}
              onChange={e => setFormData({ ...formData, nome: e.target.value })}
              required
            />
          </FieldWrapper>
          <FieldWrapper $flex={1}>
            <Input
              type="date"
              value={formData.data}
              onChange={e => setFormData({ ...formData, data: e.target.value })}
              required
            />
          </FieldWrapper>
        </InputGroup>

        <InputGroup>
          <FieldWrapper $flex={1}>
            <Input
              placeholder="CEP (00000-000)"
              maxLength={9}
              value={formData.cep}
              $hasError={!!cepError}
              onChange={e => {
                const cep = formatarCEP(e.target.value);
                setFormData({ ...formData, cep });
                handleBuscaCEP(cep);
              }}
            />
            {cepError && <ErrorMessage>{cepError}</ErrorMessage>}
          </FieldWrapper>
          <FieldWrapper $flex={2}>
            <Input
              placeholder={isLoadingCep ? "Buscando..." : "Rua/Avenida"}
              value={formData.logradouro}
              readOnly
              required
            />
          </FieldWrapper>
        </InputGroup>

        <InputGroup>
          <NumberInputContainer $isSN={formData.numero === "S/N"}>
            <Input
              placeholder={formData.numero === "S/N" ? "Sem número" : "Nº / KM"}
              value={formData.numero}
              disabled={formData.numero === "S/N"}
              onChange={e => setFormData({ ...formData, numero: formatarNumeroEndereco(e.target.value) })}
              required
            />
            <QuickButtons>
              <QuickButton
                type="button"
                $active={formData.numero === "S/N"}
                onClick={() => setFormData({ ...formData, numero: formData.numero === "S/N" ? "" : "S/N" })}
              >
                S/N
              </QuickButton>
              {!formData.numero.includes("KM") && formData.numero !== "S/N" && (
                <QuickButton
                  type="button"
                  onClick={() => setFormData({ ...formData, numero: "KM " })}>
                  + KM
                </QuickButton>
              )}
            </QuickButtons>
          </NumberInputContainer>

          <FieldWrapper $flex={1.5}>
            <Input
              placeholder="Bairro"
              value={formData.bairro}
              readOnly
            />
          </FieldWrapper>
        </InputGroup>

        <InputGroup>
          <FieldWrapper $flex={3}>
            <Input
              placeholder="Cidade"
              value={formData.cidade}
              readOnly
            />
          </FieldWrapper>
          <FieldWrapper $flex={1}>
            <Input
              placeholder="UF"
              value={formData.uf}
              readOnly
            />
          </FieldWrapper>
        </InputGroup>

        <SubmitButton type="submit" disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? "Processando..." : (editingEvent ? "Salvar Alterações" : "Criar Evento")}
        </SubmitButton>
      </Form>
    </Modal>
  );
}