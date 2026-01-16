import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
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
    margin: 0;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 420px;
  min-height: 560px; 
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

  .back-button {
    background: none;
    border: none;
    color: #717171;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    cursor: pointer;
    margin-bottom: 0.5rem;
    width: fit-content;
    transition: color 0.2s;

    &:hover {
      color: #ff385C;
    }
  }

  p {
    color: #717171;
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    background: transparent;
    border: none;
    box-shadow: none;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #717171;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #ff385c;

    &::after, &::before {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background-color: #ff385C;
    color: #fff;
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 0.7rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    border-width: 5px;
    border-style: solid;
    border-color: #ff385C transparent transparent transparent;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
  }
`;

