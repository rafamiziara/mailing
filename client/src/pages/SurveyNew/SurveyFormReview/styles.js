import styled from 'styled-components';

export const SurveyReview = styled.div`
  .form-box-r {
    margin: 3%;
    border-radius: 0.6rem;
    width: 56%;
    background-color: white;
    padding: 2rem 3rem;
    position: absolute;
    right: 19%;
    display: flex;
    flex-direction: column;
  }

  .form-label-r {
    color: #1d3557;
    font-size: 0.9rem;
    margin-left: 1rem;
    font-family: 'Grandstander', cursive;
  }

  #form-input-r {
    margin-bottom: 0.6rem;
    color: #1d3557;
    background-color: #eff0f1;
    border-radius: 1.2rem;
    border: none;
    font-family: 'Dosis', sans-serif;
    height: 2.2rem;
    font-size: 1rem;
    padding: 0.3rem 1rem 0 1rem;
    box-sizing: border-box;
  }

  .back {
    width: 8%;
    position: absolute;
    left: 7%;
    top: 44%;
    cursor: pointer;
  }

  .next {
    width: 8%;
    position: absolute;
    right: 7%;
    top: 44%;
    cursor: pointer;
  }

  .confirm-title {
    font-family: 'Grandstander', cursive;
    color: #1d3557;
    font-size: 1.3rem;
    align-self: center;
  }
`;
