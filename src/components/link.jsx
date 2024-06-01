const Link = ({ menuLink }) => {
  return (
    <a href={menuLink?.url} className="link">
      {menuLink?.title}
    </a>
  );
};

export default Link;
