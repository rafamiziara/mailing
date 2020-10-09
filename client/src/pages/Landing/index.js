import React from 'react';

import { Landing } from './styles';
import { Header } from '../../components/Header';

const Landing = () => {
  return (
    <Landing className="landing" style={{ textAlign: 'center' }}>
      <Header />
      <img className="background" src="/background.svg" />
      <img className="avatar av1" src="/avatar1.svg" />
      <img className="avatar av2" src="/avatar2.svg" />
      <img className="avatar av3" src="/avatar3.svg" />
      <img className="avatar av4" src="/avatar4.svg" />
      <img className="avatar av5" src="/avatar5.svg" />
      <img className="avatar av6" src="/avatar6.svg" />
      {/* <div className="box-background" /> */}
      <div className="description-box">
        <div className="send-mail box">
          <img className="icon" src="/sendmail.svg" />
          {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
          <h3>Send mass emails</h3>
        </div>
        <p className="and">&</p>
        <div className="collect-feedback box">
          <img className="icon" src="/feedback.svg" />
          {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
          <h3>Collect feedback</h3>
        </div>
      </div>
    </Landing>
  );
};

export default Landing;