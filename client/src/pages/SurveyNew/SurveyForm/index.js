import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from '../SurveyField';
import validateEmails from '../../../utils/validateEmails';
import formFields from '../SurveyField/formFields';
import { SurveyForm } from './styles';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      );
    });
  }
  
  render() {
    return (
      <SurveyForm>
        <form className="form-box" id="edit-survey" onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
        </form>
        <Link to="/surveys">
          <img className="back" src="/left-arrow.svg" />
        </Link>
        <button className="form-button" type="submit" form="edit-survey">
          <img className="next" src="/right-arrow.svg" />
        </button>
      </SurveyForm>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if(!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);