const App = () => {
  return (
    <div>
      <div className="App">
        <div className="container">
          <div className="header">
            <div className="logo"></div>
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
            <div className="hide-mobile desktop-menu">
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
          <div className="content">
            <div className="hero">
              <h1>
                SIMSISTERS <br />
                STUDIO
              </h1>
            </div>
            <section className="photos">
              <h2>Photography Shooting</h2>
              <div className="content-wrap">
                <figure>
                  <img src={require("./assets/family.jpg")} alt="" />
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
                    <span>Kids</span> - Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Donec venenatis neque eu est feugiat, in
                    malesuada lectus luctus.
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
            </section>
            <section className="prices">
              <h2>How It Works</h2>
              <div className="plans">
                <div className="plan">
                  <img src={require("./assets/basic.jpg")} alt="" />
                  <h3 className="plan-title">BASIC SESSION</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec venenatis neque eu est feugiat, in malesuada lectus
                    luctus.
                  </p>
                  <button className="more">Learn More</button>
                </div>
                <div className="plan">
                  <img src={require("./assets/wedding2.jpg")} alt="" />
                  <h3 className="plan-title">wedding</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec venenatis neque eu est feugiat, in malesuada lectus
                    luctus.
                  </p>
                  <button className="more">Learn More</button>
                </div>
                <div className="plan">
                  <img src={require("./assets/lookbook.jpg")} alt="" />
                  <h3 className="plan-title">LOOKBOOK</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec venenatis neque eu est feugiat, in malesuada lectus
                    luctus.
                  </p>
                  <button className="more">Learn More</button>
                </div>
                <div className="plan">
                  <img src={require("./assets/fashion2.jpg")} alt="" />
                  <h3 className="plan-title">FASHION</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec venenatis neque eu est feugiat, in malesuada lectus
                    luctus.
                  </p>
                  <button className="more">Learn More</button>
                </div>
              </div>
            </section>
            <section className="prints">
              <h2>Art And Prints</h2>
              <div className="items-wrapper">
                <div className="art-item">
                  <img src={require("./assets/portrait.jpg")} alt="" />
                  <div className="item-description">
                    <p>
                      <span>Portrait</span> - Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec venenatis neque eu est
                      feugiat, in malesuada lectus luctus.
                    </p>
                  </div>
                </div>
                <div className="art-item">
                  <img src={require("./assets/bw.jpg")} alt="" />
                  <div className="item-description">
                    <p>
                      <span>Black & White</span> - Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec venenatis neque eu est
                      feugiat, in malesuada lectus luctus.
                    </p>
                  </div>
                </div>
                <div className="art-item">
                  <img src={require("./assets/illustration.jpg")} alt="" />
                  <div className="item-description">
                    <p>
                      <span>Illustrations</span> - Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Donec venenatis neque eu est
                      feugiat, in malesuada lectus luctus.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="about">
              <div className="about-wrapper">
                <h2>
                  Hi! Nice to meet you. <br />
                  We're SimSisters
                </h2>
                <div className="about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                  <p>
                    Donec venenatis neque eu est feugiat, in malesuada lectus
                    luctus. Sed rhoncus libero ac nibh consectetur pharetra.
                    Nulla nec egestas lorem.
                  </p>
                  <p>
                    Quisque sodales posuere elementum. Proin venenatis finibus
                    ex, et pulvinar augue posuere ut. Praesent sed commodo urna.
                  </p>
                  <p>
                    Maecenas at tortor finibus ligula dictum tincidunt sit amet
                    pulvinar est. Curabitur eget libero efficitur, luctus tortor
                    quis, luctus lorem.
                  </p>
                </div>
                <img src={require("./assets/self.jpg")} alt="" />
              </div>
            </section>
            <footer>
              <img
                src={require("./assets/logo-dark.png")}
                alt=""
                className="logo"
              />
              <p className="contact-info">
                contact us by email email@email.com <br />
                or by phone: +123456789
              </p>
              <div className="footer-menu">
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
              <div className="socials-wrapper">
                <ul className="socials">
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
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
