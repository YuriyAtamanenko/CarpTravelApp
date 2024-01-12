"use client";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  mail: string;
  message: string;
};

export default function Contacts() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <section className="contacts section py-20" id="contacts">
      <div className="flex flex-col container h-full mx-auto max-w-7xl p-6">
        <h2 className="text-8xl font-thin uppercase leading-tight tracking-[-3.92px]">
          CONTACT <span className="font-medium">US</span>
        </h2>
        <div className="flex mt-[70px] ">
          <div className="w-1/2 pr-3">
            <div className="flex flex-col">
              <ul className="flex flex-col">
                <li className="flex  justify-end">
                  <p className="text-lg font-normal leading-6">
                    +38 (098) 12 34 567 <br />
                    +38 (073) 12 34 567
                  </p>
                  <p className="text-xs font-extralight leading-6 w-72 ml-6">
                    Phone number
                  </p>
                </li>
                <li className="flex  justify-end mt-16">
                  <a
                    href="mailto:support@carptravel.com"
                    className="text-lg font-normal leading-6"
                  >
                    support@carptravel.com
                  </a>
                  <p className="text-xs font-extralight leading-6 w-72 ml-6">
                    E-mail
                  </p>
                </li>
                <li className="flex  justify-end mt-[132px]">
                  <div className="flex flex-col text-lg font-normal leading-6">
                    <a href="#">facebook</a>
                    <a href="#">instagram</a>
                    <a href="#">youtube</a>
                    <a href="#">tiktok</a>
                  </div>
                  <p className="text-xs font-extralight leading-6 w-72 ml-6">
                    Follow us
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2 pl-3">
            <form
              autoComplete="off"
              onSubmit={onSubmit}
              className="flex flex-col"
            >
              <div className="flex justify-between ">
                <label
                  htmlFor="name"
                  className="flex flex-col text-xs font-extralight leading-6  tracking-[2.4px]"
                >
                  Full name
                  <input
                    {...register("name", { required: true, maxLength: 30 })}
                    className="bg-white/5 w-72 h-7 mt-[4px] px-2 py-0.5 text-xl leading-6 "
                    placeholder="John Smith"
                  />
                </label>
                <label
                  htmlFor="mail"
                  className="flex flex-col text-xs font-extralight leading-6 tracking-[2.4px]"
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
                </label>
              </div>

              <label
                htmlFor="message"
                className="flex flex-col text-xs font-extralight leading-6 tracking-[2.4px] mt-[44px]"
              >
                Message
                <textarea
                  {...register("message")}
                  className="bg-white/5 h-[174px] mt-[4px] px-2 py-0.5 text-xl leading-6"
                />
              </label>
              <button
                type="submit"
                className="mt-6 ml-auto text-3xl font-medium"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
