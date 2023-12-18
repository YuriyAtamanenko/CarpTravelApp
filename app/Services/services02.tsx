import Image from "next/image";
import ImgServices02 from "../../public/ImgServices02.jpg";

interface ISlideToProps {
  slideTo: (index: number) => void;
}

export default function Services02({ slideTo }: ISlideToProps) {
  return (
    <section className="services02 section py-20" id="services">
      <div className="flex container h-full mx-auto max-w-7xl p-6">
        <div className="w-1/2">
          <h2 className="text-8xl font-thin uppercase leading-tight tracking-[-3.92px] mb-[18px]">
            WE <span className="font-medium">OFFER</span>
          </h2>
          <Image src={ImgServices02} alt="ATVs Traveling" />
        </div>
        <div className="flex justify-between w-1/2 pl-2">
          <div>
            <span className="text-8xl font-thin leading-tight">
              02/<span className="text-white/20">05</span>
            </span>
            <ul className="flex flex-col gap-6 mt-5 text-[28px] font-extralight leading-6 w-56">
              <li>
                <button onClick={() => slideTo(0)} className="opacity-50">
                  ATVs Traveling
                </button>
              </li>
              <li className="relative">
                <button onClick={() => slideTo(1)} className="font-medium">
                  Rock climbing
                </button>
                <p className="absolute text-xs font-extralight tracking-[2.4px] top-0 left-[315px] w-[300px]">
                  Destroy your limitations
                </p>
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
                <button onClick={() => slideTo(3)} className="opacity-50">
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
            Overcome the peaks of the Carpathians in a unique way - climbing.
            Make your own way to the heights and find inner peace in the embrace
            of the mighty rocks.
          </p>
        </div>
      </div>
    </section>
  );
}
