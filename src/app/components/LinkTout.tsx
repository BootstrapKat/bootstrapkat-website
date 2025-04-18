import Link from "next/link";
import Image from "next/image";

export default function SocialLinks() {
  return (
    <section className="border-b border-black py-10 w-screen" aria-labelledby="cta-heading">
      <div className="flex flex-col items-center text-center px-4 mb-8">
        <h2 id="cta-heading" className="text-2xl font-bold mb-2">
          Let’s <span className="text-green-700">grow</span> something good together 🌿
        </h2>
        <p className="max-w-xl text-base">
          I build clean interfaces with calm, user-friendly flows. I'm all about tech with heart.
          If you're curious how I work,{" "}
          <span className="text-[#6700F9] font-medium">let’s dig in</span>.
        </p>
      </div>

      <ul className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-20 w-full" role="list">
        
        {/* LinkedIn */}
        <li>
          <Link
            href="https://www.linkedin.com/in/megankatanderson/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
            aria-label="Visit my LinkedIn profile"
          >
            <span className="text-xl font-bold">LinkedIn</span>
            <Image
              src="/linkedin.png"
              alt=""
              width={174}
              height={72}
              role="presentation"
            />
          </Link>
        </li>

        {/* Resume */}
        <li>
          <Link
            href="https://drive.google.com/file/d/1AQcjYBcM7R-ygjSiJYxVfeefHUIjDMtq/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
            aria-label="Open my resume as a PDF"
          >
            <span className="text-xl font-bold">Resume</span>
            <Image
              src="/resume.png"
              alt=""
              width={72}
              height={72}
              role="presentation"
            />
          </Link>
        </li>

        {/* GitHub */}
        <li>
          <Link
            href="https://github.com/BootstrapKat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
            aria-label="View my GitHub projects"
          >
            <span className="text-xl font-bold">GitHub</span>
            <Image
              src="/github.png"
              alt=""
              width={72}
              height={72}
              role="presentation"
            />
          </Link>
        </li>

        {/* Portfolio */}
        <li>
          <Link
            href="/portfolio"
            className="flex flex-col items-center gap-2"
            aria-label="Go to my portfolio page"
          >
            <span className="text-xl font-bold">Portfolio</span>
            <Image
              src="/portfolio.png"
              alt=""
              width={72}
              height={72}
              role="presentation"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}
