import Layout from '../components/Layout';
import Image from 'next/image';

export default function Resources({ resources }) {
  return (
    <Layout title="Resources" isBottom={true}>
      <h1 className="text-5xl text-center uppercase">Resources</h1>
      <h2 className="mt-4 text-3xl text-center">Coming Soon!</h2>
      {/* <ul>
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
      </ul> */}
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:1337/resources');
//   const resources = await res.json();
//   //   console.log(resources);
//   return {
//     props: { resources },
//   };
// }
