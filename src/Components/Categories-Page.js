import DUMMY_CATETORIES from '../DUMMY_DATA/categories';
import './Categories.css';
import CategoryCard from './CategoryCard';
import Paginator from './Paginator';

const CategoriesPage = () => {
  return (
    <div>
      <div class="categories-container">
        {DUMMY_CATETORIES.map((category) => {
          return <CategoryCard category={category} />;
        })}
      </div>
      <Paginator />
    </div>
  );
};

export default CategoriesPage;
