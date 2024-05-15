const CategoryItem = () => {
  return (
    <figure className="category-container">
      <img src={require(".././assets/family.jpg")} className="" alt="" />
      <figcaption>
        <span>Family</span> - Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec venenatis neque eu est feugiat, in malesuada lectus luctus.
      </figcaption>
    </figure>
  );
};

export default CategoryItem;
