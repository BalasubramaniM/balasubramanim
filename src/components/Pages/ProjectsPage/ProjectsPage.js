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
            <Projects.SubTitle>Some of the projects showcase my skills.</Projects.SubTitle>
            <Projects.AppContainer>
              {ProjectsList.map(project => (
                <Projects.AppItem key={project.id} onClick={() => selectProject(project.id)}>
                  <Projects.App>{project.name}</Projects.App>
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
