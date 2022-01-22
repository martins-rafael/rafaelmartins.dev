import { GetStaticProps } from 'next';

import { getAllProjects } from 'data/projects';
import { ProjectData } from 'types/project';

import ProjectsTemplate from 'templates/Projects';

type ProjectsProps = {
  projects: ProjectData[];
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();

  return {
    props: { projects },
  };
};

const Projects = ({ projects }: ProjectsProps) => (
  <ProjectsTemplate projects={projects} />
);

export default Projects;
