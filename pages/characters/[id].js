import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Character() {
  const router = useRouter();

  const { id } = router.query;

  const { data, isLoading, error } = useSWR(
    `https://swapi.dev/api/people/${id}`
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  const { name, height, eyeColor, birthYear } = data;

  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eyeColor}
        birthYear={birthYear}
      />
      <Link href="/">Back to home</Link>
    </Layout>
  );
}
