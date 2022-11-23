import Head from "next/head";

import {
  PageContainer,
  Main,
  Heading,
  Description,
  Layout,
  LinkCard,
  ProjectTitle,
} from "../styles/Projects.styled";

const ProjectHome = () => {
  const mockProjects: string[] = [
    'foo', 
    'bar', 
    'hello'
  ]

  const linkCards = mockProjects.map((project: string) => {
    if (project == "") return null;

    return (
      <LinkCard href="/ProjectDetails" key={project} data-testid={`linkCard - ${project}`}>
        <ProjectTitle>{project}</ProjectTitle>
      </LinkCard>
    );
  });

  return (
    <PageContainer>
      <Head>
        <title>Sylvera Challenge</title>
        <meta name="description" content="Tech challenge - Sarah Muirhead" />
      </Head>
      <Main>
        <Heading>Projects</Heading>
        <Description>Page Description</Description>
        <Layout>{linkCards}</Layout>
      </Main>
    </PageContainer>
  );
};

export default ProjectHome;

