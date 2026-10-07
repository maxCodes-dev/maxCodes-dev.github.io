import type { Route } from "./+types/projects";
import { Link } from "react-router";
import { GridList, GridListItem } from "react-aria-components";

import ProjectListItem from "./ProjectListItem";
import type { Project } from "./Project";

import mindustry_ynhLogo from "@/assets/mindustry_ynh-logo.png";
import maxCodesLogo from "/favicon.png";

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
      name: "maxCodes-dev.github.io",
      description: "This website!",
      url: "https://github.com/maxCodes-dev/maxCodes-dev.github.io",
      image: maxCodesLogo,
    },
    {
      name: "mindustry-ynh",
      description: "Mindustry dedicated server package for YunoHost",
      url: "https://github.com/maxCodes-dev/mindustry_ynh",
      image: mindustry_ynhLogo,
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

      <p>
        Here you can find a selection of stuff that I made or am making. Pretty
        much anything, including programs, creations for fandoms, and music.
      </p>

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
