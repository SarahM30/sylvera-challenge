import Head from "next/head";
import { useRouter } from "next/router";

import { PageContainer, Main, Heading } from "../styles/Common.styled";

import {
  Layout,
  Entry,
  EntryTitle,
  Description,
} from "../styles/Project.styled";

type ProjectDetails = {
  app: string;
  device_id: string;
  gps_lat: number;
  gps_lon: number;
  time: string;
};

// From the brief, the data is updated infrequently
export const getStaticPaths = async () => {
  const res = await fetch("https://pm25.lass-net.org/API-1.0.0/project/all/");
  const projectList = await res.text();
  const projects = projectList.split(/\s+/);

  const paths = projects.map((project) => {
    return {
      params: { project: project.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const project = context.params.project;
  const res = await fetch(
    `https://pm25.lass-net.org/API-1.0.0/project/${project}/latest/`
  );
  const projectDetails = await res.json();

  return {
    props: {
      projectDetails,
    },
  };
};

const ProjectDetails = ({ projectDetails }) => {
  const router = useRouter();
  const projectTitle = router.asPath.replace(/\//g, "");

  const projectFeeds = projectDetails.feeds;
  if (!projectFeeds) return <Heading>Sorry, no feeds for this project yet...</Heading>;
  const mostRecentEntries = projectFeeds.slice(0, 10);

  const feed = mostRecentEntries.map((entry: ProjectDetails) => {
    return (
      <Entry key={entry.device_id} data-testid="feed-entry">
        <EntryTitle>
          Entry details for {entry.app} submitted at {entry.time}
        </EntryTitle>
        <table id={entry.device_id}>
          <tr>
            <th>Project:</th>
            <td>{entry.app || "Unknown"}</td>
          </tr>
          <tr>
            <th>Device ID:</th>
            <td>{entry.device_id || "Unknown"}</td>
          </tr>
          <tr>
            <th>Latitude:</th>
            <td>{entry.gps_lat || "Unknown"}</td>
          </tr>
          <tr>
            <th>Longitude:</th>
            <td>{entry.gps_lon || "Unknown"}</td>
          </tr>
          <tr>
            <th>Time of entry:</th>
            <td>{entry.time || "Unknown"}</td>
          </tr>
        </table>
      </Entry>
    );
  });

  return (
    <PageContainer>
      <Head>
        <title>Sylvera Challenge</title>
        <meta name="description" content="Tech challenge - Sarah Muirhead" />
      </Head>
      <Main>
        <Heading>Project: {projectTitle}</Heading>
        {feed.length > 0 ? (
          <>
            <p>Total number of feed entries: {projectFeeds.length}</p>
            <Layout>{feed}</Layout>
          </>
        ) : (
          <Description>Sorry, no feeds for this project yet...</Description>
        )}
      </Main>
    </PageContainer>
  );
};

export default ProjectDetails;
