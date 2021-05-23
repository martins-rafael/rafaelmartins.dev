import { GetStaticProps } from 'next';

import { getAllProjects } from '../data/projects/get-all-projects';
import { ProjectData } from '../domain/projects/project';

import ProjectsPage from '../templates/ProjectsPage';

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
  <ProjectsPage projects={projects} />
);

export default Projects;
