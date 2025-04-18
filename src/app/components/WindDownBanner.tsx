import Link from "next/link";
import Image from "next/image";

export default function WindDownBanner() {
  return (
    <section className="border-b border-black py-32 px-10 md:px-0 w-screen text-center relative">
      <h2 className="text-2xl md:text-4xl font-bold">Wind Down Wednesday</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        Tune into my weekly radio show for some good vibes. Listen to the latest episode
        or make a request for next week!
      </p>
      <Link
        href="/wednesday"
        className="inline-block mt-6 px-6 py-3 border border-black text-lg font-medium hover:bg-black hover:text-white transition-colors"
      >
        Visit Wind Down Wednesday
      </Link>

      {/* Leaves should be inside the layout wrapper, not constrained to the section */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <Image
          src="/banner-leaves.png"
          alt="Decorative Leaves"
          width={526}
          height={418}
          className="absolute bottom-16 right-0 z-[2]"
          style={{
            width: "clamp(160px, 30vw, 380px)",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
}
