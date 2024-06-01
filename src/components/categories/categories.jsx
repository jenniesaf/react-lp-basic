import CategoryItem from "../category/category-item";
import data from "./../../data/data.json";

const Categories = () => {
  const { categories } = data;
  const items = categories.items;
  return (
    <section name="section1">
      <div className="container">
        <h2>{categories.title}</h2>
        <div className="categories-container xl:flex xl:gap-5 xl:justify-center">
          {items.map((item) => (
            <CategoryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Categories;
