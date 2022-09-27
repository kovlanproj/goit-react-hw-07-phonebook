import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const SearchContact = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  return (
    <label>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
};
