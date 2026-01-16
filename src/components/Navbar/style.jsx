import { styled } from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #ebebeb;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 70px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.6rem;
  font-weight: 850;
  color: #ff385C; 
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: -0.5px;

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px)
  }
  
  span {
    color: #ff385C;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    gap: 6px;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 8px;
  background: #fff;
  padding: 4px;
  border-radius: 40px;

  @media (max-width: 850px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: space-around;
    padding: 12px 0;
    border-top: 1px solid #ebebeb;
    border-radius: 0;
    gap: 0;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #717171;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 10px 16px;
    border-radius: 25px;
    transition: all 0.2s;

    &:hover {
      background: #f7f7f7;
      color: #ff385C;
    }

    &.active {
      color: #ff385C;
      background: rgba(255, 56, 92, 0.05);
    }

    @media (max-width: 850px) {
      flex-direction: column;
      gap: 4px;
      font-size: 0.7rem;
      padding: 8px;

      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .user-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 21px;
    background: #fff;
    color: #484848;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: default;
    transition: all 0.2s;
    
    &:hover {
      border-color: #ff385C;
      color: #ff385C;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    @media(max-width: 600px) {
      span {
        display: none;
      }

      padding: 8px;
    }
  }
`;

export const LogoutButton = styled.button`
  background: #ff385C; 
  color: #fff;         
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: relative; 

  &:hover {
    background: #e31c5f;
    transform: scale(1.05);
    
    &::after, &::before {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }

  &::after {
    content: attr(data-tooltip); 
    position: absolute;
    bottom: -45px; 
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    background-color: #e31c5f;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    z-index: 10;
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #e31c5f transparent;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    z-index: 10;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 850px) {
    &::after, &::before {
      display: none;
    }
  }
`;