import Image from "next/image";

export interface PortCardProps {
    title: string;
    description: string;
    tech: string;
    logo: string;
    link?: string;
    linkLabel?: string;
}
  

export default function PortCard({
  title,
  description,
  tech,
  logo,
  link,
  linkLabel = "View Project",
}: PortCardProps) {
  return (
    <div className="border-black border p-6 flex flex-col md:flex-row md:items-start gap-4 transition-transform duration-300 ease-in-out hover:scale-[1.015] hover:shadow-md">
      <Image
        src={logo}
        alt={`${title} logo`}
        width={48}
        height={48}
        className="mb-4 md:mr-4"
      />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2">
          {description}
        </p>
        <p className="mt-2"><strong>Technologies:</strong> {tech}</p>
        {link && (
          <div className="mt-4">
            <a
              href={link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkLabel}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
