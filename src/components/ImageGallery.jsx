import propTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryList } from './Gallery.styled';

export const ImageGallery = ({ items, currentImg }) => {
  return (
    <ImageGalleryList>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          largeImg={item.largeImageURL}
          image={item}
          currentImg={currentImg}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  items: propTypes.array.isRequired,
};
