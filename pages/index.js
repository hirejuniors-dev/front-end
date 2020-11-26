import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home({ jobs }) {
  return (
    <Layout title="Hire Juniors" isBottom={true}>
      <main className="px-4 sm:px-64">
        <h1 className="text-5xl text-center">Welcome to hirejuniors.dev</h1>
        <div className="my-4">
          <ul>
            {jobs.map((job) => {
              const {
                URL,
                id,
                Company,
                Location,
                Position,
                Categories,
                Type,
              } = job;
              return (
                <li
                  key={id}
                  className="mt-8 p-4 rounded overflow-hidden shadow-md bg-white h-auto"
                >
                  <h3 className="text-2xl">
                    {Position}{' '}
                    <a href={URL} target="_blank">
                      <span role="image" aria-label="link">
                        🔗
                      </span>
                    </a>
                  </h3>
                  <ul className="text-lg">
                    <li>Company: {Company}</li>
                    <li>
                      Location:{' '}
                      <span role="image" aria-label="globe">
                        🌐{' '}
                      </span>
                      {Location}
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://hire-juniors-cms.herokuapp.com/jobs');
  const jobs = await res.json();
  // console.log(jobs);
  return {
    props: { jobs },
  };
}
