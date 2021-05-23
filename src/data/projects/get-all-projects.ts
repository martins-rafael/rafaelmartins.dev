import { PROJECTS_URL } from '../../config/app-config';
import { ProjectData } from '../../domain/projects/project';
import { fetchJson } from '../../utils/fetch-json';

export const getAllProjects = async (): Promise<ProjectData[]> => {
  const projects = await fetchJson<ProjectData[]>(PROJECTS_URL);
  return projects;
};
