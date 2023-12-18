import Image from "next/image";
import ImgServices04 from "../../public/ImgServices04.jpg";

interface ISlideToProps {
  slideTo: (index: number) => void;
}

export default function Services04({ slideTo }: ISlideToProps) {
  return (
    <section className="services04 section py-20" id="services">
      <div className="flex container h-full mx-auto max-w-7xl p-6">
        <div className="w-1/2">
          <h2 className="text-8xl font-thin uppercase leading-tight tracking-[-3.92px] mb-[18px]">
            WE <span className="font-medium">OFFER</span>
          </h2>
          <Image src={ImgServices04} alt="ATVs Traveling" />
        </div>
        <div className="flex justify-between w-1/2 pl-2">
          <div>
            <span className="text-8xl font-thin leading-tight">
              04/<span className="text-white/20">05</span>
            </span>
            <ul className="flex flex-col gap-6 mt-5 text-[28px] font-extralight leading-6 w-56">
              <li className="opacity-100">
                <button onClick={() => slideTo(0)} className="opacity-50">
                  ATVs Traveling
                </button>
              </li>
              <li>
                <button onClick={() => slideTo(1)} className="opacity-50">
                  Rock climbing
                </button>
              </li>
              <li>
                <button
                  onClick={() => slideTo(2)}
                  className="opacity-50 text-left"
                >
                  Hot air ballooning
                </button>
              </li>
              <li>
                <button onClick={() => slideTo(3)} className="font-medium">
                  Skydiving
                </button>
              </li>
              <li>
                <button onClick={() => slideTo(4)} className="opacity-50">
                  Rafting
                </button>
              </li>
            </ul>
          </div>

          <p className="text-lg font-extralight leading-6 w-[294px] text-justify mt-auto ml-auto">
            Fly in the sky over the Carpathians! Experienced instructors will
            help you realize your dream of free flight. Remember the incredible
            emotions and panoramas from a bird&apos;s eye view forever.
          </p>
        </div>
      </div>
    </section>
  );
}
