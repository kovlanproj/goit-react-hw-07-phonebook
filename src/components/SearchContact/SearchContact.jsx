import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import styles from './SearchContact.module.css';

export const SearchContact = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  return (
    <div className={styles.searchBox}>
      <label>
        <p>Search contact:</p>
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value.toLowerCase()))}
          className={styles.input}
        />
      </label>
    </div>
  );
};
