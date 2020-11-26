import Head from 'next/head';
import Header from './Header';

export default function Layout({ title, children, isBottom }) {
  return (
    <>
      <Head>
        <title>{title} | hirejuniors.dev</title>
      </Head>
      <Header />
      <div className="container mx-auto pt-8 sm:pt-16">{children}</div>
      {/* <footer
        className={`bottom-0 w-full border-t ${
          isBottom ? 'absolute' : 'relative'
        } mt-4`}
      >
        <div className="text-center">
          <p className="text-lg py-4">
            Made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </p>
        </div>
      </footer> */}
    </>
  );
}
