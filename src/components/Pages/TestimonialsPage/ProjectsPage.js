import React, { useState } from 'react';

import { Projects } from './projectsPage.styles';
import { ProjectsList } from './projectsPage.constants';

const ProjectsPageComponent = () => {
  const [project, setProject] = useState(ProjectsList[0]);

  const selectProject = (projectId) => {
    setProject(ProjectsList[projectId]);
  }

  return (
    <Projects.Section id="projects">
      <Projects.Container>
        <Projects.Content className='appearOut'>
          <Projects.List>
            <Projects.Title>Projects</Projects.Title>
            <Projects.SubTitle>Some of the projects that showcase my skills.</Projects.SubTitle>
            <Projects.AppContainer>
              {ProjectsList.map(p => (
                <Projects.AppItem key={p.id} onClick={() => selectProject(p.id)}>
                  <Projects.App selected={p.id === project.id}>{p.name}</Projects.App>
                </Projects.AppItem>
              ))}
            </Projects.AppContainer>
          </Projects.List>
          <Projects.Desc>
            <Projects.Title target="_blank" href={project.href}>{project.name}</Projects.Title>
            <Projects.Description>{project.desc}</Projects.Description>
          </Projects.Desc>
        </Projects.Content>
      </Projects.Container>
    </Projects.Section>
  )
}

export default ProjectsPageComponent;

{/* <Projects.SubTitle>I have experience working from startups to large organizations.</Projects.SubTitle> */}
