import { useNavigate } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card category-card"
      style={{ width: '18rem' }}
      key={category.id}
      onClick={() => {
        navigate(`/categories/${category.id}/jobs`);
      }}
    >
      <img className="card-img-top" src={category.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-center">{category.name}</h5>
      </div>
    </div>
  );
};

export default CategoryCard;
