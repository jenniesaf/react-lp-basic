const Header = () => {
  return (
    <>
      <div className="container mx-auto relative">
        <div className="w-full flex xl:justify-between absolute items-center mt-5">
          <div className="logo mx-auto xl:mx-0 xl:mt-5">
            <img
              src="/assets/logo-bright.png"
              className="h-[64px] w-full"
              alt=""
            />
          </div>

          <div className="hamburger xl:hidden">
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
          <div className="hidden xl:flex desktop-menu xl:text-white xl:gap-5 xl:mt-5 uppercase">
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
    </>
  );
};

export default Header;
