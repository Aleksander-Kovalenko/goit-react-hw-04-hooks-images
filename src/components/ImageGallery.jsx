import propTypes from "prop-types";
import { Component } from "react";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { ImageGalleryList } from "./Gallery.styled";

export class ImageGallery extends Component {
  render() {
    const { items } = this.props;

    return (
      <ImageGalleryList>
        {items.map((item) => (
          <ImageGalleryItem
            key={item.id}
            largeImg={item.largeImageURL}
            image={item}
            currentImg={this.props.currentImg}
          />
        ))}
      </ImageGalleryList>
    );
  }
}

ImageGallery.propTypes = {
  items: propTypes.array.isRequired,
};
