import styles from './ImageCard.module.css';
const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={styles.imageCard} >
      <img
        className={styles.image}
        src={image.urls.small}
        alt={image.alt_description || 'Description not available'}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
};

export default ImageCard;
