import Image from "next/image";

//Import images
import astro from "@/public/images/space.jpg";
import astro_mob from "@/public/images/space-mob.jpg";
import bubble from "@/public/images/bubble.png";

const Bubble = ({ size, index }) => {
  return (
    <Image
      priority
      sizes="(max-width: 1100px) 100vw"
      src={bubble}
      width={size}
      height={size}
      alt="bubble"
      className={`bubble bubble${index}`}
    />
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <Image
        className="astro astro_desk"
        fill
        quality={100}
        priority={true}
        src={astro}
        alt="Astronaut"
        sizes="(max-width: 1100px) 100vw"
      />
      <Image
        className="astro astro_mob"
        quality={100}
        fill
        priority={true}
        src={astro_mob}
        alt="Astronaut"
        sizes="(max-width: 500px) 100vw"
      />
      <Bubble size={70} index={1} />
      <Bubble size={90} index={2} />
      <Bubble size={100} index={3} />
      <Bubble size={120} index={4} />
      <Bubble size={150} index={5} />
      <Bubble size={200} index={6} />
    </div>
  );
};

export default Hero;
