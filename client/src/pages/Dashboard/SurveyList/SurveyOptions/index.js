import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';

import * as actions from '../../../../actions';
import { 
  MenuWrapper, 
  MenuIcon, 
  MenuContent, 
  OptionsWrapper, 
  OptionIcon 
} from './styles';

const SurveyOptions = ({ surveyId, deleteSurvey }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuWrapper>
      <MenuIcon onClick={handleClick} src="/options.svg" />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <OptionsWrapper>
            <MenuContent onClick={() => deleteSurvey(surveyId)}>
              <OptionIcon src="/remove.svg" />
              Delete
            </MenuContent>
          </OptionsWrapper>
        </MenuItem>
      </Menu>
    </MenuWrapper>
  );
}

export default connect(null, actions)(SurveyOptions);