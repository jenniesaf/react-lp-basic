import data from "./../../data/data.json";

const About = () => {
  const { about } = data;
  return (
    <section className="about bg-[#f6f9fc] mx-[-18px] pb-10">
      <div className="container px-[18px]">
        <h2 dangerouslySetInnerHTML={{ __html: `${about.title}` }}></h2>
        <div className="about-wrapper xl:flex xl:gap-5 xl:flex-row-reverse">
          <div className="about-content text-center pb-10 xl:text-left xl:items-center">
            <p className="mb-4 xl:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mb-4 xl:text-2xl">
              Donec venenatis neque eu est feugiat, in malesuada lectus luctus.
              Sed rhoncus libero ac nibh consectetur pharetra. Nulla nec egestas
              lorem.
            </p>
            <p className="mb-4 xl:text-2xl">
              Quisque sodales posuere elementum. Proin venenatis finibus ex, et
              pulvinar augue posuere ut. Praesent sed commodo urna.
            </p>
            <p className="mb-4 xl:text-2xl">
              Maecenas at tortor finibus ligula dictum tincidunt sit amet
              pulvinar est. Curabitur eget libero efficitur, luctus tortor quis,
              luctus lorem.
            </p>
          </div>
          <img
            src="/assets/self.jpg"
            className="w-full max-w-[576px] m-auto"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
