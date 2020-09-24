import React, { Component } from 'react';
import { connect } from 'react-redux';
import SurveyOptions from './SurveyOptions'
import { fetchSurveys } from '../../actions';
import './SurveyList.css'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div style={{margin: '1vw', borderRadius: '10px', fontFamily: 'Grandstander', color: '#1d3557', width: '30vw'}} className="card" key={survey.id}>
          <div className="card-content">
            <span style={{backgroundColor: '#eff0f1', borderRadius: '1rem', padding: '0.5rem', paddingLeft: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between'}} className="card-title">
              {survey.title}
              <SurveyOptions surveyId={survey.id} />
            </span>
            <p style={{margin: '1rem 0'}} className="card-line">
              <img className="survey-icon" src="/interview.svg" />
              {survey.question}
            </p>
            <p style={{margin: '1rem 0'}} className="card-line">
              <img className="survey-icon" src="/send.svg" />
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            <p style={{margin: '1rem 0'}} className="card-line">
              <img className="survey-icon" src="/network.svg" />
              Recipients: {survey.totalRecipients}
            </p>
            <p style={{marginTop: '1rem'}} className="card-line">
              <img className="survey-icon" src="/find.svg" />
              Responded: {survey.yes + survey.no} · {((survey.yes + survey.no)/survey.totalRecipients*100)}%
            </p>
            <p style={{marginTop: '1rem'}} className="card-line">
              <img className="survey-icon" src="/calendar.svg" />
              Last Responded: {survey.lastResponded || 'Not Yet'}
            </p>
          </div>
          <div style={{borderRadius: '0 0 0 10px', display: 'flex', justifyContent: 'space-around', backgroundColor: 'rgba(38, 166, 154, 0.3)', padding: '16px 0', width: '50%'}} className="card-action left">
            <div className="card-box">
              <a className="card-line" style={{color: '#1d3557', margin: '0'}}>
                <img className="survey-icon" src="/feedback.svg" />
                {survey.yes} · {survey.yes/(survey.yes + survey.no)*100 || 0}%
              </a>
            </div>
          </div>
          <div style={{borderRadius: '0 0 10px 0', display: 'flex', justifyContent: 'space-around', backgroundColor: 'rgba(253, 131, 105, 0.3)', padding: '16px 0', width: '50%'}} className="card-action rigth">
            <div className="card-box">
              <a className="card-line" style={{color: '#1d3557', margin: '0'}}>
                <img className="survey-icon" src="/negative-vote.svg" />
                {survey.no} · {survey.no/(survey.yes + survey.no)*100 || 0}%
              </a>
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', margin: '2vw', paddingBottom: '2vw'}}>
        {this.renderSurveys()}        
      </div>
    )
  }

}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);