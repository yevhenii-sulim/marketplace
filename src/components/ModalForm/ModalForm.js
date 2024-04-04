import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Box, WrapperModal } from './ModalForm.styled';
import RegisterArea from 'components/RegisterArea/RegisterArea';
import AuthArea from 'components/AuthArea/AuthArea';

export default function ModalForm({ onClose }) {
  const [wind, setWind] = useState(true);
  function toggleWindInReg() {
    setWind(false);
  }

  function toggleWindInAuth() {
    setWind(true);
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
        <Box>
          {wind ? (
            <AuthArea onClose={onClose} toggleWind={toggleWindInReg} />
          ) : (
            <RegisterArea onClose={onClose} toggleWind={toggleWindInAuth} />
          )}
        </Box>
      </WrapperModal>
    </Backdrop>
  );
}
ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
