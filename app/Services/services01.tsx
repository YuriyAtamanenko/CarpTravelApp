import Image from "next/image";
import ImgServices01 from "../../public/ImgServices01.jpg";

export default function Services01() {
  return (
    <section className="services01 section py-20" id="services">
      <div className="container h-full mx-auto max-w-7xl p-6">
        <h2>WE OFFER</h2>
        <Image src={ImgServices01} alt="ATVs Traveling" />
        <span>01/05</span>
        <ul>
          <li>ATVs Traveling</li>
          <li>Rock climbing</li>
          <li>Hot air ballooning</li>
          <li>Skydiving</li>
          <li>Rafting</li>
        </ul>
        <p>
          Join exciting rafting expeditions on the waterways of the Carpathians.
          Go through challenging waterways and overcome gusty waves, feel the
          adrenaline, and enjoy the incredible views of the surrounding
          mountains.
        </p>
      </div>
    </section>
  );
}
