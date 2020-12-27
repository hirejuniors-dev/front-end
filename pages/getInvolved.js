import Layout from '../components/Layout';

export default function GetInvolved() {
  return (
    <Layout title="Get Involved" isBottom={true}>
      <h1 className="text-5xl text-center uppercase">Get Involved</h1>
      <div className="mt-4 w-3/4 sm:w-1/2 mx-auto">
        <p className="sm:text-lg">
          If you know of a job opening for a junior role or came across some
          useful resources that benefited you, please fill out the{' '}
          <a
            href="https://hirejuniors.typeform.com/to/E6Ekam2v"
            target="_blank"
            className="text-purplePrimary underline"
          >
            Typeform
          </a>{' '}
          to share it with the community!{' '}
          <span role="image" aria-label="slight smile emoji">
            🙂
          </span>
        </p>
        <p className="sm:text-lg mt-4">
          You can even help in building Hire Juniors! Check out the code on{' '}
          <a
            href="https://github.com/hirejuniors-dev/front-end"
            target="_blank"
            className="text-purplePrimary underline"
          >
            GitHub
          </a>{' '}
          to add/suggest new features or help fix a bug 🐛
        </p>
        <p className="mt-12 text-center">
          <a
            href="https://www.buymeacoffee.com/harshil1712"
            target="_blank"
            className="p-4 rounded-lg text-white bg-purplePrimary hover:bg-purplePrimary hover:bg-opacity-50 shadow-md"
          >
            <span aria-label="coffee" role="image">
              ☕
            </span>{' '}
            Buy me a Coffee
          </a>
        </p>
      </div>
    </Layout>
  );
}
