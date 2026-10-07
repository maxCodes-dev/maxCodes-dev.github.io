import type { Route } from "./+types/projects";
import { Link } from "react-router";
import { GridListItem, Header } from "react-aria-components";

import type { Project } from "./Project";

import "./projects.css";

function ProjectListItem({ project }: { project: Project }) {
  return (
    <GridListItem className="project-list-item" textValue={project.name}>
      <article>
        <Header>
          <h3>{project.name}</h3>
        </Header>
        <div className="project-img-wrapper">
          <img src={project.image} alt="" />
        </div>
        <p>{project.description}</p>
        <p>
          <Link to={project.url}>{project.url}</Link>
        </p>
      </article>
    </GridListItem>
  );
}

export default ProjectListItem;
