import { toast } from 'react-toastify';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

function fetchImages(page, imagesQuery) {
  return fetch(
    `https://pixabay.com/api/?q=${imagesQuery}&page=${page}&key=24200561-e33c219a52f08aa11179044b0&image_type=photo&orientation=horizontal&per_page=10`,
  )
    .then(response => response.json())
    .then(response => {
      return response.hits;
    });
}

const api = {
  fetchImages,
};

export default api;
