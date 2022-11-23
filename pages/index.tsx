import Head from "next/head";
import Image from 'next/image';

import hero from '../assets/hero.png'

import { PageContainer, Main, Heading } from "../styles/Common.styled";
import {
  Description,
  Layout,
  LinkCard,
  ProjectTitle,
} from "../styles/Projects.styled";

// From the brief, the data is updated very infrequently
export async function getStaticProps() {
  const res = await fetch('https://pm25.lass-net.org/API-1.0.0/project/all/')
  const projectList = await res.text()
  const projects: string[] = projectList.split(/\s+/);
  
  return {
    props: {
      projects,
    },
  }
}

// projects of type string[]
const ProjectHome = ({ projects }) => {
  const linkCards = projects.map((project: string) => {
    if (project == "") return null;

    return (
      <LinkCard href={`/${project}`} key={project} data-testid={`linkCard - ${project}`}>
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
        <Image src={hero} role="presentation" alt="Hero banner" />
        <Heading>Projects</Heading>
        <Description>List of projects</Description>
        <Layout>{linkCards}</Layout>
      </Main>
    </PageContainer>
  );
};

export default ProjectHome;

