import { useDispatch, useSelector } from 'react-redux';
import { FilterTitle, FilterForm } from './Filter.styled';
import { searchFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleSearchFilter = event => {
    dispatch(searchFilter(event.target.value));
  };

  return (
    <FilterTitle>
      Find contacts by name
      <FilterForm
        type="text"
        value={filter}
        onChange={handleSearchFilter}
      ></FilterForm>
    </FilterTitle>
  );
};
