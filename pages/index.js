import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, Pagination } from 'react-instantsearch-dom';
import Layout from '../components/Layout';
import Card from '../components/card';
import Search from '../components/SearchInput';
import Filter from '../components/Filters';
import CustomPagination from '../components/Pagination';

const searchClient = algoliasearch(
  '0WCFHOO3DZ',
  '977dbc62418f6584b1e1a31488c7b5b9'
);

export default function Home() {
  return (
    <Layout title="Hire Juniors" isBottom={true}>
      <main className="px-4 sm:px-24">
        <div className="my-4">
          <InstantSearch
            indexName="development_jobs"
            searchClient={searchClient}
          >
            <Search />
            <div className="grid grid-cols-3">
              <div className="w-3/4">
                <Filter />
              </div>
              <div className="col-span-2">
                <Hits hitComponent={Hit} />
              </div>
            </div>
            <CustomPagination />
          </InstantSearch>
        </div>
      </main>
    </Layout>
  );
}

function Hit(props) {
  return (
    <ul>
      <Card job={props.hit} />
    </ul>
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
