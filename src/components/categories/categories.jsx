import data from "./../../data/data.json";
const Categories = () => {
  const { categories } = data;
  const [firstItem, secondItem, thirdItem, forthItem] = categories.items;

  return (
    <div className="categories-container xl:flex xl:gap-5 xl:justify-center xl:mx-16">
      <figure className="category-container">
        <img src={firstItem?.img} alt={firstItem?.title} />
        <figcaption>
          <span>{firstItem.title}</span>
          {firstItem.description}
        </figcaption>
      </figure>
    </div>
  );
};
// src={`/${product.image}`}
// {require(".././assets/family.jpg")}
export default Categories;
