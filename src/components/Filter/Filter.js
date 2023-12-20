import { useDispatch, useSelector } from 'react-redux';
import { FilterTitle, FilterForm } from './Filter.styled';
import { searchFilter } from '../../redux/filterSlice';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

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
