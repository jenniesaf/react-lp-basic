const PlanItem = ({ item }) => {
  return (
    <div className="plan">
      <img src={item?.img} alt={item?.name} />
      <h3>{item?.title}</h3>
      <p className="mb-4 xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
        {item?.description1}
      </p>
      <p className="hidden mb-4 xl:block xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
        {item?.description2}
      </p>
      <p className="hidden mb-4 xl:block xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
        {item?.description3}
      </p>
      <button className="more">Learn More</button>
    </div>
  );
};

export default PlanItem;
