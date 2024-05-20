const FeatureItem = ({ item, index }) => {
  return (
    <div
      className={`art-item ${
        index === 1 ? "flex-row-reverse" : ""
      }  xl:flex-row`}
    >
      <img src={item?.img} alt="" />
      <div className="item-description">
        <p>
          <span>{item?.name}</span>
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
