export default function About() {
  return (
    <section className="about section py-20" id="about">
      <div className="flex container h-full mx-auto max-w-7xl p-6">
        <div className="w-1/2 flex flex-col justify-between ">
          <h2 className="text-8xl font-thin uppercase leading-tight tracking-[-3.92px]">
            WHO <span className="font-medium">WE ARE</span>
          </h2>
          <p className="text-lg font-extralight leading-6">
            <span className="font-normal">We use methods</span> that are
            time-tested and proven. Our expert guides with in-depth knowledge of
            the Carpathian landscapes lead you safely through the mysteries of
            these mountains.
          </p>
        </div>
        <div className="w-1/4">
          <p className="text-lg font-extralight leading-6">
            <span className="font-normal">a team of enthusiasts</span> who are
            fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
          <p className="text-lg font-extralight mt-6 leading-6">
            <span className="font-normal">We believe</span> that nature has the
            power to inspire, strengthen character and provide new perspectives.
            Therefore, each of our tours is aimed at unlocking your potential,
            enriching your spiritual world and creating unforgettable memories.
          </p>
        </div>
        <div className="w-1/4 flex content-end flex-wrap">
          <p className="flex flex-col">
            <span className="text-lg font-normal leading-6 uppercase">
              From vacationers
            </span>
            <span className="ml-auto text-lg font-normal leading-6 uppercase">
              to active travelers
            </span>
            <span className="text-lg font-extralight leading-6 tracking-[2.16px]">
              we have a tour for everyone.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
