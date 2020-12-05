import Head from 'next/head';
import Header from './Header';

export default function Layout({ title, children, isBottom }) {
  return (
    <>
      <Head>
        <title>{title} | hirejuniors.dev</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
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
