import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Container } from './ModalForm.styled';
import EnterArea from 'components/AuthArea/AuthArea';
import AutoMoto from 'pages/AutoMoto';

export default function ModalForm({ onClose }) {
  const [wind, setWind] = useState(true);
  function toggleWind() {
    setWind(false);
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
    <Backdrop onClick={oncloseByClickOutside}>
      <Container>
        {wind ? (
          <EnterArea onClose={onClose} toggleWind={toggleWind} />
        ) : (
          <AutoMoto />
        )}
      </Container>
    </Backdrop>
  );
}
ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
