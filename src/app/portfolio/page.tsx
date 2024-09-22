'use client';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import DesignCard from '../components/DesignCard';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDesign, setCurrentDesign] = useState<{
    imageSrc?: string;
    xdLink?: string;
  } | null>(null);

  const openModal = (design: { imageSrc?: string; xdLink?: string }) => {
    setCurrentDesign(design);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentDesign(null);
  };

  // Handle Esc key to close the modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <Layout>
      <div role="main" className="min-h-screen p-2 md:p-8 text-[#2F3E46]">
        {/* Intro Section */}
        <section className="mb-8">
          <h1 className="text-4xl font-extrabold">Portfolio</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Projects that showcase my work in frontend development.
          </p>
        </section>

        {/* Live Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Google Next Frontend */}
            <div className="bg-[#cad2c51f] shadow-md rounded-lg p-6 md:flex md:justify-center">
              <img
                src="/logos/google.png"
                alt=""
                className="h-12 mb-4 md:mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">Google Next Frontend</h3>
                <p className="mt-2 text-gray-700">
                  <strong>
                    Contributed to the frontend development of Google Next.
                  </strong>
                  <br />
                  <br />
                  Worked in a team to build a scalable user interface using
                  modern frameworks for high performance.
                </p>
                <p className="mt-2 text-gray-500">Technologies: Vue</p>
                <div className="mt-4">
                  <a
                    href="https://cloud.withgoogle.com/next"
                    className="text-blue-500  hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Event Site
                  </a>
                </div>
              </div>
            </div>

            {/* Customizable Components for Brand Sites */}
            <div className="bg-[#cad2c51f] shadow-md rounded-lg p-6 md:flex md:justify-center">
              <img
                src="/logos/drupal.png"
                alt=""
                className="h-12 mb-4 md:mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">Site Builder</h3>
                <p className="mt-2 text-gray-700">
                  <strong>
                    Built customizable frontend components for brand sites.
                  </strong>
                  <br />
                  <br />
                  Developed flexible components in Drupal, allowing
                  non-developers to customize layouts without coding.
                </p>
                <p className="mt-2 text-gray-500">
                  Technologies: Coupled Drupal
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.merrickpetcare.com"
                    className="text-blue-500  hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Merrick Pet Care
                  </a>
                  <a
                    href="https://www.zukes.com"
                    className="text-blue-500  hover:underline ml-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Zuke's
                  </a>
                </div>
              </div>
            </div>

            {/* FreightMatch Mobile App Authentication Flow */}
            <div className="bg-[#cad2c51f] shadow-md rounded-lg p-6 md:flex md:justify-center">
              <img src="/logos/ats.png" alt="" className="h-12 mb-4 md:mr-4" />
              <div>
                <h3 className="text-xl font-bold">Auth Flow FreightMatch</h3>
                <p className="mt-2 text-gray-700">
                  <strong>
                    Developed the authentication flow for the FreightMatch
                    mobile app.
                  </strong>
                  <br />
                  <br />
                  Implemented user login, error handling, and password recovery
                  using Vanilla JavaScript.
                </p>
                <p className="mt-2 text-gray-500">
                  Technologies: Vanilla JavaScript
                </p>
                <div className="mt-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.atsinc.freightmatch&hl=en-US&pli=1"
                    className="text-blue-500  hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View FreightMatch Mobile App
                  </a>
                </div>
              </div>
            </div>

            {/* Google Summer of Code Frontend */}
            <div className="bg-[#cad2c51f] shadow-md rounded-lg p-6 md:flex md:justify-center">
              <img
                src="/logos/google.png"
                alt=""
                className="h-12 mb-4 md:mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">
                  Google Summer of Code Frontend
                </h3>
                <p className="mt-2 text-gray-700">
                  <strong>
                    Contributed to frontend development for Google Summer of
                    Code.
                  </strong>
                  <br />
                  <br />
                  Collaborated with the team to create a seamless Front End
                  experience using Angular.
                </p>
                <p className="mt-2 text-gray-500">Technologies: Angular</p>
                <div className="mt-4">
                  <a
                    href="https://summerofcode.withgoogle.com/"
                    className="text-blue-500  hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Google Summer of Code
                  </a>
                </div>
              </div>
            </div>

            {/* Onboarding Web Experience */}
            <div className="bg-[#cad2c51f] shadow-md rounded-lg p-6 md:flex md:justify-center">
              <img
                src="/logos/nextjs.png"
                alt=""
                className="h-12 mb-4 md:mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">Onboarding Web Experience</h3>
                <p className="mt-2 text-gray-700">
                  <strong>
                    Maintained a confidential customer onboarding web
                    experience.
                  </strong>
                  <br />
                  <br />
                  Ensured smooth functionality and implemented improvements
                  using Next.js.
                </p>
                <p className="mt-2 text-gray-500">
                  Technologies: Next.js, Web Maintenance
                </p>
              </div>
            </div>

            {/* Navy 3-M Program Web Applications */}
            <div className="bg-[#cad2c51f] shadow-md rounded-lg p-6 md:flex md:justify-center">
              <img src="/logos/navy.png" alt="" className="h-12 mb-4 md:mr-4" />
              <div>
                <h3 className="text-xl font-bold">
                  Navy 3-M Program Web Applications
                </h3>
                <p className="mt-2 text-gray-700">
                  <strong>
                    Developed and maintained web applications for the Navy’s 3-M
                    Program.
                  </strong>
                  <br />
                  <br />
                  Built Angular 2+ applications for Fleet use, enhancing secure
                  web development during my CompTIA certification.
                </p>
                <p className="mt-2 text-gray-500">
                  Technologies: Angular 2+, Web Application Maintenance
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.antechsystems.com/pms-support/"
                    className="text-blue-500  hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More About the Navy 3-M Program
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Designs Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">UI/UX Design (2018-2019)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DesignCard
              title="Discount RV"
              imageSrc="/mocks/discountrvs.png"
              onClick={() => openModal({ imageSrc: '/mocks/discountrvs.png' })}
              tabindex="0"
            />
            <DesignCard
              title="Gregg Orr"
              imageSrc="/mocks/greggorr.png"
              onClick={() => openModal({ imageSrc: '/mocks/greggorr.png' })}
              tabindex="0"
            />
            <DesignCard
              title="Terry Frazer's RV"
              imageSrc="/mocks/terry.png"
              onClick={() => openModal({ imageSrc: '/mocks/terry.png' })}
              tabindex="0"
            />
            <DesignCard
              title="Robbin's Camper Sales"
              imageSrc="/mocks/robbins.jpg"
              onClick={() => openModal({ imageSrc: '/mocks/robbins.jpg' })}
              tabindex="0"
            />
            <DesignCard
              title="Ballards Camping Center"
              imageSrc="/mocks/ballards.png" // Screenshot of the XD file
              xdLink="https://xd.adobe.com/view/4e8ead70-cfcb-46e0-4d89-cdde930e245f-38bf/?fullscreen&hints=off"
              onClick={() => openModal({ imageSrc: '/mocks/ballards.png' })}
              tabindex="0"
            />
            <DesignCard
              title="Gammon Equipment Co."
              imageSrc="/mocks/gammon.png" // Screenshot of the XD file
              xdLink="https://xd.adobe.com/view/e6dddc2a-c80e-424a-59c2-d9be9da8525c-90ec/?fullscreen&hints=off"
              onClick={() => openModal({ imageSrc: '/mocks/gammon.png' })}
              tabindex="0"
            />
          </div>
        </section>

        {/* Front End Exercises Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Front End Exercises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Article Preview Component"
              projectUrl="https://bootstrapkat.github.io/article-preview-component-master/"
              repoUrl="https://github.com/BootstrapKat/article-preview-component-master?tab=readme-ov-file"
            />
            <ProjectCard
              title="Four Card Feature Section"
              projectUrl="https://bootstrapkat.github.io/four-card-feature-section/"
              repoUrl="https://github.com/BootstrapKat/four-card-feature-section"
            />
            <ProjectCard
              title="Social Proof Section"
              projectUrl="https://bootstrapkat.github.io/social-proof-section-master/"
              repoUrl="https://github.com/BootstrapKat/social-proof-section-master"
            />
            <ProjectCard
              title="Coding Bootcamp's Testimonials Slider"
              projectUrl="https://bootstrapkat.github.io/coding-bootcamp-testimonials-slider/"
              repoUrl="https://github.com/BootstrapKat/coding-bootcamp-testimonials-slider"
            />
          </div>
        </section>

        {/* Modal */}
        {currentDesign && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            imageSrc={currentDesign.imageSrc}
            role="dialog"
            aria-modal="true"
          />
        )}
      </div>
    </Layout>
  );
}
