import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Backdrop,
  Box,
  WrapperModal,
  cssButtonClose,
} from './ModalForm.styled';
import RegisterArea from 'components/RegisterArea/RegisterArea';
import AuthArea from 'components/AuthArea/AuthArea';
import AreaForgetPass from 'components/AreaForgetPass/AreaForgetPass';

export default function ModalForm({ onClose }) {
  const [auth, setAuth] = useState(true);
  const [register, setRegister] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);

  function openWindInReg() {
    setAuth(false);
    setForgetPass(false);
    setRegister(true);
  }

  function openWindInAuth() {
    setAuth(true);
    setForgetPass(false);
    setRegister(false);
  }
  function openWindInForgetPass() {
    setAuth(false);
    setForgetPass(true);
    setRegister(false);
  }
  useEffect(() => {
    function onCloseByEsc(evt) {
      if (evt.code === 'Escape') {
        onClose(false);
      }
    }
    window.addEventListener('keydown', onCloseByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [onClose]);

  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    onClose(false);
  }
  return (
    <Backdrop onMouseDown={oncloseByClickOutside}>
      <WrapperModal>
        <IconButton sx={cssButtonClose} onClick={() => onClose(false)}>
          <CloseIcon className="close" />
        </IconButton>
        <Box>
          {auth && (
            <AuthArea
              onClose={onClose}
              toggleWind={openWindInReg}
              openForgetWind={openWindInForgetPass}
            />
          )}
          {register && (
            <RegisterArea onClose={onClose} toggleWind={openWindInAuth} />
          )}
          {forgetPass && (
            <AreaForgetPass onClose={onClose} toggleWind={openWindInAuth} />
          )}
        </Box>
      </WrapperModal>
    </Backdrop>
  );
}
ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
