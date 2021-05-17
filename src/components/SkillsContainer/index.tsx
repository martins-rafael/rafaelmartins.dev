import { icons } from './Icons';
import { Container } from './styles';

const SkillsContainer = () => {
  const skills = Object.keys(icons);

  return (
    <Container>
      <h2>
        <span>&gt;</span> PRINCIPAIS SKILLS
      </h2>

      <div>
        {skills.map((skill) => {
          const Icon = icons[skill];

          return (
            <div key={skill}>
              <Icon size={80} />
              <span>{skill}</span>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default SkillsContainer;
