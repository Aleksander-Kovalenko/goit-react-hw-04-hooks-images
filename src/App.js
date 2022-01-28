import { Component, useReducer, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { Button } from './components/Button';
import { ImageGallery } from './components/ImageGallery';
import api from './components/services/images-api';
import { Modal } from './components/Modal';
import SearchBar from './components/Searchbar';

function setImagesQueryInfo(state, action) {
  switch (action) {
    case action.imagesQuery:
      return { ...state, imagesQuery: action.imagesQuery };
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, despatcher] = useReducer(setImagesQueryInfo, {
    imagesQuery: '',
    currentImg: '',
    tags: '',
    page: 1,
    listImages: [],
    showModal: false,
    isLoading: false,
    error: null,
  });

  const handleForm = query => {
    if (query.trim().length === 0) return toast.info('Уточните запрос');

    despatcher({
      imagesQuery: query,
    });
  };

  // const [imagesQuery, setImagesQuery] = useState('');
  // const [currentImg, setCurrentImg] = useState('');
  // const [tags, setTags] = useState('')
  // const [page, setPage] = useState(1)
  // const [showModal, setShowModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [listImages, setListImages] = useState([]);
  // const [, setError] = useState(null);

  return (
    <div className="App">
      <SearchBar submitForm={handleForm} />
      <ToastContainer autoClose={3000} />
      {/* {galleryImages && ( */}
      <>
        {/* <ImageGallery items={state.listImages} currentImg={this.getLargeImages} /> */}
        {/* <Button handleClick={this.getImages} /> */}
      </>
      {/* )} */}
      {/* {state.isLoading && (
        <TailSpin className="loader" wrapperStyle={{ justifyContent: 'center' }} />
      )} */}

      {/* {state.showModal && (
        <Modal image={state.currentImg} tags={state.tags} onToggleModal={this.onToggleModal} />
      )} */}
    </div>
  );
}

// export class OldApp extends Component {
//   state = {
//     imagesQuery: "",
//     showModal: false,
//     isLoading: false,
//     listImages: [],
//     currentImg: "",
//     tags: "",
//     error: null,
//     page: 1,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevState.imagesQuery;
//     const nextQuery = this.state.imagesQuery;

//     if (prevQuery !== nextQuery) {
//       this.getImages();
//     }
//   }

//   getImages = () => {
//     const { page, imagesQuery } = this.state;
//     const options = { page, imagesQuery };
//     this.setState({ isLoading: true });

//     api
//       .fetchImages(options)
//       .then((listImages) => {
//         this.setState((prevState) => ({
//           listImages: [...prevState.listImages, ...listImages.hits],
//           page: prevState.page + 1,
//         }));
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: "smooth",
//         });
//       })
//       .catch((error) => this.setState({ error }))
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   getLargeImages = (selectedImages, descImages) => {
//     this.setState({
//       currentImg: selectedImages,
//       tags: descImages,
//     });

//     this.onToggleModal();
//   };

//   handleForm = (query) => {
//     if (query.trim().length === 0) {
//       return toast.info("Уточните запрос");
//     }
//     this.setState({
//       imagesQuery: query,
//       showButton: true,
//       listImages: [],
//       page: 1,
//     });
//   };

//   onToggleModal = () => {
//     this.setState({ showModal: !this.state.showModal });
//   };

//   render() {
//     const { listImages, isLoading, showModal, currentImg, tags } = this.state;
//     const galleryImages = listImages.length > 0;

//     return (
//       <div className="App">
//         <SearchBar submitForm={this.handleForm} />
//         <ToastContainer autoClose={3000} />
//         {galleryImages && (
//           <>
//             <ImageGallery items={listImages} currentImg={this.getLargeImages} />
//             <Button handleClick={this.getImages} />
//           </>
//         )}
//         {isLoading && (
//           <TailSpin
//             className="loader"
//             wrapperStyle={{ justifyContent: "center" }}
//           />
//         )}

//         {showModal && (
//           <Modal
//             image={currentImg}
//             tags={tags}
//             onToggleModal={this.onToggleModal}
//           />
//         )}
//       </div>
//     );
//   }
// }
