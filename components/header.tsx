import { site } from "@/lib/content";

export function Header() {
  return <header className="site-header"><a href="/" className="wordmark" aria-label={`${site.name}, home`}>{site.name}<span>®</span></a><nav aria-label="Primary navigation"><a href="/projects">Projects</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav><a className="header-cta" href={`mailto:${site.email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a></header>;
}
