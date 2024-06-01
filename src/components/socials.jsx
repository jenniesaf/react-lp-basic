import SocialMediaItem from "./socialMediaItem";

const Socials = () => {
  const socials = [
    {
      id: 1,
      url: "https://github.com/jenniesaf1",
      imgUrl: "/assets/facebook.png",
    },
    {
      id: 2,
      url: "https://github.com/jenniesaf2",
      imgUrl: "/assets/instagram.png",
    },
    {
      id: 3,
      url: "https://github.com/jenniesaf3",
      imgUrl: "/assets/tiktok.png",
    },
    {
      id: 4,
      url: "https://github.com/jenniesaf4",
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
