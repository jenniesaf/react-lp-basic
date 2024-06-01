const CategoryItem = ({ item }) => {
  return (
    <figure className="category-container m-0 leading-[0px] xl:w-full xl:text-xl xl:leading-8">
      <img src={item?.img} alt={item?.title} className="w-full h-auto" />
      <figcaption className="leading-6 text-sm py-5">
        <span className="font-bold">{item?.title}</span>
        {item?.description}
      </figcaption>
    </figure>
  );
};

export default CategoryItem;
