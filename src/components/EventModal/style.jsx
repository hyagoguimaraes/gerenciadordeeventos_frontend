import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 10px 5px;
`;

export const FieldWrapper = styled.div`
  flex: ${props => props.$flex || 1};
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;

  input {
    transition: border-color 0.2s, box-shadow 0.2s;
    ${props => props.$hasError && css`
      border-color: #ff385c !important;
      background-color: #fff8f6;
      box-shadow: 0 0 0 1px #ff385c;
    `}
  }
`;

export const UploadSection = styled.div`
  width: 100%;
  min-height: 180px;
  border: 2px dashed #e0e0e0;
  border-radius: 16px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #ff385c;
    background: #fff0f2;
    
    svg { 
      color: #ff385c; 
    }
      
    label { 
      color: #ff385c; 
    }
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    background: rgba(255, 255, 255, 0.8);
    padding: 12px 24px;
    border-radius: 12px;
    backdrop-filter: blur(4px);
    pointer-events: none;
  }

  label {
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    color: #717171;
    transition: color 0.2s;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const NumberInputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  input {
    ${props => props.$isSN && css`
      background-color: #f5f5f5 !important;
      cursor: not-allowed;
      border-color: #ddd;
      color: #999;
    `}
  }

  input:disabled {
    background-color: #f5f5f5 !important;
    cursor: not-allowed;
    border-color: #eeeeee;
    color: #b0b0b0;
  }
`;

export const QuickButtons = styled.div`
  display: flex; 
  gap: 8px;
`;

export const QuickButton = styled.button`
  flex: 1;
  background: ${props => props.$active ? "#ff385c" : "#fff"};
  color: ${props => props.$active ? "#fff" : "#717171"};
  border: 1px solid ${props => props.$active ? "#ff385c" : "#dddddd"};
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    border-color: #ff385c;
    background: ${props => props.$active ? "#ff385c" : "#f7f7f7"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.span`
  color: #c13515;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: -4px;
  display: block;
  animation: shake 0.4s ease-in-out;

  @keyframes shake {
    0%, 100% { 
      transform: translateX(0); 
    }
    25% { 
      transform: translateX(-4px); 
    }
    75% { 
      transform: translateX(4px); 
    }
  }
`;

export const SubmitButton = styled.button`
  background: #ff385c;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  margin-top: 1rem;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    filter: brightness(0.9);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 56, 92, 0.2);
  }
    
  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: #e0e0e0;
    color: #a1a1a1;
    cursor: not-allowed;
    ${props => props.children === "Processando..." && css`
       background: #ff7e95; 
       color: white;
       cursor: wait;
       opacity: 0.8;
    `}
  }
`;