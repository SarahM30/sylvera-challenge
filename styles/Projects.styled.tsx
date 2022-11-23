import styled from "@emotion/styled";

export const Description = styled.p`
  margin: 1.5rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const LinkCard = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  min-width: 200px;

  :hover,
  :focus,
  :active {
    color: orange;
    border-color: orange;
  }
`;

export const ProjectTitle = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;
