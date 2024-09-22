interface DesignCardProps {
  title: string;
  imageSrc?: string;
  xdLink?: string;
  onClick: () => void;
  className?: string;
  tabindex?: string;
}

const DesignCard: React.FC<DesignCardProps> = ({
  title,
  imageSrc,
  xdLink,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={`bg-[#cad2c51f] shadow-md rounded-lg p-6 flex flex-col justify-between h-full ${className}`}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="mt-2 max-h-64 object-cover border-2 border-black cursor-pointer" // Set consistent image height and add pointer cursor
          onClick={onClick} // Clicking the image opens the modal
        />
      )}
      {xdLink && (
        <a
          href={xdLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-4 hover:underline"
        >
          View Full XD Design
        </a>
      )}
    </div>
  );
};

export default DesignCard;
