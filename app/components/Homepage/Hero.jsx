import Image from "next/image";
import Link from "next/link";

//Import images
import astro from "@/public/images/space.jpg";
import astro_mob from "@/public/images/space-mobile.jpg";
import bubble from "@/public/images/bubble.png";
import arrow from "@/public/images/arrow3.png";

const Bubble = ({ size, index }) => {
  return (
    <Image
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        priority={true}
        src={astro}
        alt="Astronaut"
      />
      <Image
        className="astro astro_mob"
        fill
        priority={true}
        src={astro_mob}
        alt="Astronaut"
      />
      <Bubble size={70} index={1} />
      <Bubble size={90} index={2} />
      <Bubble size={100} index={3} />
      <Bubble size={120} index={4} />
      <Bubble size={150} index={5} />
      <Bubble size={200} index={6} />
      <Link href="#welcome">
        <Image
          className="arrow"
          src={arrow}
          width={50}
          height={50}
          alt="Continue"
        />
      </Link>
    </div>
  );
};

export default Hero;
