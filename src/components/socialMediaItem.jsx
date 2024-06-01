const SocialMediaItem = ({ socials, index }) => {
  return (
    <>
      {socials.map((social) => (
        <li className="list-none">
          <a
            href={social?.url}
            rel="noreferrer"
            target="_blank"
            key={social?.id}
            social={social}
            index={index}
          >
            <img src={social?.imgUrl} alt={social?.title} />
          </a>
        </li>
      ))}
    </>
  );
};

export default SocialMediaItem;
