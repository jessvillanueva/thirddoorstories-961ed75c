import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import logo1517 from "@/assets/1517-logo.png";
import logoResidency from "@/assets/residency-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20 max-w-[720px] animate-fade-in">

        {/* Hero */}
        <span className="overline text-foreground/[0.35]">
          About Third Door Stories
        </span>
        <h1 className="mt-6 mb-8">
          I investigate the paths most people don&apos;t know exist.
        </h1>

        <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
          <p>
            Alex Banayan wrote that life is like a nightclub.
          </p>
          <p>
            There&apos;s the main entrance where 99% of people wait in line. There&apos;s the VIP
            door for people who were born knowing the right names. And then there&apos;s the third
            door: the one down the alley where you have to bang on it a hundred times, sneak
            through the kitchen, and figure it out as you go.
          </p>
          <p>
            There&apos;s always a way in. Most people just never find out it exists.
          </p>
          <p>
            If you&apos;ve ever felt stuck between{" "}
            <span className="italic">&quot;get a degree or you&apos;ll fall behind&quot;</span> and{" "}
            <span className="italic">&quot;drop out and go hustle in San Francisco,&quot;</span>{" "}
            you already know the problem. Nobody shows you what&apos;s actually in between.
          </p>
          <p>
            Third Door Stories is a small documentary studio and essay lab mapping the hidden
            builder ecosystem most guidance counselors have never heard of.
          </p>
        </div>

        <hr className="my-16 border-foreground/10" />

        {/* The Information Gap */}
        <section className="flex flex-col gap-6">
          <h2>The Information Gap No One Talks About</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              At 15 or 16, I was staring down three options.
            </p>
            <p>
              Door 1 was a $52K business degree and a comfortable scripted career. Door 2 was the
              elite connections and inherited access I didn&apos;t have. Door 3 was a path I
              couldn&apos;t fully name yet, something about actually learning to help people from
              scratch, through building and freelancing on my own terms.
            </p>
            <p>
              Nobody pointed me to Door 3.
            </p>
            <p>
              I found it by accident, through persistence and overhearing whispers in communities I
              barely had access to. What changed everything was realizing the real infrastructure for
              taking unconventional risks in your 20s already exists. It just stays invisible unless
              you happen to find the right person, Discord server, or dinner table first.
            </p>
            <p>
              Most people never find it.
            </p>
            <p>
              And nobody has fully pieced it together beyond scattered forums and spreadsheets.
              That&apos;s the gap Third Door Stories exists to close.
            </p>
          </div>
        </section>

        <hr className="my-16 border-foreground/10" />

        {/* My Story */}
        <section className="flex flex-col gap-6">
          <h2>My Story</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              When I was 14, I finished my work early in class, convinced my teachers to excuse me,
              and rode a bus every month to crash a science club where kids played with fire and blew
              up bottles with baking soda and vinegar.
            </p>
            <p>
              It wasn&apos;t the chemistry that got me.
            </p>
            <p>
              It was the ceiling reset. Being around people who treated experimentation as completely
              normal quietly changed what felt possible.
            </p>
            <p>
              A few years later I repeated that move at bigger scales. I found Socratica, V2, 1517
              Fund, and The Residency. Not through school newsletters or guidance office posters.
              Through late night DMs, side chats, and half hidden posts.
            </p>
            <p>
              Same kid, different rooms. Completely different ceiling.
            </p>
            <p>
              The difference was never my ability. It was my environment. That&apos;s the whole thesis
              of this project.
            </p>
            <p>
              By 16 I could see the full default track ahead of me: business school, consulting, a
              respectable career. And for the first time I felt, quietly and clearly, that it probably
              wouldn&apos;t be fulfilling.
            </p>
            <p>
              I&apos;d spent enough time doing real business cases early to de-romanticize the
              fantasy. Spending seven more years optimizing for that path would have been educational.
              I just wasn&apos;t confident the other side was any greener.
            </p>
            <p>
              So I pivoted.
            </p>
            <p>
              From a full degree to a five course adult diploma. From the Sauder path to independent
              building in social good and documentary filmmaking.
            </p>
            <p>
              Along the way I earned my way into the builder world one step at a time:
            </p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>A $1,000 Medici grant from 1517 Fund, no pitch deck required</li>
              <li>A Top 20 finish in The Residency&apos;s Delta Chapter II out of over 1,500 participants globally, as the only filmmaker in the cohort</li>
              <li>Buildspace S5, completed, with a trip to San Francisco for demo day</li>
              <li>Time at Socratica nodes, V2, Cansbridge, and other builder communities quietly producing people and projects that deserved far more attention than they got</li>
            </ul>
            <p>
              The first unsolicited person who paid for the Patreon told me exactly what she valued.
            </p>
            <p className="italic">
              &quot;The part about the hacker houses, residencies, and microgrants.&quot;
            </p>
            <p>
              That was the moment documenting this world felt necessary as a long term project, not a
              one-off film.
            </p>
          </div>
        </section>

        <hr className="my-16 border-foreground/10" />

        {/* A Map of the Messy Middle */}
        <section className="flex flex-col gap-6">
          <h2>A Map of the Messy Middle</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              Third Door Stories is a documentary series and essay lab about the identity shifts,
              critical decisions, and messy middles of builders who took the third door and the real
              infrastructure that made it viable.
            </p>
            <p>
              Episodes run 10 to 20 minutes and focus on the parts that don&apos;t fit neatly on a
              résumé.
            </p>
            <p>
              Money stress. Program departures. Family conversations. The months when nothing works.
              Outcomes are context, not the whole story.
            </p>
            <p>
              The first pilot was shot during Delta Chapter II, a three week builder sprint hosted by
              The Residency where I placed Top 20 out of over 1,500 participants globally. It was a
              27 minute conversation with Brian Scudamore, founder of 1-800-GOT-JUNK?, using
              borrowed gear.
            </p>
            <p>
              From cold email to public launch in 24 days. Early revenue. First Patreon supporters.
              Proof there&apos;s real appetite for this kind of documentation.
            </p>
            <p>
              What I&apos;m mapping across documentary episodes, essays, and posts:
            </p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Microgrants like 1517 Medici, Emergent Ventures, and Bagel Fund</li>
              <li>Residencies like Nautilus and The Residency</li>
              <li>Hacker houses like FR8 and ecosystems in SF, Waterloo, and Vancouver</li>
              <li>Builder communities like Socratica, Cansbridge, and others doing quiet, serious work</li>
              <li>First client stories, product validation without VC, and navigating family pressure when you go off script</li>
            </ul>
          </div>
        </section>

        <hr className="my-16 border-foreground/10" />

        {/* Peer Documentation */}
        <section className="flex flex-col gap-6">
          <h2>Peer Documentation, Not Polished Hindsight</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              I&apos;m not a 35 year old filmmaker looking back with tidy hindsight.
            </p>
            <p>
              I&apos;m 18, in Vancouver, living the same tradeoffs I&apos;m documenting. The films
              feel more like a peer conversation than a polished lecture because they are.
            </p>
            <p>
              Most education tools hand you a recipe. Third Door Stories is closer to a cooking show
              for alternative lives.
            </p>
            <p>
              You watch someone actually cook an unconventional path in real time, see the mistakes,
              and understand what &quot;golden brown&quot; looks like before you ever try it yourself.
            </p>
            <p>
              An AI tool can tell you how to start a company. A college counselor can help you
              package a project. What neither can show you is what it actually feels like to be 17 or
              22, taking a real leap, and shipping anyway under self doubt.
            </p>
            <p>
              That emotional terrain is what this documents.
            </p>
            <p>
              The project is radically independent. No university partners deciding which stories are
              on brand. No investors pushing for hyper growth. No film school gatekeeping what counts
              as real cinema.
            </p>
            <p>
              By 2030, I want exploring Door 3 to feel as normal and legible as writing a college
              application essay.
            </p>
          </div>
        </section>

        <hr className="my-16 border-foreground/10" />

        {/* Backed By */}
        <section className="flex flex-col gap-8 rounded-2xl p-8" style={{ backgroundColor: '#121212' }}>
          <h2>Backed By</h2>
          <div className="flex items-center justify-center gap-8">
            <img src={logo1517} alt="1517 Fund" className="h-10 object-contain" />
            <img src={logoResidency} alt="The Residency" className="h-12 object-contain" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-surface p-6 flex flex-col gap-3">
              <span className="overline text-primary">1517 Medici Grant</span>
              <p className="body-small text-foreground/[0.65]">
                A small, fast, no-strings microgrant from 1517 Fund designed to help young builders
                ship their next concrete step. Third Door Stories received $1,000 to fund early
                production.
              </p>
            </div>
            <div className="card-surface p-6 flex flex-col gap-3">
              <span className="overline text-primary">The Residency — Delta Chapter II Top 20</span>
              <p className="body-small text-foreground/[0.65]">
                Delta Chapter II is a three week builder sprint hosted by The Residency. Third Door
                Stories was selected as a Top 20 finalist out of over 1,500 participants globally,
                as the only filmmaker in the cohort. The pilot episode was shot and launched there
                in 24 days.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-16 border-foreground/10" />

        {/* Closing */}
        <section className="flex flex-col gap-6 body-base text-foreground/[0.65]">
          <p>
            Third Door Stories isn&apos;t advice. It isn&apos;t &quot;follow your passion&quot;
            content. It isn&apos;t me telling you to burn the boats and move to San Francisco.
          </p>
          <p>
            It&apos;s documentation.
          </p>
          <p>
            The real paths, networks, and small checks that make Door 3 less mysterious and less
            lonely for a curious person stuck inside modern education and work.
          </p>
          <p>
            I investigate what problems are out there, why they matter, and whether they&apos;re
            worth the battle. I&apos;ll let you decide if that someone might be you.
          </p>
          <div className="flex flex-col gap-3">
            <p>
              🔓 <span className="text-foreground font-medium">Free:</span> Subscribe on YouTube for full episodes.
            </p>
            <p>
              🗺️ <span className="text-foreground font-medium">Deeper layer:</span> Join the Patreon for full uncut
              interviews, case study breakdowns with timelines and financials, direct access to me
              and a community of like-minded thinkers, and the live updated map of 25 or more
              microgrants, 10 or more residencies, and 20 or more hacker houses.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
};

export default About;
