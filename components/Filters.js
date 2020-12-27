import { useState } from 'react';
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
          className="text-xs sm:text-sm"
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
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="md:hidden  w-full bg-backgroundSilk">
        <button
          onClick={() => setShow(!show)}
          className="flex items-center text-sm uppercase text-gray-500 justify-start pb-2 bg-whiteSmoke w-full"
          type="button"
        >
          <p>Filters</p>
          <span className="pl-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="mb-8 px-4 md:py-1 md:p-6 rounded-lg overflow-hidden shadow-lg bg-white">
        <h2 className="text-lg pt-2 sm:text-xl uppercase text-gray-500 mb-2 hidden md:block">
          Filters
        </h2>
        <div className={show ? `h-auto` : `h-0 md:h-auto`}>
          <h3 className="text-sm uppercase text-gray-500 mb-1">Categories</h3>
          <Refinement attribute="Categories" />
          <h3 className="text-sm uppercase text-gray-500 mb-1">Type</h3>
          <Refinement attribute="Type" />
          <h3 className="text-sm uppercase text-gray-500 mb-1">Location</h3>
          <Refinement attribute="Location" />
          <Configure hitsPerPage={10} />
          <Clear />
        </div>
      </div>
    </>
  );
};

export default Filter;
