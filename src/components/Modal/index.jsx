import { X } from "lucide-react";
import { CloseButton, ModalContainer, Overlay } from "./style";

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <header>
          <CloseButton onClick={onClose}>
            <X size={18} />
          </CloseButton>
          <h3>{title}</h3>
        </header>
        <div className="content">
          {children}
        </div>
      </ModalContainer>
    </Overlay>
  )
}