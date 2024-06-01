import { Link, animateScroll as scroll } from "react-scroll";
const MenuLink = ({ menuLink }) => {
  return (
    <Link
      to={menuLink?.name}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      href={menuLink?.url}
      className="link"
    >
      {menuLink?.title}
    </Link>
  );
};

export default MenuLink;
