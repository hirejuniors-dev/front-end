import Layout from '../components/Layout';

export default function Resources({ resources }) {
  return (
    <Layout title="Resources" isBottom={true}>
      <h1>Resources</h1>
      <ul>
        {resources.map((resource) => {
          const { id, Title, Type } = resource;
          return (
            <li
              key={id}
              className="mt-8 p-4 rounded overflow-hidden shadow-md bg-white h-auto"
            >
              <h2 className="text-2xl">{Title}</h2>
              <p>{Type}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/resources');
  const resources = await res.json();
  //   console.log(resources);
  return {
    props: { resources },
  };
}
