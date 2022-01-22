import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { SITE_NAME } from 'config/app-config';
import { ProjectData } from 'types/project';

import SEO from 'components/SEO';
import AnimationContainer from 'components/AnimationContainer';
import ImageContainer from 'components/ImageContainer';

import { Container, ProjectContainer } from './styles';

type ProjectsTemplateProps = {
  projects: ProjectData[];
};

const ProjectsTemplate = ({ projects }: ProjectsTemplateProps) => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      <SEO title={`Portfólio | ${SITE_NAME}`} />

      <AnimationContainer animation="appearFromAbove">
        <Container>
          <h2>
            <span>&gt;</span> Confira alguns projetos pessoais que estive/estou
            trabalhando:
          </h2>

          <section>
            {projects.map((project, index) => (
              <ProjectContainer data-aos="fade-down" key={index}>
                <ImageContainer
                  style={{ gridColumn: (index % 2 ? 2 : 1) + ' / span 2' }}
                  url={project.cover.formats.large.url}
                  alt={project.title}
                  width={572}
                  height={400}
                />

                <div style={{ gridColumn: index % 2 ? 1 : 3 }}>
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <ul>
                    <li>
                      <span>&gt;</span> {project.feats01}
                    </li>

                    <li>
                      <span>&gt;</span> {project.feats02}
                    </li>

                    <li>
                      <span>&gt;</span> {project.feats03}
                    </li>
                  </ul>

                  <a
                    title="Ir para o repositório"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={project.url}
                  >
                    Ver no GitHub
                  </a>
                </div>
              </ProjectContainer>
            ))}

            <a
              title="Ir para o GitHub"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/martins-rafael"
            >
              Ver todos repositórios no GitHub
            </a>
          </section>
        </Container>
      </AnimationContainer>
    </>
  );
};

export default ProjectsTemplate;
