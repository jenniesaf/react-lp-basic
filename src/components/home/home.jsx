import About from "../about/about";
import Categories from "../categories/categories";
import Features from "../features/features";
import Footer from "../footer/footer";
import Header from "../header/header";
import Hero from "../hero/hero";
import Plans from "../plans/plans";

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
