import styled from 'styled-components';

export const SurveysWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2vw;
  padding-bottom: 2vw;  
`;

export const SurveyIcon = styled.img`
  width: 1.5rem;
  margin: 0 1rem 0 0.5rem;
  color: #1d3557;  
`;

export const Card = styled.div`
  margin: 1rem 0rem;
  border-radius: 10px;
  font-family: 'Grandstander';
  background-color: white;
  color: #1d3557;
  width: 90%;
  min-width: 300px;
  @media (min-width: 680px) {
    width: 45%;
  }
  @media (min-width: 1000px) {
    width: 30%;
  }  
`;

export const CardTitle = styled.div`
  background-color: #eff0f1;
  border-radius: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  margin: 1.5rem;
  font-size: 1.6rem;
  line-height: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const CardLine = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem 0.4rem 0;
  background-color: #eff0f1;
  border-radius: 1rem;
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  margin: 1rem 1.5rem;  
`;

export const FeedbackWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
`;

export const PositiveFeedback = styled.div`
  border-radius: 0 0 0 10px;
  display: flex;
  justify-content: space-around;
  background-color: rgba(38, 166, 154, 0.3);
  width: 50%;
`;

export const NegativeFeedback = styled.div`
  border-radius: 0 0 10px 0;
  display: flex;
  justify-content: space-around;
  background-color: rgba(253, 131, 105, 0.3);
  width: 50%;
`;
