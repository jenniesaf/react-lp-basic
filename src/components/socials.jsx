import SocialMediaItem from "./socialMediaItem";

const Socials = () => {
  const socials = [
    {
      id: 1,
      url: "#",
      imgUrl: "/assets/facebook.png",
    },
    {
      id: 2,
      url: "#",
      imgUrl: "/assets/instagram.png",
    },
    {
      id: 3,
      url: "#",
      imgUrl: "/assets/tiktok.png",
    },
    {
      id: 4,
      url: "#",
      imgUrl: "/assets/youtube.png",
    },
  ];
  return (
    <>
      <div className="socials-wrapper">
        <ul className="socials flex gap-5 m-auto justify-center py-5 items-center p-0">
          <SocialMediaItem socials={socials} />
        </ul>
      </div>
    </>
  );
};

export default Socials;
