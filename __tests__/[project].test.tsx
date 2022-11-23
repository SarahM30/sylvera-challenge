import { render, screen } from "@testing-library/react";

import ProjectDetails from "../pages/[project]";

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { project: 'foo' },
    asPath: '/foo'
  })
}));

const mockProjectFeeds = {
  feeds: [
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
]};

describe("ProjectDetails", () => {
  it("renders a heading when there are feed entries", () => {
    render(
        <ProjectDetails projectDetails={mockProjectFeeds} />
    );

    const headingRole = screen.getByRole("heading", { level: 1 });
    expect(headingRole).toBeInTheDocument();

    const headingText = screen.getByText("Project: foo");
    expect(headingText).toBeInTheDocument();
  });

  it("renders an errr heading when there are no feed entries", () => {
    render(
        <ProjectDetails projectDetails={[]} />
    );

    const headingRole = screen.getByRole("heading", { level: 1 });
    expect(headingRole).toBeInTheDocument();

    const headingText = screen.getByText("Sorry, no feeds for this project yet...");
    expect(headingText).toBeInTheDocument();
  });
});
