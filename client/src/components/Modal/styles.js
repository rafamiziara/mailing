import styled from 'styled-components';

export const Button = styled.img`
  cursor: pointer;
  width: 4rem;
  background-color: white;
  padding: 0.7rem;
  border-radius: 100%;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);  
`;

export const ModalContent = styled.div`
  font-family: 'Grandstander';
  color: #1d3557;
  text-align: center;
  background-color: white;
  width: 35%;
  height: 35%;
  border: 2px solid #000;
  border-radius: 1rem;
  box-shadow: black;
  padding: 1rem;

  h2 {
    color: black;
  }
`;
