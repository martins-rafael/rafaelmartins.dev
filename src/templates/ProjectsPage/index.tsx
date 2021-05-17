import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { SITE_NAME } from '../../config/app-config';

import SEO from '../../components/SEO';
import AnimationContainer from '../../components/AnimationContainer';

import { projects } from './content';
import { Container, ProjectContainer } from './styles';

const ProjectsPage = () => {
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
            {projects.map(
              ({ cover, title, description, techs, url }, index) => (
                <ProjectContainer data-aos="fade-down" key={index}>
                  <img
                    style={{ gridColumn: (index % 2 ? 2 : 1) + ' / span 2' }}
                    src={cover}
                    alt={title}
                  />

                  <div style={{ gridColumn: index % 2 ? 1 : 3 }}>
                    <h3>{title}</h3>

                    <p>{description}</p>

                    <ul>
                      {techs.map((tech) => (
                        <li key={tech}>
                          <span>&gt;</span> {tech}
                        </li>
                      ))}
                    </ul>

                    <a
                      title="Ir para o repositório"
                      target="_blank"
                      rel="noreferrer noopener"
                      href={url}
                    >
                      Ver no GitHub
                    </a>
                  </div>
                </ProjectContainer>
              ),
            )}

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

export default ProjectsPage;
