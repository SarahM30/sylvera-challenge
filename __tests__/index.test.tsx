import { render, screen } from "@testing-library/react";
import ProjectHome from "@/pages/index";

const mockProjects = ["foo", "bar", "hello"];

describe("ProjectHome", () => {
  it("renders a heading", () => {
    render(<ProjectHome projects={mockProjects} />);

    const headingRole = screen.getByRole("heading", { level: 1 });
    expect(headingRole).toBeInTheDocument();

    const headingText = screen.getByText("Projects");
    expect(headingText).toBeInTheDocument();
  });

  // Skipping as this will change with dynamic routes
  it("renders links for each project", () => {
    render(<ProjectHome projects={mockProjects}  />);

    const linkCardFoo = screen.getByTestId("linkCard - foo");
    expect(linkCardFoo).toHaveAttribute("href", "/foo");

    const linkCardBar = screen.getByTestId("linkCard - bar");
    expect(linkCardBar).toHaveAttribute("href", "/bar");

    const linkCardHello = screen.getByTestId("linkCard - hello");
    expect(linkCardHello).toHaveAttribute("href", "/hello");
  });
});
