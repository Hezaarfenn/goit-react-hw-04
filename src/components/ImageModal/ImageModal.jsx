import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.ImageModal}
      overlayClassName={styles.ImageModalOverlay}
    >
      <div className={styles.ImageModalContent} onClick={onClose}>
        <img className={styles.modalImage} src={image.urls.regular} alt={image.alt_description || 'Description not available'} />
      </div>
    </Modal>
  );
};

export default ImageModal;



