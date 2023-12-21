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
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

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
                className="flex flex-col text-xs font-extralight leading-6"
              >
                Full name
                <input {...register("name")} className="bg-white/5 w-72 h-7" />
              </label>
              <label
                htmlFor="mail"
                className="flex flex-col text-xs font-extralight leading-6"
              >
                E-mail
                <input {...register("mail")} className="bg-white/5 w-72 h-7" />
              </label>
              <label
                htmlFor="position"
                className="flex flex-col text-xs font-extralight leading-6"
              >
                Position
                <input
                  {...register("position")}
                  className="bg-white/5 w-72 h-7"
                />
              </label>

              <label
                htmlFor="tel"
                className="flex flex-col text-xs font-extralight leading-6"
              >
                Phone
                <input {...register("tel")} className="bg-white/5 w-72 h-7" />
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("confirm")}
                  className="bg-white/5"
                />
                <span className="text-xs font-extralight leading-6">
                  I confirm my consent to the processing of personal data.
                </span>
              </label>
            </div>
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="message"
                className="flex flex-col text-xs font-extralight leading-6"
              >
                Message
                <textarea
                  {...register("message")}
                  className="bg-white/5 w-72 h-64"
                />
              </label>
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
