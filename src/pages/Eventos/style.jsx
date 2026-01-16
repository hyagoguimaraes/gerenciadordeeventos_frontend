import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { 
    transform: rotate(0deg); 
  }

  to { 
    transform: rotate(360deg); 
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 10px;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: translateY(10px); 
    }

    to { 
      opacity: 1; 
      transform: translateY(0);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #eee;
  padding-bottom: 24px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TitleContainer = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #ff385C;
    letter-spacing: -0.5px;
  }

  p {
    color: #717171;
    font-size: 1rem;
    margin-top: 4px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 300px;
  max-width: 300px;
  transition: all 0.2s ease;

  &:focus-within { 
    max-width: 350px;
  }

  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
  @media(max-width: 768px) {
    max-width: 100%;

    &:focus-within { 
      max-width: 100%; 
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 25px;
  border: 1px solid #dddddd;
  outline: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  background: white;

  &:focus {
    border-color: #ff385C;
    box-shadow: 0 0 0 2px rgba(255, 56, 92, 0.2);
  }

  &:hover { 
    border-color: #ff385C;
    box-shadow: 0 0 0 2px rgba(255, 56, 92, 0.2);
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: 480px) { 
    grid-template-columns: 1fr;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  gap: 16px;
  color: #717171;

  .loader {
    width: 40px;
    height: 40px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #222;
    border-radius: 50%;
    animation: ${rotate} 0.8s linear infinite;
  }
`;

export const ToastConfirmContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  font-weight: 500;

  .confirm-btn {
    background: #ff385C;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover { 
      filter: brightness(0.9);
    }
  }

  .cancel-btn {
    background: #f3f3f3;
    color: #444;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
    
    &:hover { 
      background: #e8e8e8; 
    }
  }
`;