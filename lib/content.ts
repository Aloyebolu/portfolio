
export const site = {
  name: "Breakthrough",
  role: "Independent software engineer",
  email: "aloyebolu5@gmail.com",
  location: "Based in Ondo, Nigeria · Working worldwide",
  availability: "Open to software engineering work and select collaborations",
  intro:
    "I build software from the system underneath it to the experience people actually use.",
  bio:
    "I'm a software engineer focused on building reliable applications, developer tools, and the systems behind them. I enjoy understanding how things work beneath the surface, designing abstractions that stay useful as systems grow, and turning ideas into working software. My work spans TypeScript, JavaScript, Node.js, PostgreSQL, MongoDB, React, React Native, and Java, with a particular interest in backend architecture, developer tooling, and software design.",
};

export const capabilities = [
  {
    number: "01",
    title: "Backend & systems engineering",
    copy:
      "Designing APIs, application architecture, databases, transactions, authentication, caching, and the infrastructure that keeps software dependable.",
  },
  {
    number: "02",
    title: "Developer tools & abstractions",
    copy:
      "Building frameworks, libraries, and abstractions that make difficult technical problems easier to work with without hiding the important details.",
  },
  {
    number: "03",
    title: "Product engineering",
    copy:
      "Taking an idea from its underlying model to a working product, balancing technical correctness with the experience and constraints of the people using it.",
  },
];

export const projects = [
  {
    type: "Developer tooling · In progress",
    title: "A Mongoose-like abstraction for PostgreSQL",
    description:
      "A JavaScript/TypeScript database abstraction exploring schema definitions, models, migrations, SQL generation, queries, and PostgreSQL without giving up control of the underlying database.",
    tags: ["TypeScript", "PostgreSQL", "ORM", "Developer tooling"],
    href: "#",
    hue: "violet",
  },
  {
    type: "Framework · In progress",
    title: "An Express-like web framework for Java",
    description:
      "A from-scratch exploration of web-framework design in Java, focused on understanding routing, request handling, middleware-style composition, and the abstractions that sit beneath familiar web APIs.",
    tags: ["Java", "HTTP", "Framework design", "Backend"],
    href: "#",
    hue: "amber",
  },
  {
    type: "Systems tooling · In progress",
    title: "Android-PC connectivity tooling",
    description:
      "A tool for connecting Android devices with PCs and exposing useful device-to-computer capabilities through local networking and service discovery.",
    tags: ["Android", "Networking", "NSD", "Systems"],
    href: "#",
    hue: "cyan",
  },
];

export const principles = [ [ "Understand the layer underneath", "I like using abstractions without treating them as magic. Understanding what happens underneath makes better engineering decisions possible.", ], [ "Build before overengineering", "Good architecture should emerge in service of a working system. I prefer shipping a useful version, learning from it, and then making the abstraction stronger.", ], [ "Make complexity earn its place", "Complexity is sometimes necessary, but every abstraction, dependency, and architectural decision should solve a real problem.", ], ] as const;