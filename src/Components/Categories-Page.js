import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../api/categories';
import DUMMY_CATETORIES from '../DUMMY_DATA/categories';
import './Categories.css';
import CategoryCard from './CategoryCard';
import Paginator from './Paginator';

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories);
  }, []);

  return (
    <div>
      <div class="categories-container">
        {categories.map((category) => {
          return <CategoryCard category={category} />;
        })}
      </div>
      <Paginator />
    </div>
  );
};

export default CategoriesPage;
