import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import './Landing.css'

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new">
        <img style={{width: '4rem', backgroundColor: 'white', padding: '0.7rem', borderRadius: '100%'}} src="/add.svg" />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;