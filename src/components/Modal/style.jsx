import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(2px);
`;

export const ModalContainer = styled.div`
  background: white;
  width: 90%;
  max-width: 550px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-bottom: 1px solid #ebebeb; /* Linha sutil padrão Airbnb */
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;

    h3 {
      color: #222222;
      font-size: 1rem;
      font-weight: 700;
      width: 100%;
      text-align: center;
    }
  }

  .content {
    padding: 24px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #dddddd;
    border-radius: 10px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 50%;
  transition: background 0.2s;
  position: absolute; /* Para o título ficar centralizado de verdade */
  left: 16px;
  
  &:hover {
    background: #ff385c;
    color: #fff;
  }
`