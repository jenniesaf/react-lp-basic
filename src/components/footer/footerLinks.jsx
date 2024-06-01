import MenuLink from "../menuLink";

const FooterLinks = () => {
  const menuLinks = [
    {
      id: 1,
      title: "photos",
      name: "section1",
    },
    {
      id: 2,
      title: "prints",
      name: "section2",
    },
    {
      id: 3,
      title: "prices",
      name: "section3",
    },
    {
      id: 4,
      title: "contact",
      name: "section4",
    },
    {
      id: 5,
      title: "about",
      name: "section5",
    },
  ];
  return (
    <>
      {menuLinks.map((menuLink, index) => (
        <MenuLink key={menuLink?.id} menuLink={menuLink} index={index} />
      ))}
    </>
  );
};

export default FooterLinks;
