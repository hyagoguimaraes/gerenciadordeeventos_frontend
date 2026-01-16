import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { 
    transform: rotate(0deg); 
  }

  to { 
    transform: rotate(360deg); 
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-bottom: 40px;
  animation: fadeIn 0.5s ease-out;

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

  @media(max-width: 768px) {
    gap: 32px;
  }
`;

export const WelcomeSection = styled.section`
  padding: 60px;
  background: linear-gradient(94deg, #FF385C 0%, #E61E4D 100%);
  border-radius: 24px;
  color: white;
  box-shadow: 0 10px 30px rgba(255, 56, 92, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
  
  h1 {
    font-size: clamp(1.8rem, 5vw, 2.5rem);;
    font-weight: 800;
    margin-bottom: 12px;
    letter-spacing: -1px;
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 400;
  }

  @media(max-width: 768px) {
    padding: 40px 30px;
    border-radius: 16px;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media(max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StatCard = styled.div`
  padding: 24px;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    border-color: #FF385C50;

    .icon-box {
      background: #ff385c;
      color: #fff;
      transform: rotate(-5deg) scale(1.1);
    }
  }

  .icon-box {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: #FFF0F2;
    color: #FF385C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .text-box {
    display: flex;
    flex-direction: column;

    h4 { 
      color: #717171; 
      font-size: 0.85rem; 
      font-weight: 600; 
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    strong { 
      color: #222;
      font-size: 1.6rem; 
      font-weight: 800; 
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
  
  h3 { 
    font-size: 1.4rem; 
    color: #222; 
    font-weight: 700;
  }

  a { 
    color: #FF385C; 
    font-weight: 700; 
    text-decoration: none;
    font-size: 0.9rem;
    padding: 8px 16px;
    border-radius: 8px;
    background: #FFF0F2;
    transition: all 0.2s ease;

    &:hover {
      background: #FF385C;
      color: white;
      transform: translateX(4px);
    }
  }

  @media (max-width: 480px) {
    flex-direction: row;
    h3 { font-size: 1.2rem; }
  }
`;

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;

  @media(max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyStateText = styled.p`
  color: #717171;
  font-size: 1rem;

  a {
    color: #ff385c;
    font-weight: 600;
    text-decoration: none;
    margin-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 16px;
  color: #717171;

  .loader {
    width: 32px;
    height: 32px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #ff385c;
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
    background: #ff385c;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
  }

  .cancel-btn {
    background: #f3f3f3;
    color: #444;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
  }
`;