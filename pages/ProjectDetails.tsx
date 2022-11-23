import Head from "next/head";

import {
  PageContainer,
  Main,
  Heading,
  Layout,
  Entry,
  EntryTitle,
} from "../styles/Project.styled";

type ProjectDetails = {
  app: string;
  device_id: string;
  gps_lat: number;
  gps_lon: number;
  time: string;
};

const ProjectDetails = () => {
  const mockProjectFeeds = [
    {
      app: "foo",
      device_id: "123",
      gps_lat: 123,
      gps_lon: 456,
      time: "12:30",
    },
    {
      app: "foo",
      device_id: "234",
      gps_lat: 234,
      gps_lon: 567,
      time: "13:30",
    },
    {
      app: "foo",
      device_id: "345",
      gps_lat: 345,
      gps_lon: 678,
      time: "14:30",
    },
  ];

  const feed = mockProjectFeeds.map((entry: ProjectDetails) => {
    return (
      <Entry key={entry.device_id} data-testid="feed-entry">
        <EntryTitle>
          Entry details for {entry.app} submitted at {entry.time}
        </EntryTitle>
        <table id={entry.device_id}>
          <tr>
            <th>Project:</th>
            <td>{entry.app}</td>
          </tr>
          <tr>
            <th>Device ID:</th>
            <td>{entry.device_id}</td>
          </tr>
          <tr>
            <th>Time of entry:</th>
            <td>{entry.time}</td>
          </tr>
          <tr>
            <th>Latitude:</th>
            <td>{entry.gps_lat}</td>
          </tr>
          <tr>
            <th>Longitude:</th>
            <td>{entry.gps_lon}</td>
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
        <Heading>Project Name</Heading>
        <Layout>{feed}</Layout>
      </Main>
    </PageContainer>
  );
}

export default ProjectDetails;