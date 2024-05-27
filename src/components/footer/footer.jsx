const Footer = () => {
  return (
    <footer className=" pt-5 mb-12 flex flex-col items-center gap-5 text-center">
      <div className="container">
        <img
          src="/assets/logo-dark.png"
          alt=""
          className="logo xl:my-5 mx-auto"
        />
        <p className="contact-info py-5 xl:text-xl">
          contact us by email email@email.com <br />
          or by phone: +123456789
        </p>
        <div className="footer-menu flex flex-row flex-wrap max-w-[90%] m-auto gap-5 justify-center">
          <a href="https://github.com/jenniesaf" className="link xl:text-xl">
            photos
          </a>
          <a href="https://github.com/jenniesaf" className="link xl:text-xl">
            prints
          </a>
          <a href="https://github.com/jenniesaf" className="link xl:text-xl">
            prices
          </a>
          <a href="https://github.com/jenniesaf" className="link xl:text-xl">
            contact
          </a>
          <a href="https://github.com/jenniesaf" className="link xl:text-xl">
            about
          </a>
        </div>
        <div className="socials-wrapper">
          <ul className="socials flex gap-5 m-auto justify-center py-5 items-center p-0">
            <li className="social-item instagram">
              <a
                href="https://github.com/jenniesaf"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/assets/instagram.png" alt="" />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://github.com/jenniesaf"
                className="facebook"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/assets/facebook.png" alt="" />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://github.com/jenniesaf"
                rel="noreferrer"
                className="tiktok"
                target="_blank"
              >
                <img src="/assets/tiktok.png" alt="" />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://github.com/jenniesaf"
                rel="noreferrer"
                className="youtube"
                target="_blank"
              >
                <img src="/assets/youtube.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs text-center m-auto lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{" "}
            <a href="https://github.com/jenniesaf" rel="nofollow">
              Jennie Safronov
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
