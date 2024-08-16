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
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    if (aspectRatio > 1) {
      img.style.width = '85%';
      img.style.height = 'auto';
    } else {
      img.style.width = 'auto';
      img.style.height = '100%';
    }
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
          textAlign: 'center',
          overflow: 'visible',
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
