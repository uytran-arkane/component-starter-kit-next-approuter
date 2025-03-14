import '../../styles/globals.css';

interface ArrowLinkProps {
  text: string;
  link: string;
  color?: string;
  isWrapped?: boolean;
  ['aria-label']?: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
  text,
  link,
  color = 'white',
  isWrapped = false,
  'aria-label': ariaLabel,
}) => {
  const base = 'font-display text-label-small uppercase text-';
  return (
    <div className="arrow_container group flex items-center transition-all duration-200">
      <div className="w-16">
        <svg width="96" height="7" viewBox="0 0 96 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="rarrow">
          <g id="rarrow">
            <path className="line" d="M64 3.5L59 0.613249V6.38675L64 3.5ZM0 4H59.5V3H0V4Z" fill="gray" />
          </g>
        </svg>
      </div>
      <div className="flex items-center gap-2 pl-2 transition-all duration-200 ease-linear group-hover:pl-[20px]">
        {!isWrapped && (
          <a href={link} className={base + color} aria-label={ariaLabel}>
            {text}
          </a>
        )}
        {isWrapped && <div className={base + color}>{text}</div>}
      </div>
    </div>
  );
};

export default ArrowLink;
