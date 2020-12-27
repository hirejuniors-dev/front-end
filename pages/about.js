import Layout from '../components/Layout';
export default function About() {
  return (
    <Layout title="About" isBottom={true}>
      <h1 className="text-5xl text-center uppercase">About</h1>
      <div className="mt-4 w-3/4 sm:w-1/2 mx-auto text-justify">
        <p className="text-lg">
          Looking for the first job in tech is not easy. There are tons of
          openings out there but no central place where these postings are
          listed, especially for junior roles and internships. 😔
        </p>
        <p className="mt-4 text-lg">
          Hire Juniors aims to solve this problem by listing all these
          opportunities under one roof. If you come across any job posting for a
          junior role or an internship, please fill-out the{' '}
          <a
            href="https://hirejuniors.typeform.com/to/E6Ekam2v"
            target="_blank"
            className="text-purplePrimary underline"
          >
            Typeform
          </a>{' '}
          to get it listed. It takes only a couple of minutes to fill out the
          form! ✨
        </p>
        <p className="mt-4 text-lg">
          Resources are also essential to grow skills, especially when you're
          just starting. Let's curate a list of resources that will help junior
          developers on this journey!
        </p>
        <p className="mt-4 text-md font-bold text-center">
          Hire Juniors is not associated with any company or organization.
        </p>
      </div>
    </Layout>
  );
}
