import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";
import useSWR from "swr";

export default function HomePage() {
  const {
    data: characters,
    isLoading,
    error,
  } = useSWR("https://swapi.dev/api/people");

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <List>
        {characters.results.map((character, index) => {
          return (
            <li key={character.name}>
              <StyledLink href={`/characters/${index + 1}`}>
                {character.name}
              </StyledLink>
            </li>
          );
        })}
      </List>
    </Layout>
  );
}

const List = styled.ul`
  background-color: var(--color-light);
  list-style-type: "➡️ ";
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-dark);
`;
