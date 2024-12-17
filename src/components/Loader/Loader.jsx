import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Oval
        visible={true}
        height={80}
        width={80}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
        colors={['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']}
      />
    </div>
  )
};

export default Loader;
