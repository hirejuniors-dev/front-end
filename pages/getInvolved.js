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
      <h1 className="text-3xl">Get Involved</h1>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div ref={typeformRef} style={{ height: '75vh', width: '100%' }}></div>
    </Layout>
  );
}
