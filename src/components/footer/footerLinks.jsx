import Link from "../link";

const FooterLinks = () => {
  const menuLinks = [
    {
      id: 1,
      title: "photos",
      url: "https://github.com/jenniesaf1",
    },
    {
      id: 2,
      title: "prints",
      url: "https://github.com/jenniesaf2",
    },
    {
      id: 3,
      title: "prices",
      url: "https://github.com/jenniesaf3",
    },
    {
      id: 4,
      title: "contact",
      url: "https://github.com/jenniesaf4",
    },
    {
      id: 5,
      title: "about",
      url: "https://github.com/jenniesaf5",
    },
  ];
  return (
    <>
      {menuLinks.map((menuLink, index) => (
        <Link key={menuLink?.id} menuLink={menuLink} index={index} />
      ))}
    </>
  );
};

export default FooterLinks;
