import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import styles from './Filter.module.css';

const Filter = function () {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onFilter = event =>
    dispatch(contactsActions.changeFilter(event.target.value));

  return (
    <div className={styles.filterBox}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
