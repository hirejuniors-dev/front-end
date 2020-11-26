import Layout from '../components/Layout';
export default function About() {
  return (
    <Layout title="About" isBottom={true}>
      <h1 className="text-5xl text-center">About</h1>
      <div className="mt-4 w-3/4 sm:w-1/2 mx-auto">
        <p className="text-lg">
          Looking for the first job in tech is not easy. Although there are a
          lot of openings out there is no central place where these postings are
          listed, especially for junior roles and internships. hirejuniors.dev
          is a website that aims to list all these opportunities for someone who
          is going to start their journey in tech. hirejuniors.dev aims to be a
          community-driven project. If you come across any job posting for a
          junior role or for an internship please fill-out the Typeform to get
          it listed.
        </p>
        <p className="mt-4 text-lg">
          The amount of content out there can overwhelm people who are just
          starting their journey. hirejuniors.dev aims to list all the useful
          resources that can help them. We will list all the useful resources
          that you found useful, and that you would recommend someone. If there
          are resources that benefited you please share them with the community.
        </p>
        <p className="mt-4 text-lg">
          Let us take a step to help and welcome junior developers on this
          amazing journey.
        </p>
      </div>
    </Layout>
  );
}
