import propTypes from "prop-types";
import { LoadMore } from "./Gallery.styled";

export const Button = ({ handleClick }) => {
  return (
    <LoadMore type="submit" onClick={handleClick}>
      Load More
    </LoadMore>
  );
};

Button.propTypes = {
  handleClick: propTypes.func.isRequired,
};
