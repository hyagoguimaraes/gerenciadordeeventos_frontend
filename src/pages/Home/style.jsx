import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-bottom: 40px;
`;

export const WelcomeSection = styled.section`
  padding: 60px;
  background: linear-gradient(94deg, #FF385C 0%, #E61E4D 100%);
  border-radius: 24px;
  color: white;
  box-shadow: 0 10px 30px rgba(255, 56, 92, 0.15);
  
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
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
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
  }

  .icon-box {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #FFF0F2;
    color: #FF385C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    gap: 2px;

    h4 { 
      color: #717171; 
      font-size: 0.9rem; 
      font-weight: 500; 
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    strong { 
      color: #222;
      font-size: 1.4rem; 
      font-weight: 700; 
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 12px;
  
  h3 { 
    font-size: 1.6rem; 
    color: #222; 
    font-weight: 700;
  }

  a { 
    color: #FF385C; 
    font-weight: 700; 
    text-decoration: none;
    font-size: 0.95rem;
    padding: 8px 16px;
    border-radius: 8px;
    transition: background 0.2s;

    &:hover {
      background: #FFF0F2;
      text-decoration: underline;
    }
  }
`;