import React from 'react';

import { Wrapper } from '../Landing/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Thanks = () => {
  return (
    <Wrapper>
      <Header />
      <div className="landing">
        <img className="background" src="/background.svg" />
        <img className="avatar av1" src="/avatar1.svg" />
        <img className="avatar av2" src="/avatar2.svg" />
        <img className="avatar av3" src="/avatar3.svg" />
        <img className="avatar av4" src="/avatar4.svg" />
        <img className="avatar av5" src="/avatar5.svg" />
        <img className="avatar av6" src="/avatar6.svg" />
        <div className="description-box">
          <div className="send-mail box">
            <img className="icon" src="/thank-you.svg" />
            <h3>Thanks for voting!</h3>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Thanks;