import { Arrow } from "@/components/arrow";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { capabilities, principles, projects, site } from "@/lib/content";

export default function Home() {
  return <main id="top"><Header />
    <section className="hero" aria-labelledby="hero-title"><div className="hero-grid" aria-hidden="true" /><div className="hero-top"><p className="availability"><i /> {site.availability}</p><p className="location">{site.location}</p></div><div className="hero-main"><p className="eyebrow">{site.role}</p><h1 id="hero-title">Thoughtful code.<br /><em>Human</em> outcomes.</h1><div className="hero-foot"><p>{site.intro}</p><a className="circle-link" href="/projects" aria-label="Explore GitHub projects"><Arrow /></a></div></div><p className="scroll-note">Scroll to explore <span>↓</span></p></section>
    <section id="work" className="work section"><SectionHeading eyebrow="Selected work" title="Built for the people on the other side." /><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div><p className="disclaimer reveal">These are intentionally labeled placeholders. Replace them with work you are permitted to share.</p></section>
    <section id="about" className="about section"><div className="about-intro reveal"><p className="eyebrow">Approach</p><h2>Good technology should feel <em>considered</em>, not complicated.</h2></div><div className="about-body"><p className="reveal">{site.bio}</p><a className="text-link reveal" href="#contact">More about how I work <Arrow /></a></div><div className="principles">{principles.map(([title, copy], index) => <article className="principle reveal" style={{ "--delay": `${index * 100}ms` } as React.CSSProperties} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="services section"><SectionHeading eyebrow="What I can help with" title="A strong point of view, grounded in the work." /><div className="capabilities">{capabilities.map((item, index) => <article className="capability reveal" style={{ "--delay": `${index * 90}ms` } as React.CSSProperties} key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></section>
    <section id="contact" className="contact"><div className="contact-noise" aria-hidden="true" /><div className="contact-content"><div><p className="eyebrow">Start a conversation</p><h2>Have something<br />worth <em>building?</em></h2><a href={`mailto:${site.email}`} className="contact-email">{site.email} <Arrow diagonal /></a></div><ContactForm /></div><footer><span>© {new Date().getFullYear()} {site.name}</span><span>Built with care.</span><a href="#top">Back to top ↑</a></footer></section>
  </main>;
}
