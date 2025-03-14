import Link from "next/link";
import Image from "next/image";

export default function SocialLinks() {
  return (
    <section className="border-b border-black py-8 w-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-20 md:gap-28 w-full">
        
        {/* LinkedIn */}
        <Link href="https://linkedin.com/in/yourprofile" target="_blank" className="flex flex-col items-center gap-2">
          <span className="text-xl font-bold">LinkedIn</span>
          <Image src="/linkedin.png" alt="LinkedIn" width={174} height={72} />
        </Link>

        {/* Resume */}
        <Link href="/resume.pdf" target="_blank" className="flex flex-col items-center gap-2">
          <span className="text-xl font-bold">Resume</span>
          <Image src="/resume.png" alt="Resume" width={72} height={72} />
        </Link>

        {/* GitHub */}
        <Link href="https://github.com/yourusername" target="_blank" className="flex flex-col items-center gap-2">
          <span className="text-xl font-bold">GitHub</span>
          <Image src="/github.png" alt="GitHub" width={72} height={72} />
        </Link>

        {/* Portfolio */}
        <Link href="/portfolio" className="flex flex-col items-center gap-2">
          <span className="text-xl font-bold">Portfolio</span>
          <Image src="/portfolio.png" alt="Portfolio" width={72} height={72} />
        </Link>
      </div>
    </section>
  );
}
