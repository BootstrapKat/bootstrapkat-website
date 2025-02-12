import Link from 'next/link';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Intro/About Section */}
        <section className="relative p-8 mb-8 md:mb-12 md:p-12 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          {/* Background image with opacity */}
          <div className="absolute inset-0 bg-[url('/homepage-bg.png')] bg-cover bg-center bg-no-repeat opacity-5"></div>

          {/* Circular Image */}
          <div className="relative z-10 mb-6 md:mb-0 md:mr-8">
            <img
              src="/portrait.jpg"
              alt="Bootstrap Kat"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg object-cover border-2 border-white"
            />
          </div>

          {/* Content on top of the background */}
          <div className="relative z-10 flex-grow">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold playfair text-[#2F3E46]">
              Turning Ideas into Code
              <br />
              I’m Bootstrap Kat, Frontend Developer
            </h1>
            <ul className="mt-6 text-lg text-[#2F3E46] custom-bullets list-disc list-inside">
              <li>
                Frontend dev, quick to adapt and contribute across tech stacks.
              </li>
              <li>Thrives in team environments and remote work.</li>
              <li>
                Host of <strong>Wind Down Wednesday</strong>, sharing magical,
                calming tunes.
              </li>
              <li>
                Enjoys hiking, gardening, gaming, and fabric arts like crochet
                and cross stitch.
              </li>
            </ul>
          </div>
        </section>

        {/* Professional Links and Portfolio Button */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-center">
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/megankatanderson/"
            target="_blank"
            className="relative block bg-cover bg-center h-40 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
            style={{ backgroundImage: "url('/button1.jpg')" }}
            aria-label="Visit my LinkedIn profile"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-[#84A98C] bg-opacity-60 hover:bg-opacity-80 transition duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-bold">LinkedIn</span>
            </div>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/BootstrapKat"
            target="_blank"
            className="relative block bg-cover bg-center h-40 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
            style={{ backgroundImage: "url('/button2.jpg')" }}
            aria-label="Visit my Github profile"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 transition duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-bold">GitHub</span>
            </div>
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="relative block bg-cover bg-center h-40 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
            style={{ backgroundImage: "url('/button3.jpg')" }}
            aria-label="Check out my resume in PDF"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-[#52796F] bg-opacity-60 hover:bg-opacity-80 transition duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Resume</span>
            </div>
          </a>

          {/* Portfolio Button */}
          <Link
            href="/portfolio"
            className="relative block bg-cover bg-center h-40 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundImage: "url('/button4.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#354F52] bg-opacity-60 hover:bg-opacity-80 transition duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Portfolio</span>
            </div>
          </Link>
        </section>

        {/* Wind Down Wednesday Teaser (Banner Section) */}
        <section className="w-full bg-[#FEFBC4] text-[#3C2624] py-12 px-8 rounded-lg shadow-md text-center mb-12">
          <h2 className="text-3xl font-bold playfair mb-4 text-[#3C2624]">
            Wind Down Wednesday
          </h2>
          <p className="text-lg text-[#3C2624]">
            Tune in to my weekly radio show for some peaceful vibes and magical
            sounds.
            <br /> Listen to the latest episode or make a request for next week!
          </p>
          <Link
            href="/wednesday"
            className="mt-6 inline-block bg-[#9B6A9C] text-white py-3 px-6 rounded shadow-md hover:bg-[#98A17A] cursor-pointer"
          >
            Visit Wind Down Wednesday
          </Link>
        </section>
      </div>
    </Layout>
  );
}
