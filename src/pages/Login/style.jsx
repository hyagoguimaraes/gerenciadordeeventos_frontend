import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.5rem;
  color: #ff385C;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 850;
    letter-spacing: -1px;
    color: #ff385C !important;
    margin: 0;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 420px;
  background: #fff;
  padding: 2.5rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  gap: 1.2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid #ebebeb;
  position: relative;

  p {
    text-align: center;
    color: #717171;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    border: none;
    box-shadow: none;
    background: transparent;
  }
    
  .register-link {
    margin-top: 1rem;
    background: none;
    border: none;
    color: #717171;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s;

    strong {
      color: #ff385C;
      font-weight: 700;
      transition: color 0.2s;
    }

    &:hover strong {
      color: #e31c5f;
      text-decoration: underline;
    }
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;

  input: focus {
    border-color: #ff385c;
    box-shadow: 0 0 0 1px #ff385c;
  }
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #717171;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #ff385C;

    &::after, &::before {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -42px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background-color: #ff385C;
    color: #fff;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    pointer-events: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    border-width: 6px;
    border-style: solid;
    border-color: #ff385C transparent transparent transparent;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
  }
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #484848;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: #222;
    }
  }

  input[type="checkbox"] {
    accent-color: #ff385C;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.span`
  color: #c13515;
  font-size: 0.85rem;
  font-weight: 600;
  background: #fff8f6;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(193, 53, 21, 0.1);
  animation: shake 0.4s ease-in-out;

  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }

    25% {
      transform: translateX(-5px);
    }

    75% {
      transform: translateX(5px);
    }
  }
`;