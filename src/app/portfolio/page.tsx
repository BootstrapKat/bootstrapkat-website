'use client';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '@/data/projectData';
import PortCard from '../components/PortCard';
import { PortCardProps } from '../components/PortCard';
import { ProjectCardProps } from '../components/ProjectCard';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <Layout>
      <main className="">
        <section className="max-w-7xl mx-auto mb-12 text-center p-4 lg:p-0">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 py-8">Portfolio</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Below you’ll find recent work I’ve shipped along with a few frontend challenges that help me keep sharp.
          </p>
          <p className="text-sm mt-6 max-w-xl mx-auto">
            These projects reflect the past few years of my work. Earlier ones have since been sunset, but helped shape the developer I am today.
          </p>
          {/* Decorative Leaves - Hidden on Mobile & Tablet */}
          <Image
            src="/hero-leaves.png"
            alt="Decorative Leaves"
            width={280}
            height={180}
            className="hidden lg:block absolute top-0 right-0 -translate-y-6"
            style={{
              width: "clamp(160px, 18vw, 480px)",
              height: "auto",
            }}
          />
        </section>


        {/* Portfolio Projects */}
        <section className="max-w-7xl mx-auto mb-20 p-4 lg:p-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectData
              .filter((proj) => proj.type === "portfolio")
              .map((project, index) => (
                <PortCard key={index} {...(project as PortCardProps)} />
              ))}
          </div>
        </section>

        {/* Front End Exercises Section */}
        <section className="bg-black text-white pb-12">
          <div className="max-w-7xl mx-auto p-4 lg:p-0">
            <h2 className="text-3xl font-bold mb-8 text-center pt-12">Front End Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData
                .filter((proj) => proj.type === "exercise")
                .map((project, index) => (
                  <ProjectCard key={index} {...(project as ProjectCardProps)} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
