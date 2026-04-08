import launchImage from "@/assets/launch-post.jpeg";

const FeaturedPost = () => {
  return (
    <a
      href="https://thirddoorstories.substack.com/p/welcome-to-the-underworld"
      target="_blank"
      rel="noopener noreferrer"
      className="card-surface overflow-hidden flex flex-col md:flex-row group hover:bg-[hsl(var(--card-highlight))] hover:border-border/[0.20] transition-all duration-200"
    >
      <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
        <img
          src={launchImage}
          alt="Welcome to the underworld"
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center gap-4">
        <span className="overline text-primary">Featured · Unlatched</span>
        <h2 className="group-hover:text-primary transition-colors">
          Welcome to the underworld.
        </h2>
        <p className="body-base text-foreground/[0.65]">
          Can stories of young people creating their own opportunities from lived constraints be as common as college application essays by 2030?
        </p>
        <span className="text-primary body-small font-medium mt-2">Read on Substack →</span>
      </div>
    </a>
  );
};

export default FeaturedPost;
