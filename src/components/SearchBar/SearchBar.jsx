import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button className={styles.button} type="submit">
          {" "}
          <IoSearch />{" "}
        </button>
        <Toaster position='top-right' />
        <input
          className={styles.input}
          onChange={handleChange}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
