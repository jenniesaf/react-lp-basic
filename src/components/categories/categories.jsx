import data from "./../../data/data.json";
const Categories = () => {
  const { categories } = data;
  const items = categories.items;

  return (
    <div className="categories-container xl:flex xl:gap-5 xl:justify-center xl:mx-16">
      {items.map((item) => (
        <figure className="category-container">
          <img src={item?.img} alt={item?.title} />
          <figcaption>
            <span>{item.title}</span>
            {item.description}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
export default Categories;
