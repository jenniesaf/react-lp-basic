import data from "./../../data/data.json";

const Heading = () => {
  const { heading } = data;
  console.log("heading", heading);
  return <h2></h2>;
};

export default Heading;
