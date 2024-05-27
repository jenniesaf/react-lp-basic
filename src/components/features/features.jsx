import FeatureItem from "../feature/feature";
import data from "./../../data/data.json";

const Features = () => {
  const { features } = data;
  const items = features.items;

  return (
    <section>
      <div className="container">
        <h2>{features.title}</h2>
        <div className="art-items-wrapper xl:flex xl:gap-5">
          {items.map((item, index) => (
            <FeatureItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
