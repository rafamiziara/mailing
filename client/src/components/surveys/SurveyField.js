import React from 'react';
import './SurveyField.css';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input {...input} id="form-input" />
      <div className="form-error">{touched && error}</div>
    </div>
  );
};