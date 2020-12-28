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
    <Layout title="Hire Juniors">
      <main className="px-4 sm:px-24 min-h-screen">
        <div className="my-4">
          <InstantSearch
            indexName="production_jobs"
            searchClient={searchClient}
          >
            <Search />
            <div className="block md:flex">
              <div className="w-full sticky top-36 md:w-1/4 md:mr-4 md:-z-1">
                <div className="md:sticky md:top-44">
                  <Filter />
                </div>
              </div>
              <div className="md:w-3/4">
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
