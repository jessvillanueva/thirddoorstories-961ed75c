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

        {/* The Analogy */}
        <section className="flex flex-col gap-5">
          <h2>Life Is a Nightclub</h2>
          <div className="flex flex-col gap-5 body-base text-foreground/[0.65]">
            <p>
              Author{" "}
              <a href="https://alexbanayan.com/the-third-door/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                Alex Banayan
              </a>{" "}
              wrote that life is like a nightclub.
            </p>
            <p>
              There&apos;s the first door. The main entrance. Everyone waits in line, follows the rules, and hopes their name gets called.
            </p>
            <p>
              There&apos;s the second door. The VIP entrance. For people who were born knowing the right names, the right zip codes, the right families.
            </p>
            <p>
              And then there&apos;s the third door. The one down the alley. No sign. You bang on it a hundred times. You sneak through the kitchen. You figure it out as you go.
            </p>
            <p>
              There&apos;s always a way in. Most people just never find out it exists because nobody inside modern education or work ever told them to look.
            </p>
          </div>
        </section>

        {/* The Gap I Couldn't Ignore */}
        <section className="flex flex-col gap-5 mt-12">
          <h2>Nobody Shows You the Middle</h2>
          <div className="flex flex-col gap-5 body-base text-foreground/[0.65]">
            <p>
              Most young adults are stuck between two stories. Get a degree or you&apos;re behind and you&apos;ll fail. Drop out and hustle. Nobody ever actually shows them what&apos;s in between.
            </p>
            <p>
              At 15, I was staring at three versions of my life.
            </p>
            <ul className="flex flex-col gap-2 list-none pl-0">
              <li><span className="text-foreground font-medium">Door 1.</span> A $52K business and tech degree and a career I could see the entire shape of before I ever started.</li>
              <li><span className="text-foreground font-medium">Door 2.</span> Elite connections and inherited access I didn&apos;t have.</li>
              <li><span className="text-foreground font-medium">Door 3.</span> Creating my own opportunities from scratch, with no map.</li>
            </ul>
            <p>
              I took Door 3 at 16. Not because it was the inspiring choice. Because I&apos;d gotten close enough to the first door to see what it actually looked like up close. Chasing 80 credits through a regular high school life felt less like building something real and more like playing a game with rules I didn&apos;t write. The social and environmental dynamics were crushing to go through day in and out.
            </p>
            <p>
              So I chose a 5-course adult diploma in British Columbia and a radically independent education instead.
            </p>
            <p>
              Nobody taught me what that was going to feel like. I relied on integrity, persistence, and seizing the whispers.
            </p>
          </div>
        </section>

        {/* The Bus Ride That Reset My Ceiling */}
        <section className="flex flex-col gap-5 mt-12">
          <h2>One Room Changed Everything</h2>
          <div className="flex flex-col gap-5 body-base text-foreground/[0.65]">
            <p>
              It started at 14, in my final year of middle school.
            </p>
            <p>
              I stayed ahead in all my classes, convinced my teachers to excuse me early, and rode a bus every month to crash a science club at my local high school. The older kids played with fire and blew up bottles with baking soda and vinegar. Our irrationally passionate science teacher lit flames in our hearts to nerd out, stay weird, and be curious.
            </p>
            <p>
              That one room reset my ceiling for what was possible.
            </p>
            <p>
              Over the next few years I kept repeating that move at bigger scales. I found rooms that weren&apos;t school clubs and weren&apos;t LinkedIn networks. Small. Not optimized for virality. Real. The currency was karma, integrity, and paying it forward. I arrived as the youngest person in most of them, still putting my ikigai together in puzzle pieces, more interested in friendship and learning than in being the smartest person there.
            </p>
            <p>
              Socratica. 1517 Fund. Cansbridge. The Residency.
            </p>
            <p>
              I found nearly all of them through DMs, word of mouth, and seizing the right whisper at the right time. No guidance counsellor told me these existed. No college admissions officer has heard of most of them.
            </p>
          </div>
        </section>

        {/* What I've Earned Getting Here */}
        <section className="flex flex-col gap-5 mt-12">
          <h2>How I Earned My Way In</h2>
          <div className="flex flex-col gap-5 body-base text-foreground/[0.65]">
            <p>
              With borrowed gear from a university library and an iPhone SE, I cold-emailed Brian Scudamore, founder of 1-800-GOT-JUNK. Within 24 days I had filmed a 30-minute Zoom interview, cut it to a 4-minute pilot documentary, and published it publicly.
            </p>
            <p>
              That same year I entered Delta Chapter II by The Residency as the only filmmaker in a deeptech cohort of over 1,500 global applicants. I made Top 20 as the second youngest selected at 17 and stood in front of 150+ founders and investors in the Bay Area presenting a film storyboard.
            </p>
            <p>
              Danielle Strachman at 1517 Fund gave me a $1,000 USD Medici Grant for my documentary work and newsletter coverage. She noted my eagerness to learn and said: <span className="italic">&quot;If I talk to her in November about goals X, Y and Z, she&apos;s done by December.&quot;</span>
            </p>
            <p>
              Then something unexpected happened. A subscriber from Singapore who had been covering startups and venture capital for 5+ years found me and reached out unsolicited. She paid for the Patreon out of pocket and told me exactly what she valued: <span className="italic">&quot;the part about the hacker houses, residencies, and microgrants.&quot;</span> I never pitched to her. She just found the work.
            </p>
            <p>
              That was the moment this stopped feeling like a one-off film and started feeling like an episodic show I am the main character of.
            </p>
          </div>
        </section>

        {/* What Third Door Stories Actually Is */}
        <section className="flex flex-col gap-5 mt-12">
          <h2>The Map I&apos;m Building</h2>
          <div className="flex flex-col gap-5 body-base text-foreground/[0.65]">
            <p>
              Third Door Stories is a documentary series and essay lab mapping the hidden builder ecosystem most college admissions officers have never heard of.
            </p>
            <p>
              Episodes run long-form and deliberately look at the parts that don&apos;t fit neatly on a résumé. Money stress. Departures. Hard family conversations. The months where nothing works. Outcomes are context, not the whole story.
            </p>
            <p>I&apos;m mapping:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Microgrants like 1517 Medici, Emergent Ventures, and Bagel Fund</li>
              <li>Residencies like Nautilus, The Residency, and Edge City</li>
              <li>Hacker houses like FR8 and others doing quiet, serious work</li>
              <li>Fellowships like On Deck and Z Fellows</li>
              <li>Builder communities like Socratica, Cansbridge, f.inc, and Verci</li>
              <li>First client stories, product validation without VC, and navigating family pressure when going off script</li>
            </ul>
            <p>
              Alongside every episode, I&apos;m building a living directory of 25+ microgrants, 10+ residencies, and 20+ hacker houses. Searchable infrastructure, not just content. The kind of thing a stressed 17-year-old can open at 2am and find an actual next step to click and apply to. Every new episode adds a node. The map outlasts any single film.
            </p>
          </div>
        </section>

        {/* Why the Filmmaker Is Also the Subject */}
        <section className="flex flex-col gap-5 mt-12">
          <h2>The Camera Is Also the Subject</h2>
          <div className="flex flex-col gap-5 body-base text-foreground/[0.65]">
            <p>
              I&apos;m not a journalist covering this ecosystem from the outside.
            </p>
            <p>
              I&apos;m 18, in Vancouver, living the exact tradeoffs I&apos;m investigating. Every subject I interview is someone I found the same way my viewers will: through DMs, specific communities, and word of mouth. That&apos;s not a style choice. It&apos;s the point.
            </p>
            <p>
              When production teams made videos about buildspace or Founders Inc alumni, they were looking in. Here, the filmmaker is the subject and the subject is still mid-story. There is no separation between the camera and the life.
            </p>
            <p>
              Most education hands students a recipe. Third Door Stories is closer to watching someone actually cook than reading one. I want viewers to watch someone work a high-risk, high-reward path in real time, see the oversights alongside the recovery moments, and know what it looks and feels like before they ever try their own version. That&apos;s what actually changes behavior. Not information. Modeled experience.
            </p>
            <p>
              An AI tool can tell someone how to start a company. A college counsellor can package an ambitious high schooler&apos;s achievements. What neither can show is what it actually feels like to be 17 or 22, betting on yourself, and shipping anyway under self-doubt. That&apos;s the emotional terrain I&apos;m investigating.
            </p>
            <p>
              No university partners deciding which stories are on brand. No investors pushing for hyper growth. No film school gatekeeping what counts as real cinema.
            </p>
          </div>
        </section>

        {/* What This Is Not */}
        <section className="flex flex-col gap-5 mt-12">
          <h2>Not Advice. Documentation.</h2>
          <div className="flex flex-col gap-5 body-base text-foreground/[0.65]">
            <p>Third Door Stories isn&apos;t advice.</p>
            <p>It isn&apos;t &quot;follow your passion.&quot;</p>
            <p>It isn&apos;t me telling you to burn the boats and go move to San Francisco.</p>
            <p>
              It&apos;s documentation. It&apos;s where I delve into the real paths, networks, and small checks that make a third door less mysterious and less lonely for a curious person navigating modern education and work.
            </p>
            <p>I&apos;m building this long-term because I&apos;m obsessed with questions like:</p>
            <ul className="flex flex-col gap-2 list-none pl-0 italic text-foreground/80">
              <li>What&apos;s actually worth solving?</li>
              <li>Who gets to see the real menu of options?</li>
              <li>And what can storytelling do that AI tools, college counselling, and yet another app can&apos;t?</li>
            </ul>
            <p>
              Third Door Stories doesn&apos;t answer &quot;What problem should you solve?&quot; It gives you perspectives from real builders and the places they live and work so you can ask yourself: What problem do I want to solve? Why does it matter to me? Given who I am and where I am, what&apos;s actually worth fighting for?
            </p>
            <p>
              I investigate what problems are out there, why they matter, and whether they&apos;re worth the battle for someone. I&apos;ll let you decide if that someone might be you.
            </p>
          </div>
        </section>

        {/* The Moonshot */}
        <section className="flex flex-col gap-5 mt-12 mb-12">
          <h2>Normal by 2030</h2>
          <div className="flex flex-col gap-5 body-base text-foreground/[0.65]">
            <p>
              By 2030, I want choosing a third door to feel as emotionally legible and socially normal as writing a college application essay.
            </p>
            <p>I grew up hacking my way into better rooms.</p>
            <p>
              Now I&apos;m building the camera, the story, and the map so the next hungry young person doesn&apos;t have to do it alone.
            </p>
            <p className="text-foreground font-medium">Let&apos;s map it.</p>
            <div className="flex flex-col gap-3">
              <p>
                🔓 <span className="text-foreground font-medium">Free.</span> Subscribe on YouTube for full episodes.
              </p>
              <p>
                🗺️ <span className="text-foreground font-medium">Deeper layer.</span> Join the Patreon for full uncut interviews, case-study breakdowns with timelines and first client tactics, direct access to me and a community of like-minded thinkers, and a live-updated directory of 25+ microgrants, 10+ residencies, and 20+ hacker houses.
              </p>
            </div>
            <p className="text-foreground/50 text-sm">
              Subjects and dates will evolve. Episodes drop async by default as I earn access and do the work.
            </p>
          </div>
        </section>

        {/* Supported By */}
        <section className="flex flex-col gap-8 rounded-2xl p-8" style={{ backgroundColor: '#121212' }}>
          <h2>Supported By</h2>
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
              <span className="overline text-primary">The Residency, Delta Chapter II Top 20</span>
              <p className="body-small text-foreground/[0.65]">
                Delta Chapter II is a three week builder sprint hosted by The Residency. Third Door
                Stories was selected as a Top 20 finalist out of over 1,500 participants globally,
                as the only filmmaker in the cohort. The pilot episode was shot and launched there
                in 24 days.
              </p>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
};

export default About;
