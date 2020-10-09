import styled from 'styled-components';

export const Header = styled.div`
  .nav-bar {
    background-color: #1d3557;
    padding: 0 1.5rem;
    font-family: 'Grandstander', cursive;
  }

  .credits {
    margin: 0 10px;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
  }

  .balance {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    background-color: white;
    color: #1d3557;
    border-radius: 1rem;
    height: 36px;
    margin-top: 14px;
    padding-left: 1.2rem;
  }

  .warning {
    font-family: 'Grandstander', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.1rem;
    width: 8%;
    height: 1.8rem;
    position: absolute;
    bottom: 0;
    background-color: #fd8369;
    padding: 1.2rem;
    border-radius: 1rem;
    position: absolute;
    left: 28%;
    top: 23rem;
    z-index: 5;
    margin-top: 0;
    top: 0.9rem;
  }

  .message {
    font-family: 'Dosis', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1d3557;
    font-size: 1rem;
    width: 44%;
    height: 1.8rem;
    position: absolute;
    bottom: 0;
    background-color: white;
    padding: 1.2rem;
    padding-left: 7rem;
    border-radius: 1rem;
    right: 28%;
    margin-top: 0;
    top: 0.9rem;
  }
`;