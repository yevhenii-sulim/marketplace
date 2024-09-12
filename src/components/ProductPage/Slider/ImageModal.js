import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { CloseModal } from './Slider.styled';
export const ImageModal = ({
  imageUrl,
  isOpen,
  onRequestClose,
  setModalIsOpen,
}) => {
  const handleImageLoad = event => {
    const img = event.target;
    img.style.width = '100%';
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{
        content: {
          maxWidth: '90%',
          maxHeight: '90%',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'visible',
          padding: 0,
        },
      }}
    >
      <CloseModal type="button" onClick={() => setModalIsOpen(false)}>
        <CloseIcon />
      </CloseModal>
      <img src={imageUrl} alt="Enlarged" onLoad={handleImageLoad} />
    </Modal>
  );
};
