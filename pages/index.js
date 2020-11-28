import Layout from '../components/Layout';
import Card from '../components/card';

export default function Home({ jobs }) {
  return (
    <Layout title="Hire Juniors" isBottom={true}>
      <main className="px-4 sm:px-64">
        <div className="my-4">
          <ul>
            {jobs.map((job) => {
              return <Card job={job} />;
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
