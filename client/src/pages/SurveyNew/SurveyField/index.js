import React from 'react';
import { SurveyField } from './styles';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <SurveyField>
      <label className="form-label">{label}</label>
      <input {...input} id="form-input" />
      <div className="form-error">{touched && error}</div>
    </SurveyField>
  );
};