import styled from 'styled-components';

export const Container = styled.div`
  .background {
    margin-top: 0.2rem;
    opacity: 0.4;
  }

  .avatar {
    width: 6rem;
    opacity: 0.4;
    position: absolute;
  }

  .av1 {
    top: 20rem;
    left: 5rem;
  }

  .av2 {
    bottom: 4rem;
    left: 15rem;
  }

  .av3 {
    top: 8rem;
    right: 10rem;
  }

  .av4 {
    bottom: 14rem;
    right: 5rem;
  }

  .av5 {
    bottom: 5rem;
    right: 14rem;
  }

  .av6 {
    top: 8rem;
    left: 12rem;
  }

  .description-box {
    font-family: 'Grandstander', cursive;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 25rem;
    position: absolute;
    right: 15%;
    top: 20vh;
    margin: 0;
  }

  .box {
    font-family: 'Grandstander', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    font-size: 1.6rem;
    width: 34%;
    height: 20rem;
    margin: 0;
    background-color: #9dc854;
    opacity: 0.92;
    padding: 1.6rem;
    border-radius: 1.2rem;
  }

  .and {
    font-family: 'Grandstander', cursive;
    font-size: 3rem;
    background-color: #9dc854;
    color: white;
    border-radius: 100%;
    width: 7.5rem;
    padding: 1.5rem;
    opacity: 0.92;
  }

  .box-background {
    width: 70%;
    height: 25rem;
    position: absolute;
    right: 15%;
    top: 24vh;
    margin: 0;
    background-color: #9dc854;
    opacity: 0.5;
    padding: 1.6rem;
    border-radius: 1.2rem;
  }

  .icon {
    width: 40%;
  }
`;