import Layout from '../components/Layout';
import Link from 'next/link';

export default function Resources({ resources }) {
  const images = [
    '/dev.png',
    '/web.png',
    '/cloud.png',
    '/mobile.png',
    '/security.png',
  ];
  const checkForImage = (Category) => {
    if (
      Category === 'WebDevelopment' ||
      Category === 'Frontend' ||
      Category === 'Backend'
    ) {
      return images[1];
    }
    return images[0];
  };
  return (
    <Layout title="Resources">
      <main className="px-4 min-h-screen">
        <h1 className="text-5xl text-center uppercase">Resources</h1>
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          {resources.map((resource) => {
            const { id, Title, Type, URL, Category } = resource;
            return (
              <div key={id}>
                <Link href={URL} passHref>
                  <a target="_blank">
                    <div className="mb-8 p-4 rounded-lg overflow-hidden shadow-lg bg-white h-auto">
                      <div className="flex">
                        <div className="flex-none">
                          <img
                            src={`${checkForImage(Category)}`}
                            width={102}
                            height={102}
                          />
                        </div>
                        <div className="flex flex-wrap">
                          <h3 className="text-lg sm:text-2xl max-w-md font-inter">
                            {Title}{' '}
                          </h3>
                          {/* Tags */}
                          <div className="mt-6">
                            <span className="mr-1 sm:mr-2 text-xs sm:text-sm rounded py-2 px-2 sm:px-6 bg-purplePrimary bg-opacity-30 uppercase font-light">
                              {Category}
                            </span>
                            <span className="mr-1 sm:mr-2 text-xs sm:text-sm rounded py-2 px-2 sm:px-6 bg-purplePrimary bg-opacity-30 uppercase font-light">
                              {Type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://hire-juniors-cms.herokuapp.com/resources');
  const resources = await res.json();
  return {
    props: { resources },
  };
}
