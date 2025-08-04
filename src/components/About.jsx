import about from "../assets/images/about.png";
function About() {
  return (
    <div className="w-full py-16 bg-[#fffaf0]">
      <h2 className="font-bold text-4xl text-center mb-12 text-[#3e2723]">
        Our Story
      </h2>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <img
            src={about}
            alt="about_image"
            className="rounded-3xl w-full h-auto duration-300 hover:shadow-lg hover:shadow-black object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-4 text-[#3e2723]">
          <h3 className="text-3xl font-semibold">From Where We Started</h3>
          <p className="text-base leading-relaxed font-light max-w-prose text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quo repudiandae modi sit repellat vitae amet atque commodi culpa
            nulla ipsam ad sapiente iste pariatur, suscipit accusantium ducimus
            voluptatem optio!
            <br />
            <br />
            Ratione, nostrum maxime aperiam facere commodi culpa sunt assumenda
            atque! Officia doloremque dolores iste reprehenderit, voluptates
            libero repellendus officiis optio delectus et quisquam aliquam
            vitae. Enim, impedit tempore? A!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
