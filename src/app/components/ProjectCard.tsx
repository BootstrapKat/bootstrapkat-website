import Image from 'next/image';

export interface ProjectCardProps {
  title: string;
  projectUrl: string;
  repoUrl: string;
  imageSrc?: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  projectUrl,
  repoUrl,
  imageSrc,
  description = '',
}) => {
  return (
    <div className="border border-white pb-6 flex flex-col justify-between">
      {imageSrc && (
        <div className="relative w-full h-40 mb-4 overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="px-6">
        <h3 className="text-xl font-bold">{title}</h3>
        {description && <p className="mt-2">{description}</p>}
        <div className="flex mt-4 space-x-4">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white py-2 px-4 rounded transform transition duration-300 ease-in-out hover:scale-105"
          >
            View Project
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 rounded transform transition duration-300 ease-in-out hover:scale-105"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
