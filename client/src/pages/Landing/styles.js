import styled from 'styled-components';

const Avatar = styled.img`
  width: 6rem;
  opacity: 0.4;
  position: absolute;
`;

export const Avatar1 = styled(Avatar)`
  top: 20rem;
  left: 5rem;  
`;

export const Avatar2 = styled(Avatar)`
  bottom: 4rem;
  left: 15rem;
`;

export const Avatar3 = styled(Avatar)`
  top: 8rem;
  right: 10rem;  
`;

export const Avatar4 = styled(Avatar)`
  bottom: 14rem;
  right: 5rem;  
`;

export const Avatar5 = styled(Avatar)`
  bottom: 5rem;
  right: 14rem;  
`;

export const Avatar6 = styled(Avatar)`
  top: 8rem;
  left: 12rem;  
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Background = styled.img`
  margin-top: 0.2rem;
  opacity: 0.4;  
`;

export const FeatureIcon = styled.img`
  width: 6rem;
  margin: 0 1rem;
`;

export const FeaturesWrapper = styled.div`
  margin: 3rem auto;
  margin-bottom: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 680px) {
    flex-direction: row;
    margin-top: 7rem;
  }
`;

export const AndBox = styled.div`
  font-family: 'Grandstander', cursive;
  font-size: 3rem;
  background-color: #9dc854;
  color: white;
  border-radius: 100%;
  width: 7.5rem;
  padding: 1.5rem;
  opacity: 0.92;
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 85%;
  max-width: 400px;
  margin-bottom: 3rem;
  font-family: 'Grandstander', cursive;
  color: white;
  font-size: 1.6rem;
  background-color: #9dc854;
  opacity: 0.92;
  padding: 1.6rem;
  border-radius: 1.2rem;
  @media (min-width: 680px) {
    width: 40%;
  }
`;
