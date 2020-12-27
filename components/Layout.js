import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';

export default function Layout({ children, isBottom }) {
  return (
    <>
      <Head>
        <title>Hire Juniors</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <Header />
      <div className="container mx-auto pt-8 sm:pt-16">{children}</div>
      <footer
        className={`bottom-0 w-full bg-purplePrimary bg-opacity-30 ${
          isBottom ? 'absolute' : 'relative'
        } mt-4`}
      >
        <div className="flex justify-between pt-6 px-12 text-md">
          <ul className="text-purplePrimary">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/getInvolved">Get Involved</Link>
            </li>
            <li className="mt-2 md:mt-4">
              <a
                href="https://www.buymeacoffee.com/harshil1712"
                target="_blank"
                className="p-2 md:py-4 md:p-2 rounded-lg text-white bg-purplePrimary hover:bg-purplePrimary hover:bg-opacity-50 shadow-md text-sm"
              >
                <span aria-label="coffee" role="image">
                  ☕
                </span>{' '}
                Buy me a Coffee
              </a>
            </li>
          </ul>
          <ul className="text-purplePrimary text-right">
            <li className="font-bold">Built with:</li>
            <li>
              <a href="https://nextjs.org/">Next.js</a>
            </li>
            <li>
              <a href="https://strapi.io">Strapi</a>
            </li>
            <li>
              <a href="https://n8n.io">n8n</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center py-4 text-purplePrimary">
          <a
            href="https://github.com/hirejuniors-dev/front-end"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 sm:h-8 sm:w-8 fill-current"
            >
              <path d="M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.6 5 2.5 9.3 6.9 10.7v-2.3s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3C15.3 6 16.8 6 16.8 6c.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v3.3c4.1-1.3 7-5.1 7-9.5 0-6-5.1-10.7-11.1-10z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/hirejuniors_dev"
            target="_blank"
            className="ml-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 sm:h-8 sm:w-8 fill-current"
            >
              <path d="M24 4.3c-.898.4-1.8.7-2.8.802 1-.602 1.8-1.602 2.198-2.704-1 .602-2 1-3.097 1.204C19.3 2.602 18 2 16.6 2A4.907 4.907 0 0011.7 6.898c0 .403 0 .801.102 1.102-4.102-.2-7.7-2.102-10.102-5.102C1.2 3.602 1 4.5 1 5.398c0 1.704.898 3.204 2.2 4.102-.802-.102-1.598-.3-2.2-.602V9c0 2.398 1.7 4.398 3.898 4.8-.398.098-.796.2-1.296.2-.301 0-.602 0-.903-.102.602 2 2.403 3.403 4.602 3.403-1.7 1.3-3.801 2.097-6.102 2.097-.398 0-.8 0-1.199-.097C2.2 20.699 4.8 21.5 7.5 21.5c9.102 0 14-7.5 14-14v-.602c1-.699 1.8-1.597 2.5-2.597" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
