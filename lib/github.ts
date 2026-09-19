const githubUsername = "AloyeBolu";

export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  topics: string[];
}

export async function getGitHubRepositories(): Promise<GitHubRepository[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
      { headers: { Accept: "application/vnd.github+json", ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}) }, next: { revalidate: 3600 } },
    );
    if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);
    const repositories = (await response.json()) as GitHubRepository[];
    return repositories.filter((repository) => !repository.fork).sort((first, second) => second.stargazers_count - first.stargazers_count);
  } catch (error) {
    console.error("Unable to load GitHub repositories:", error);
    return [];
  }
}
