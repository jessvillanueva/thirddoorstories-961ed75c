import { Link } from "react-router-dom";

interface EssayCardProps {
  readTime: string;
  title: string;
  thesis: string;
  href: string;
  image?: string;
  external?: boolean;
}

const EssayCard = ({ readTime, title, thesis, href, image, external }: EssayCardProps) => {
  const content = (
    <>
      {image && (
        <div className="w-full aspect-[2/1] overflow-hidden rounded-lg -mt-1">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <span className="body-small text-foreground/[0.35]">{readTime}</span>
      <h3 className="group-hover:text-primary transition-colors">{title}</h3>
      <p className="body-small text-foreground/[0.65] flex-1">{thesis}</p>
      <span className="text-primary body-small font-medium mt-2">Read essay →</span>
    </>
  );

  const className = "card-surface p-6 flex flex-col gap-3 group hover:bg-[hsl(var(--card-highlight))] hover:border-border/[0.20] transition-all duration-200";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  );
};

export default EssayCard;
