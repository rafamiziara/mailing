import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'Grandstander',
    color: '#1d3557',
    textAlign: 'center',
    border: '2px solid #000',
    boxShadow: 'black',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (text) => {
    return (
      <div style={modalStyle} className={classes.paper}>
        <h2 style={{color: 'black'}} id="simple-modal-title">Alert!</h2>
        <p id="simple-modal-description">
          {text}
        </p>
      </div>
    )
  };

  return (
    <div>
      <img onClick={handleOpen} style={{cursor: 'pointer', width: '4rem', backgroundColor: 'white', padding: '0.7rem', borderRadius: '100%'}} src="/add.svg" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body(props.text)}
      </Modal>
    </div>
  );
}