import type { Metadata } from "next";
import { Header } from "@/components/header";
import { getGitHubRepositories } from "@/lib/github";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: `Projects — ${site.name}`, description: `Public GitHub repositories and open-source work by ${site.name}.` };

export default async function ProjectsPage() {
  const repositories = await getGitHubRepositories();
  return <main className="projects-page"><Header /><section className="projects-hero" aria-labelledby="projects-title"><p className="eyebrow">Open source / GitHub</p><h1 id="projects-title">Projects with<br /><em>working</em> code.</h1><p>Public repositories, refreshed hourly and ordered by community interest.</p></section><section className="repositories" aria-labelledby="repositories-title"><div className="repositories-heading"><p className="eyebrow">Repository index</p><h2 id="repositories-title">What I&apos;m exploring in public.</h2></div>{repositories.length > 0 ? <div className="repository-grid">{repositories.map((repository) => <article className="repository-card" key={repository.id}><a href={repository.html_url} target="_blank" rel="noreferrer" aria-label={`View ${repository.name} on GitHub`}><div className="repository-card-top"><h3>{repository.name}</h3><span aria-hidden="true">↗</span></div><p className="repository-description">{repository.description ?? "No description has been added to this repository yet."}</p><div className="repository-meta"><span>{repository.language ?? "Unspecified"}</span><span>Stars {repository.stargazers_count}</span></div>{repository.topics.length > 0 && <ul className="repository-topics" aria-label="Topics">{repository.topics.slice(0, 3).map((topic) => <li key={topic}>{topic}</li>)}</ul>}</a></article>)}</div> : <div className="repository-empty" role="status"><p>Repositories are unavailable right now. Please check back soon.</p></div>}</section></main>;
}
