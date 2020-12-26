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
      <main className="px-4 sm:px-24">
        <div className="my-4">
          <InstantSearch
            indexName="development_jobs"
            searchClient={searchClient}
          >
            <Search />
            <div className="sm:flex">
              <div className="sm:w-1/4 sm:mr-4">
                <Filter />
              </div>
              <div className="sm:w-3/4">
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
