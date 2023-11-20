import Image from "next/image";

import homeImage from "./assets/images/home-image.jpg";

export default function Home() {
  return (
    <section className="lg:homeGrid flex flex-col gap-3 px-5 py-20 lg:m-auto lg:max-w-[1200px] lg:py-40">
      <Image
        alt="Home image"
        src={homeImage}
        className="lg:homeGrid__image w-full -scale-x-100 rounded-2xl object-cover shadow-2xl lg:h-[570px] lg:max-w-[380px]"
      />

      <h1 className="lg:homeGrid__title relative font-druk text-2xl text-white lg:self-end lg:text-6xl lg:leading-snug">
        Turn Your Website Into Your Best Sales Person
      </h1>

      <p className="lg:homeGrid__body leading-6 text-white lg:max-w-[80%] lg:self-end lg:text-xl">
        Triple your sales with a pixel-perfect website. At SmartSite Studio, we
        don&apos;t just design and write code, we build a revenue-driving
        machine for your business.
      </p>

      <div className="lg:homeGrid__actions flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:self-start">
        <button className="w-full rounded-full bg-orange px-4 py-4 font-druk text-sm text-white lg:w-max lg:px-10">
          Talk to Us
        </button>

        <button className="w-full rounded-full border border-blue px-4 py-4 font-druk text-sm text-white lg:w-max lg:px-10">
          See Portfolio
        </button>
      </div>
    </section>
  );
}
