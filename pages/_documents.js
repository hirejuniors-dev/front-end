import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* Plausible Analytics script */}
          <script
            async
            defer
            data-domain={`hirejuniors.dev`}
            src={`https://plausible.harshil.dev/js/plausible.js`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
