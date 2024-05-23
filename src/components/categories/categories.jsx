import CategoryItem from "../category/category-item";
import data from "./../../data/data.json";
const Categories = () => {
  const { categories } = data;
  const items = categories.items;
  return (
    <div className="categories-container xl:flex xl:gap-5 xl:justify-center">
      {items.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Categories;
