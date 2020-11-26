import { useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import * as typeformEmbed from '@typeform/embed';

export default function GetInvolved() {
  const typeformRef = useRef(null);

  useEffect(() => {
    typeformEmbed.makeWidget(
      typeformRef.current,
      'https://form.typeform.com/to/E6Ekam2v',
      {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0,
      }
    );
  }, [typeformRef]);
  return (
    <Layout title="Get Involved" isBottom={true}>
      <h1 className="text-5xl text-center">Get Involved</h1>
      <div className="mt-4 w-3/4 sm:w-1/2 mx-auto">
        <p className="sm:text-lg">
          Do you know a job opening for a junior role? Or did you come across
          some useful resources that benefited you? Let's share it with the
          community and help each other out. Fill out this Typeform below, and
          we will list your resource/job opportunity on the website.{' '}
          <span role="image" aria-label="slight smile emoji">
            🙂
          </span>
        </p>
      </div>
      <div ref={typeformRef} style={{ height: '50vh', width: '100%' }}></div>
    </Layout>
  );
}
