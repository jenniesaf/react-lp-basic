import data from "../data/data.json";
import PlanItem from "./plan";
const Plans = () => {
  const { plans } = data;
  const items = plans.items;
  return (
    <section className="bg-[#f6f9fc] mx-[-18px]" name="section3">
      <div className="container">
        <h2>{plans.title}</h2>
        <div className="plans-container flex flex-wrap gap-5 justify-center bg-white rounded-3xl mx-5 py-5 xl:max-w-[1170px] xl:flex xl:m-auto xl:py-14 xl:px-[115px] xl:gap-5">
          {items.map((item) => (
            <PlanItem key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
