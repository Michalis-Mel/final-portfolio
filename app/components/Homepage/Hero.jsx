import Image from "next/image";
import astro from "@/public/space.jpg";
import astro_mob from "@/public/space-mobile.jpg";
import bubble from "@/public/bubble.png";
const Hero = () => {
  return (
    <div className="hero">
      <Image
        className="astro_desk"
        fill
        priority={true}
        src={astro}
        alt="Astronaut"
      />
      <Image
        className="astro_mob"
        fill
        priority={true}
        src={astro_mob}
        alt="Astronaut"
      />
      <div className="hero_txt hero_txt1">
        <Image fill src={bubble} alt="bubble" />
        <h3>Welcome aboard, buckle up & enjoy the ride!</h3>
      </div>
      <div className="hero_txt hero_txt2">
        <Image fill src={bubble} alt="bubble" />
        <h3>Explore M² Portfolio&apos;s Celestial Wonders</h3>
      </div>
      <div className="hero_txt hero_txt3">
        <Image fill src={bubble} alt="bubble" />
        <h3>
          Welcome aboard, buckle up & enjoy the ride! <br />
          Explore M² Portfolio&apos;s Celestial Wonders
        </h3>
      </div>
    </div>
  );
};

export default Hero;
