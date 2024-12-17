import styles from './ImageCard.module.css';
const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={styles.imageCard} onClick={() => onImageClick(image)}>
      <img
        className={styles.image}
        src={image.urls.regular}
        alt={image.alt_description || 'Description not available'}
      />
    </div>
  );
};

export default ImageCard;
