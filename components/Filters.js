import {
  Configure,
  connectRefinementList,
  Highlight,
  connectCurrentRefinements,
} from 'react-instantsearch-dom';

const RefinementList = ({ items, isFromSearch, refine, createURL }) => (
  <ul className="pl-4 mb-2">
    {items.map((item) => (
      <li key={item.label}>
        <input
          type="checkbox"
          onChange={() => {
            refine(item.value);
          }}
          checked={item.isRefined ? true : false}
          className="mr-1"
        />
        <a
          href={createURL(item.value)}
          style={{ fontWeight: item.isRefined ? 'bold' : '' }}
          onClick={(event) => {
            event.preventDefault();
            refine(item.value);
          }}
        >
          {isFromSearch ? (
            <Highlight attribute="label" hit={item} />
          ) : (
            item.label
          )}{' '}
          <span className="text-xs text-gray-500 ">({item.count})</span>
        </a>
      </li>
    ))}
  </ul>
);

const ClearRefinements = ({ items, refine }) => (
  <button
    onClick={() => refine(items)}
    disabled={!items.length}
    className="text-sm text-gray-500"
  >
    Clear All
  </button>
);

const Clear = connectCurrentRefinements(ClearRefinements);
const Refinement = connectRefinementList(RefinementList);

const Filter = () => {
  return (
    <div className="mb-8 p-4 sm:p-6 rounded-lg overflow-hidden shadow-lg bg-white h-auto">
      <h2 className="text-xl uppercase text-gray-500 mb-2">Filters</h2>
      <h3 className="uppercase text-gray-500 mb-1">Categories</h3>
      <Refinement attribute="Categories" />
      <h3 className="uppercase text-gray-500 mb-1">Type</h3>
      <Refinement attribute="Type" />
      <h3 className="uppercase text-gray-500 mb-1">Location</h3>
      <Refinement attribute="Location" />
      <Configure hitsPerPage={5} />
      <Clear />
    </div>
  );
};

export default Filter;
