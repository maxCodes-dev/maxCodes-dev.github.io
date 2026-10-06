import type { Route } from "./+types/projects";
import { Link } from "react-router";
import { GridList, GridListItem } from "react-aria-components";

import ProjectListItem from "./ProjectListItem";
import type { Project } from "./Project";

import "./projects.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects" },
    { name: "description", content: "My projects" },
  ];
}

export function clientLoader({}: Route.ClientLoaderArgs) {
  const projects = [
    {
      name: "mindustry-ynh",
      description: "Mindustry dedicated server package for YunoHost",
      url: "https://github.com/maxCodes-dev/mindustry_ynh",
      image: "",
    },
    {
      name: "Lost Girl (Ralsei)",
      description: "Fan song for DELTARUNE",
      url: "https://www.tumblr.com/deltaruniccode/828299819117330432",
      image: "https://deltarune.wiki/images/Ralsei_face_hatless.png",
    },
  ] as Project[];

  return { projects };
}

export default function Projects({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;

  return (
    <main>
      <hgroup>
        <h1>Projects</h1>
      </hgroup>

      <p>Here you can find a selection of stuff that I made or am making.</p>

      <GridList
        aria-label="Projects"
        selectionMode="none"
        layout="stack"
        items={projects}
        id="projects-list"
      >
        {(project) => <ProjectListItem project={project} />}
      </GridList>
    </main>
  );
}
