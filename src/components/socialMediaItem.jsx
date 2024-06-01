const SocialMediaItem = ({ socials, index }) => {
  return (
    <>
      {socials.map((social) => (
        <li
          className="list-none"
          key={social?.id}
          social={social}
          index={index}
        >
          <a href={social?.url} rel="noreferrer" target="_blank">
            <img src={social?.imgUrl} alt={social?.title} />
          </a>
        </li>
      ))}
    </>
  );
};

export default SocialMediaItem;
