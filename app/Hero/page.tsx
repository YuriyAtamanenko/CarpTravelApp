import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero pb-20 pt-24">
      <div className="container mx-auto max-w-7xl outline p-6">
        <h1>Uncover Carpathian’s Secrets</h1>
        <p>
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p>7 DAYS JOURNEY</p>
        <p>
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <Link href="#contacts">JOIN NOW</Link>
      </div>
    </section>
  );
}
