import Image from "next/image";
import ImgServices05 from "../../public/ImgServices05.jpg";

export default function Services05() {
  return (
    <section className="services05 section py-20" id="services">
      <div className="flex container h-full mx-auto max-w-7xl p-6">
        <div className="w-1/2">
          <h2 className="text-8xl font-thin uppercase leading-tight tracking-[-3.92px] mb-[18px]">
            WE <span className="font-medium">OFFER</span>
          </h2>
          <Image src={ImgServices05} alt="ATVs Traveling" />
        </div>
        <div className="flex justify-between w-1/2 pl-2">
          <div>
            <span className="text-8xl font-thin leading-tight">
              05/<span className="text-white/20">05</span>
            </span>
            <ul className="flex flex-col gap-6 mt-5 text-[28px] font-extralight leading-6 opacity-50 w-56">
              <li>ATVs Traveling</li>
              <li>Rock climbing</li>
              <li>Hot air ballooning</li>
              <li>Skydiving</li>
              <li>Rafting</li>
            </ul>
          </div>

          <p className="text-lg font-extralight leading-6 w-[294px] text-justify mt-auto ml-auto">
            Join exciting rafting expeditions on the waterways of the
            Carpathians. Go through challenging waterways and overcome gusty
            waves, feel the adrenaline, and enjoy the incredible views of the
            surrounding mountains.
          </p>
        </div>
      </div>
    </section>
  );
}
