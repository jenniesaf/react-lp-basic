import "./footer.css";
import FooterLinks from "./footerLinks";
import LogoDark from "../logoDark";
import Socials from "../socials";

const Footer = () => {
  return (
    <footer
      className="pt-5 mb-12 flex flex-col items-center gap-5 text-center"
      name="section5"
    >
      <div className="container">
        <LogoDark />
        <p className="contact-info py-5 xl:text-xl">
          contact us by email email@email.com <br />
          or by phone: +123456789
        </p>
        <div className="footer-menu flex flex-row flex-wrap max-w-[90%] m-auto gap-5 justify-center">
          <FooterLinks />
        </div>
        <Socials />
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
