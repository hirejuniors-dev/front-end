import Link from 'next/link';

export default function Card({ job }) {
  const { URL, id, Company, Location, Position, Categories, Type } = job;
  console.log(Categories, Type);
  return (
    <li key={id}>
      <Link href={URL} passHref>
        <a target="_blank">
          <div className="mt-8 p-4 sm:p-6 rounded-lg overflow-hidden shadow-lg bg-white h-auto">
            <div className="flex justify-between">
              <h3 className="text-2xl sm:text-3xl">{Position} </h3>
              <ul className="text-sm">
                <li>
                  {Company}{' '}
                  <span role="image" aria-label="globe">
                    🏢
                  </span>
                </li>
                <li>
                  {Location}{' '}
                  <span role="image" aria-label="globe">
                    📍
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <span className="mr-1 sm:mr-2 text-xs sm:text-sm rounded py-2 px-2 sm:px-6 bg-purplePrimary bg-opacity-30 uppercase font-light">
                {Categories}
              </span>
              <span className="mr-1 sm:mr-2 text-xs sm:text-sm rounded py-2 px-2 sm:px-6 bg-purplePrimary bg-opacity-30 uppercase font-light">
                {Type}
              </span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
