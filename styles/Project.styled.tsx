import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

export const Entry = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border-left: 2px solid orange;
  transition: color 0.15s ease, border-color 0.15s ease;
`;

export const EntryTitle = styled.h2`
  margin-top: 0;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.75rem;
`;
