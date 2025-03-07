import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-screen border-t border-b border-black relative">
      <div className="grid grid-cols-12 items-center h-auto">
        {/* QR Code Section (Hidden on Mobile & Tablet) */}
        <div className="hidden lg:flex col-span-3 flex-col items-center justify-center overflow-hidden">
          <Image
            src="/wartqr.svg"
            alt="Scan for WART 95.5 FM"
            width={288} 
            height={288}
          />
          <p className="text-left text-4xl mt-4">Scan for <br />WART 95.5 FM</p>
        </div>

        {/* Hero Text & Avatar Section */}
        <div className="col-span-12 md:col-span-9 px-6 py-8 border-l border-black grid grid-cols-12 gap-4">
          {/* Name + Avatar Row */}
          <div className="col-span-12 md:col-span-7 flex flex-col">
            <h1 className="text-3xl md:text-7xl">Bootstrap Kat</h1>
            <h2 className="text-3xl md:text-7xl">Front End<br/> Developer</h2>
          </div>
          <div className="col-span-12 md:col-span-3 flex items-center justify-center md:justify-start relative z-[3]">
            <Image
              src="/BootstrapKatAvatar.svg"
              alt="Avatar of Bootstrap Kat"
              width={210}
              height={274}
              className="z-10"
            />
          </div>

          {/* Bullet List */}
          <ul className="col-span-12 mt-6 text-base leading-relaxed">
            <li>• Frontend dev who jumps into new tech stacks like it's a game.</li>
            <li>• Plays well with teams, thrives in remote work, and keeps the digital world running smoothly.</li>
            <li>• Host of <em>Wind Down Wednesday</em>, where I spin tunes to help you unplug and unwind.</li>
            <li>• Lover of dirt (gardening), pixels (gaming), and stitches (fabric arts).</li>
            <li>• Known to disappear into the woods for a good hike.</li>
          </ul>
        </div>
      </div>

      {/* Decorative Leaves - Hidden on Mobile & Tablet */}
      <Image
        src="/hero-leaves.png"
        alt="Decorative Leaves"
        width={280}
        height={180}
        className="hidden lg:block absolute top-0 right-0 -translate-y-6 z-[2]"
        style={{
          width: "clamp(160px, 18vw, 480px)",
          height: "auto",
        }}
      />


    </section>
  );
}
