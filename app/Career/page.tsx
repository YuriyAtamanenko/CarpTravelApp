"use client";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  mail: string;
  position: string;
  tel: number;
  confirm: boolean;
  message: string;
};

export default function Career() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    if (!data.confirm) return alert("Please, touch confirm");

    console.log(data);
    reset();
  });

  return (
    <section className="career section py-20" id="career">
      <div className="flex container h-full mx-auto max-w-7xl p-6">
        <div className="w-1/2 pr-3">
          <h2 className="text-8xl font-thin uppercase leading-tight tracking-[-3.92px]">
            CHOOSE <span className="font-medium">US</span>
          </h2>
          <p className="mt-6 ml-32 uppercase text-4xl font-extralight">
            Why us ?
          </p>
          <ul className="mt-11 flex flex-col  gap-6">
            <li className="flex  justify-end">
              <h3 className="text-lg font-normal leading-6">
                Professional development
              </h3>
              <p className="text-xs font-extralight leading-6 w-72 ml-6">
                We offer growth opportunities and a creative environment to
                nurture your talents.
              </p>
            </li>
            <li className="flex  justify-end">
              <h3 className="text-lg font-normal leading-6">Teamwork</h3>
              <p className="text-xs font-extralight leading-6 w-72 ml-6">
                Join our close-knit family, where support and inspiration
                abound.
              </p>
            </li>
            <li className="flex  justify-end">
              <h3 className="text-lg font-normal leading-6">
                Stimulating work environment
              </h3>
              <p className="text-xs font-extralight leading-6 w-72 ml-6">
                Flexibility and remote options for a comfortable experience.
              </p>
            </li>
            <li className="flex  justify-end">
              <h3 className="text-lg font-normal leading-6">
                Exciting challenges
              </h3>
              <p className="text-xs font-extralight leading-6 w-72 ml-6">
                Unleash your potential through unforgettable projects showcasing
                Carpathian beauty.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-1/2 pl-3">
          <p className="mt-4 ml-auto text-lg font-extralight leading-6 w-72 text-justify">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
          <p className="mt-8 text-lg font-extralight leading-6 w-60">
            Don&apos;t miss your opportunity! Fill out the form right now and
            join our team!
          </p>
          <form autoComplete="off" onSubmit={onSubmit} className="flex mt-3">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="name"
                className="flex flex-col text-xs font-extralight leading-6  tracking-[2.4px]  relative"
              >
                Full name
                <input
                  {...register("name", {
                    required: true,
                    minLength: 2,
                    maxLength: 30,
                  })}
                  className="bg-white/5 w-72 h-7 mt-[4px] px-2 py-0.5 text-xl leading-6 "
                  placeholder="John Smith"
                />
                {errors.name && (
                  <span className="absolute right-3 bottom-[-20px] text-[#FF5757] text-xs font-extralight">
                    Incorrect name
                  </span>
                )}
              </label>
              <label
                htmlFor="mail"
                className="mt-6 flex flex-col text-xs font-extralight leading-6 tracking-[2.4px] relative"
              >
                E-mail
                <input
                  {...register("mail", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  className="bg-white/5 w-72 h-7  mt-[4px] px-2 py-0.5 text-xl leading-6"
                  placeholder="johnsmith@email.com"
                />
                {errors.mail && (
                  <span className="absolute right-3 bottom-[-20px] text-[#FF5757] text-xs font-extralight">
                    Invalid email
                  </span>
                )}
              </label>
              <label
                htmlFor="position"
                className="mt-6 flex flex-col text-xs font-extralight leading-6 tracking-[2.4px]  relative"
              >
                Position
                <input
                  {...register("position", { required: true })}
                  className="bg-white/5 w-72 h-7  mt-[4px] px-2 py-0.5 text-xl leading-6"
                  placeholder="Movie maker"
                />
                {errors.position && (
                  <span className="absolute right-3 bottom-[-20px] text-[#FF5757] text-xs font-extralight">
                    Required field
                  </span>
                )}
              </label>
              <label
                htmlFor="tel"
                className="mt-6 flex flex-col text-xs font-extralight leading-6 relative tracking-[2.4px]"
              >
                Phone
                <input
                  {...register("tel", { required: true })}
                  className="bg-white/5 w-72 h-7  mt-[4px] px-12 py-0.5 text-xl leading-6"
                  placeholder="(097) 12 34 567
"
                />
                <span className="text-xl leading-6 absolute top-[30px]">
                  +38
                </span>
                {errors.tel && (
                  <span className="absolute right-3 bottom-[-20px] text-[#FF5757] text-xs font-extralight">
                    Incorrect phone
                  </span>
                )}
              </label>

              <label className="mt-9 w-72 flex items-start">
                <input
                  type="checkbox"
                  {...register("confirm")}
                  className="mt-[4px] bg-white/5"
                />
                <span className="text-xs font-extralight leading-6 ml-2">
                  I confirm my consent to the processing of personal data.
                </span>
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="message"
                className="flex flex-col text-xs font-extralight leading-6 ml-auto  tracking-[2.4px]"
              >
                Message
                <textarea
                  {...register("message")}
                  className="bg-white/5 w-72 h-[268px] mt-[4px] px-2 py-0.5 text-xl leading-6"
                />
              </label>
              <button
                type="submit"
                className="mt-6 ml-auto text-3xl font-medium"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
