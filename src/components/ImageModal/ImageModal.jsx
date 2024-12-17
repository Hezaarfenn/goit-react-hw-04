import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.ImageModal} onClick={onClose}>
      <div
        className={styles.ImageModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className={styles.modalImage}
          src={image.urls.regular}
          alt={image.alt_description || 'Description not available'}
        />
      </div>
    </div>
  );
};

export default ImageModal;
