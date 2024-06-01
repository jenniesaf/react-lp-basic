import About from "./about";
import Categories from "./categories";
import Features from "./features";
import Footer from "./footer/footer";
import Header from "./header/header";
import Hero from "./hero";
import Plans from "./plans";

const Home = () => {
  return (
    <div className="px-[18px]">
      <Header />
      <Hero />
      <Categories />
      <Plans />
      <Features />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
