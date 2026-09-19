import { Arrow } from "./arrow";

type Project = { type: string; title: string; description: string; tags: string[]; href: string; hue: string };
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card project-${project.hue} reveal`} style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}>
    <div className="project-art" aria-hidden="true"><span className="art-index">0{index + 1}</span><div className="art-shape" /></div>
    <div className="project-copy"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><ul aria-label="Project disciplines">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a href={project.href} aria-label={`Discuss ${project.title}`}><Arrow diagonal /></a></div></div>
  </article>;
}
