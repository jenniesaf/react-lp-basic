import About from "./components/about/about";
import Categories from "./components/categories/categories";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Plans from "./components/plans/plans";

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="px-[18px]">
          <div className="header">
            <div className="container">
              <div className="logo"></div>

              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="mobile-menu-wrapper hidden">
                <div className="hamburger-menu">
                  <a href="https://github.com/jenniesaf" className="link">
                    photos
                  </a>
                  <a href="https://github.com/jenniesaf" className="link">
                    prints
                  </a>
                  <a href="https://github.com/jenniesaf" className="link">
                    prices
                  </a>
                  <a href="https://github.com/jenniesaf" className="link">
                    contact
                  </a>
                  <a href="https://github.com/jenniesaf" className="link">
                    about
                  </a>
                </div>
              </div>
              <div className="hidden xl:flex desktop-menu">
                <a href="https://github.com/jenniesaf" className="link">
                  photos
                </a>
                <a href="https://github.com/jenniesaf" className="link">
                  prints
                </a>
                <a href="https://github.com/jenniesaf" className="link">
                  prices
                </a>
                <a href="https://github.com/jenniesaf" className="link">
                  contact
                </a>
                <a href="https://github.com/jenniesaf" className="link">
                  about
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="hero h-[400px] mx-[-18px] xl:h-[615px]">
              <div className="container px-[18px] xl:px-16">
                <h1 className="text-4xl text-white font-light pt-[230px] text-center xl:text-8xl xl:text-left">
                  SIMSISTERS <br />
                  STUDIO
                </h1>
              </div>
            </div>
            <section className="photos">
              <div className="container">
                <h2>Photography Shooting</h2>
                <Categories />
              </div>
            </section>
            <section className="prices bg-[#f6f9fc] mx-[-18px]">
              <div className="container">
                <h2>How It Works</h2>
                <Plans />
              </div>
            </section>
            <section className="prints">
              <div className="container">
                <h2>Art And Prints</h2>
                <Features />
              </div>
            </section>
            <About />
            <footer className=" pt-5 mb-12 flex flex-col items-center gap-5 text-center">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
