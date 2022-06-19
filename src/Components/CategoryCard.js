import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <div className="card category-card" style={{ width: '18rem' }} key={category.id}>
      <img className="card-img-top" src={category.imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-center">{category.name}</h5>
      </div>
    </div>
  );
};

export default CategoryCard;
