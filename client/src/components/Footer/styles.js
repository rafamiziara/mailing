import styled from 'styled-components';

export const FooterText = styled.p`
  background-color: #1d3557;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 2.5rem;
  @media (max-width: 680px) {
    flex-direction: column;
    height: 4.5rem;
    padding-bottom: 1.5rem;
  }
  position: fixed;
  bottom: 0;
  padding: 1rem;
`;

export const FooterItem = styled.div`
  font-family: 'Grandstander', cursive;
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.9rem;
  margin: 0 1rem;
`;

export const FooterImage = styled.img`
  width: 1rem;
  margin: 0.5rem;
  padding-bottom: 0.2rem;  
`;

export const FooterLink = styled.a`
  color: #9dc854;
  text-decoration: none;
  margin: 0 0.4rem;  
`;