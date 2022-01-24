import propTypes from "prop-types";
import { Component } from "react";
import { GalleryItem, ImageGalleryItemImage } from "./Gallery.styled";

export class ImageGalleryItem extends Component {
  setImage = () => {
    const {
      largeImg,
      currentImg,
      image: { tags },
    } = this.props;

    currentImg(largeImg, tags);
  };
  render() {
    const { webformatURL, tags } = this.props.image;
    return (
      <GalleryItem>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={() => this.setImage()}
        />
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
};
