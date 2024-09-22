interface ProjectCardProps {
  title: string;
  projectUrl: string;
  repoUrl: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  projectUrl,
  repoUrl,
  description = '',
}) => {
  return (
    <div className="bg-[#cad2c51f] shadow-md rounded-lg p-6 flex flex-col justify-between">
      <h3 className="text-xl font-bold">{title}</h3>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      <div className="flex mt-4 space-x-4">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#84a98c] text-white py-2 px-4 rounded transform transition duration-300 ease-in-out hover:bg-[#52796f] hover:scale-105"
        >
          View Project
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white py-2 px-4 rounded transform transition duration-300 ease-in-out hover:bg-gray-700 hover:scale-105"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
