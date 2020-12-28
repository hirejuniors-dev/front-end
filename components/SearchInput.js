import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <div className="sticky top-20">
    <form noValidate action="" role="searct" className="mb-8">
      <div className="relative text-gray-600">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-300">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input
          type="search"
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
          className="w-full py-4 px-8 rounded-md md:rounded-lg text-lg border-2 border-purplePrimary border-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Search for Jobs"
        />
      </div>
      {isSearchStalled ? '' : ''}
    </form>
  </div>
);

const Search = connectSearchBox(SearchBox);

export default Search;
