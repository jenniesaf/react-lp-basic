const PlanItem = ({ item }) => {
  return (
    <div className="plan block max-w-[216px] mb-8">
      <img
        src={item?.img}
        alt={item?.name}
        className="w-[216px] block m-auto"
      />
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
      <button className="more w-auto min-w-[150px] text-sm font-medium p-3 bg-[#7da4cb] border-none rounded-md mt-5 text-white">
        Learn More
      </button>
    </div>
  );
};

export default PlanItem;
