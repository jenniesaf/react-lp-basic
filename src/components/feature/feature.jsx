const FeatureItem = ({ item, index }) => {
  return (
    <div
      className={`flex mb-5 items-center ${
        index === 1 ? "flex-row-reverse" : ""
      }  xl:flex-row`}
    >
      <img src={item?.img} alt="" className="w-1/2" />
      <div className="item-description w-1/2 ps-2">
        <p>
          <span className="font-bold">{item?.name}</span>
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
