const CategoryItem = ({ item }) => {
  return (
    <figure className="category-container">
      <img src={item?.img} alt={item?.title} />
      <figcaption>
        <span>{item.title}</span>
        {item.description}
      </figcaption>
    </figure>
  );
};

export default CategoryItem;
