import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background-color: #1d3557;
  padding: 0 1.5rem;
  font-family: 'Grandstander', cursive;
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  font-size: 2rem;
`;

export const MainLogo = styled.img`
  width: 3rem;
  margin-right: 1rem;  
`;

export const GoogleButton = styled.a`
  display: flex;
`;

export const GoogleLogo = styled.img`
  width: 1.4rem;
  margin-right: 1rem;  
`;

export const CreditsWrapper = styled.li`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  background-color: white;
  color: #1d3557;
  border-radius: 1rem;
  height: 36px;
  padding-left: 1.2rem;
`;