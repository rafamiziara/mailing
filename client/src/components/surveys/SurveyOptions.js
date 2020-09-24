import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SurveyOptions = ({ surveyId, deleteSurvey }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{height: '0'}}>
      <img onClick={handleClick} className="delete-btn" style={{width: '2rem', cursor: 'pointer'}} src="/options.svg" />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={{fontFamily: 'Grandstander', color: '#1d3557'}} onClick={handleClose}>
          <div onClick={() => deleteSurvey(surveyId)} style={{display: 'flex', alignItems: 'center'}}>
            <img style={{width: '1rem', margin: '0 0.6rem 0.3rem 0'}} src="/remove.svg" />
            Delete
          </div>
        </MenuItem>
        <MenuItem style={{fontFamily: 'Grandstander', color: '#1d3557'}} onClick={handleClose}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img style={{width: '1.2rem', margin: '0 0.4rem 0.3rem 0'}} src="/survey.svg" />
            Edit
          </div>
        </MenuItem>
        <MenuItem style={{fontFamily: 'Grandstander', color: '#1d3557'}} onClick={handleClose}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img style={{width: '1rem', margin: '0 0.6rem 0.3rem 0'}} src="/send.svg" />
            Send
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default connect(null, actions)(SurveyOptions);