import React from 'react';

import { 
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  FeaturesWrapper,
  Background,
  FeatureIcon,
  AndBox,
  Wrapper,
  FeatureBox
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Landing = () => {
  return (
    <Wrapper>
      <Header />
      {/* <Background src="/background.svg" />
      <Avatar1 src="/avatar1.svg" />
      <Avatar2 src="/avatar2.svg" />
      <Avatar3 src="/avatar3.svg" />
      <Avatar4 src="/avatar4.svg" />
      <Avatar5 src="/avatar5.svg" />
      <Avatar6 src="/avatar6.svg" /> */}
      <FeaturesWrapper>
        <FeatureBox>
          <FeatureIcon src="/sendmail.svg" />
          <h3>Send mass <br/>emails</h3>
        </FeatureBox>
        {/* <AndBox>&</AndBox> */}
        <FeatureBox>
          <FeatureIcon src="/feedback.svg" />
          <h3>Collect <br/>feedback</h3>
        </FeatureBox>
      </FeaturesWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Landing;