import './category-diectory.styles.scss';
import CategoryItem from '../category-items/category-items.component';

const CategoryDiectory = ({categories}) => (
    <div className="diectory-container">
    {
        categories.map((category) => 
            <CategoryItem key={category.id} category={category} />
            // category={category} === category={{...rest}}
        )
    }
  </div>
)

export default CategoryDiectory;