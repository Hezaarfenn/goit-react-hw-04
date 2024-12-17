import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchImages = async (query, page = 1) => {
    const perPage = 12;
    const BASE_URL = `https://api.unsplash.com/search/photos/?per_page=${perPage}&page=${page}&query=${query}&client_id=qIjV_Jt4aB7jT5IRqCQkd3Z546RDv-ff1Fa8SAjuJeY`;

    try {
      const response = await axios.get(BASE_URL);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching images:', error);
      toast.error('Something went wrong while fetching images');
      setError(error.message);
      setIsLoading(false);
      return [];
    }
  };

  useEffect(() => {
    if (!searchQuery) return;

    const loadImages = async () => {
      setIsLoading(true);

      const newImages = await fetchImages(searchQuery, page);
      setImages((prevImages) =>
        page === 1 ? newImages : [...prevImages, ...newImages]
      );
      setIsLoading(false);
    };

    loadImages();
  }, [searchQuery, page]);

  const handleSearchSubmit = (query) => {
    if (query === searchQuery) {
      toast.error('You have already searched for this query');
      return;
    }
    setSearchQuery(query);
    setPage(1);
    setImages([]);
    setError(null);
  };


  

  return (
    <>
      <SearchBar fetchImages={fetchImages} onSubmit={handleSearchSubmit} />
      {isLoading && !error && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <>
          <ImageGallery
            images={images}
            onImageClick={(image) => {
              setSelectedImage(image);
              setIsModalOpen(true);
            }}
          />
          {isLoading && <Loader />}
          {images.length % 12 === 0 && (
            <LoadMoreBtn onClick={() => setPage((prevPage) => prevPage + 1)} />
          )}
        </>
      )}
      {isModalOpen && selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          image={selectedImage}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default App;
