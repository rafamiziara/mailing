import React, { Component } from 'react';
import { connect } from 'react-redux';

import SurveyOptions from './SurveyOptions'
import { fetchSurveys } from '../../../actions';
import { 
  SurveysWrapper, 
  SurveyIcon,
  Card,
  CardTitle,
  CardLine,
  FeedbackWrapper,
  PositiveFeedback,
  NegativeFeedback
} from './styles';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <Card key={survey.id}>
          <CardTitle>
            {survey.title}
            <SurveyOptions surveyId={survey.id} />
          </CardTitle>
          <CardLine>
            <SurveyIcon src="/interview.svg" />
            {survey.question}
          </CardLine>
          <CardLine>
            <SurveyIcon src="/send.svg" />
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </CardLine>
          <CardLine>
            <SurveyIcon src="/network.svg" />
            Recipients: {survey.totalRecipients}
          </CardLine>
          <CardLine>
            <SurveyIcon src="/find.svg" />
            Responded: {survey.yes + survey.no} · {Math.round((survey.yes + survey.no)/survey.totalRecipients*100)}%
          </CardLine>
          <CardLine>
            <SurveyIcon src="/calendar.svg" />
            Last Responded: {survey.lastResponded ? new Date(survey.lastResponded).toLocaleDateString() : 'Not Yet'}
          </CardLine>
          <FeedbackWrapper>
            <PositiveFeedback>
              <CardLine>
                <SurveyIcon src="/feedback.svg" />
                {survey.yes} · {survey.yes/(survey.yes + survey.no)*100 || 0}%
              </CardLine>
            </PositiveFeedback>
            <NegativeFeedback>
              <CardLine>
                <SurveyIcon src="/negative-vote.svg" />
                {survey.no} · {survey.no/(survey.yes + survey.no)*100 || 0}%
              </CardLine>
            </NegativeFeedback>
          </FeedbackWrapper>
        </Card>
      );
    })
  }

  render() {
    return (
      <SurveysWrapper>
        {this.renderSurveys()}        
      </SurveysWrapper>
    )
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);