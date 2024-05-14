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
                  <a href="" className="link">
                    photos
                  </a>
                  <a href="" className="link">
                    prints
                  </a>
                  <a href="" className="link">
                    prices
                  </a>
                  <a href="" className="link">
                    contact
                  </a>
                  <a href="" className="link">
                    about
                  </a>
                </div>
              </div>
              <div className="hidden xl:flex desktop-menu">
                <a href="" className="link">
                  photos
                </a>
                <a href="" className="link">
                  prints
                </a>
                <a href="" className="link">
                  prices
                </a>
                <a href="" className="link">
                  contact
                </a>
                <a href="" className="link">
                  about
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="hero h-[400px] mx-[-18px] xl:h-[615px]">
              <div className="container px-[18px] xl:mx-16">
                <h1 className="text-4xl text-white font-light pt-[230px] text-center xl:text-8xl xl:text-left">
                  SIMSISTERS <br />
                  STUDIO
                </h1>
              </div>
            </div>
            <section className="photos">
              <div className="container">
                <h2>Photography Shooting</h2>
                <div className="content-wrap xl:flex xl:gap-5 xl:justify-center xl:mx-16">
                  <figure>
                    <img
                      src={require("./assets/family.jpg")}
                      className=""
                      alt=""
                    />
                    <figcaption>
                      <span>Family</span> - Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec venenatis neque eu est
                      feugiat, in malesuada lectus luctus.
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={require("./assets/wedding1.jpg")} alt="" />
                    <figcaption>
                      <span>Wedding</span> - Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec venenatis neque eu est
                      feugiat, in malesuada lectus luctus.
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={require("./assets/kids.jpg")} alt="" />
                    <figcaption>
                      <span>Kids</span> - Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec venenatis neque eu est
                      feugiat, in malesuada lectus luctus.
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={require("./assets/fashion1.jpg")} alt="" />
                    <figcaption>
                      <span>Fashion</span> - Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec venenatis neque eu est
                      feugiat, in malesuada lectus luctus.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className="prices bg-[#f6f9fc] mx-[-18px]">
              <div className="container">
                <h2>How It Works</h2>
                <div className="plans flex flex-wrap gap-5 justify-center bg-white rounded-3xl mx-5 py-5 xl:max-w-[1170px] xl:flex xl:m-auto xl:py-14 xl:px-[115px] xl:gap-5">
                  <div className="plan">
                    <img src={require("./assets/basic.jpg")} alt="" />
                    <h3>BASIC SESSION</h3>
                    <p className="mb-4 xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <p className="hidden mb-4 xl:block xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <p className="hidden mb-4 xl:block xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <button className="more">Learn More</button>
                  </div>
                  <div className="plan">
                    <img src={require("./assets/wedding2.jpg")} alt="" />
                    <h3 className="plan-title">WEDDING</h3>
                    <p className="mb-4 xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <p className="hidden mb-4 xl:block xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <p className="hidden mb-4 xl:block xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <button className="more">Learn More</button>
                  </div>
                  <div className="plan">
                    <img src={require("./assets/lookbook.jpg")} alt="" />
                    <h3 className="plan-title">LOOKBOOK</h3>
                    <p className="mb-4 xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <p className="hidden mb-4 xl:block xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <p className="hidden mb-4 xl:block xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <button className="more">Learn More</button>
                  </div>
                  <div className="plan">
                    <img src={require("./assets/fashion2.jpg")} alt="" />
                    <h3 className="plan-title">FASHION</h3>
                    <p className="mb-4 xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <p className="hidden mb-4 xl:block xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <p className="hidden mb-4 xl:block xl:before:inline-block xl:before:h-[7px] xl:before:w-[7px] xl:before:bg-[#454545] xl:before:rounded-full xl:before:mr-4 xl:before:mb-[1px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus.
                    </p>
                    <button className="more">Learn More</button>
                  </div>
                </div>
              </div>
            </section>
            <section className="prints">
              <div className="container">
                <h2>Art And Prints</h2>
                <div className="items-wrapper xl:flex xl:gap-5">
                  <div className="art-item">
                    <img src={require("./assets/portrait.jpg")} alt="" />
                    <div className="item-description">
                      <p>
                        <span>Portrait</span> - Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Donec venenatis neque eu
                        est feugiat, in malesuada lectus luctus.
                      </p>
                    </div>
                  </div>
                  <div className="art-item flex-row-reverse xl:flex-row">
                    <img src={require("./assets/bw.jpg")} alt="" />
                    <div className="item-description ps-2">
                      <p>
                        <span>Black & White</span> - Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Donec venenatis neque eu
                        est feugiat, in malesuada lectus luctus.
                      </p>
                    </div>
                  </div>
                  <div className="art-item">
                    <img src={require("./assets/illustration.jpg")} alt="" />
                    <div className="item-description">
                      <p>
                        <span>Illustrations</span> - Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Donec venenatis neque eu
                        est feugiat, in malesuada lectus luctus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="about bg-[#f6f9fc] mx-[-18px] pb-10">
              <div className="container px-[18px]">
                <h2>
                  Hi! Nice to meet you. <br />
                  We're SimSisters
                </h2>
                <div className="about-wrapper xl:flex xl:gap-5 xl:flex-row-reverse">
                  <div className="about-content text-center pb-10 xl:text-left xl:items-center">
                    <p className="mb-4 xl:text-2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="mb-4 xl:text-2xl">
                      Donec venenatis neque eu est feugiat, in malesuada lectus
                      luctus. Sed rhoncus libero ac nibh consectetur pharetra.
                      Nulla nec egestas lorem.
                    </p>
                    <p className="mb-4 xl:text-2xl">
                      Quisque sodales posuere elementum. Proin venenatis finibus
                      ex, et pulvinar augue posuere ut. Praesent sed commodo
                      urna.
                    </p>
                    <p className="mb-4 xl:text-2xl">
                      Maecenas at tortor finibus ligula dictum tincidunt sit
                      amet pulvinar est. Curabitur eget libero efficitur, luctus
                      tortor quis, luctus lorem.
                    </p>
                  </div>
                  <img
                    src={require("./assets/self.jpg")}
                    className="w-full max-w-[576px]"
                    alt=""
                  />
                </div>
              </div>
            </section>
            <footer className=" pt-5 mb-12 flex flex-col items-center gap-5 text-center">
              <div className="container">
                <img
                  src={require("./assets/logo-dark.png")}
                  alt=""
                  className="logo xl:my-5 mx-auto"
                />
                <p className="contact-info py-5 xl:text-xl">
                  contact us by email email@email.com <br />
                  or by phone: +123456789
                </p>
                <div className="footer-menu flex flex-row flex-wrap max-w-[90%] m-auto gap-5 justify-center">
                  <a href="" className="link xl:text-xl">
                    photos
                  </a>
                  <a href="" className="link xl:text-xl">
                    prints
                  </a>
                  <a href="" className="link xl:text-xl">
                    prices
                  </a>
                  <a href="" className="link xl:text-xl">
                    contact
                  </a>
                  <a href="" className="link xl:text-xl">
                    about
                  </a>
                </div>
                <div className="socials-wrapper">
                  <ul className="socials flex gap-5 m-auto justify-center py-5 items-center p-0">
                    <li className="social-item">
                      <a href="" className="instagram" target="_blank">
                        <img src={require("./assets/instagram.png")} alt="" />
                      </a>
                    </li>
                    <li className="social-item">
                      <a href="" className="facebook" target="_blank">
                        <img src={require("./assets/facebook.png")} alt="" />
                      </a>
                    </li>
                    <li className="social-item">
                      <a href="" className="tiktok" target="_blank">
                        <img src={require("./assets/tiktok.png")} alt="" />
                      </a>
                    </li>
                    <li className="social-item">
                      <a href="" className="youtube" target="_blank">
                        <img src={require("./assets/youtube.png")} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
