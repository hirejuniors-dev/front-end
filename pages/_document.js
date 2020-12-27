import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="Hire Juniors" />
          <meta
            name="description"
            content="A website to help you find your first job in tech!"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hirejuniors.dev" />
          <meta property="og:title" content="Hire Juniors" />
          <meta
            property="og:description"
            content="A website to help you find your first job in tech!"
          />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/hirejuniors-dev/front-end/main/public/social.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://hirejuniors.dev/" />
          <meta property="twitter:title" content="Hire Juniors" />
          <meta
            property="twitter:description"
            content="A website to help you find your first job in tech!"
          />
          <meta
            property="twitter:image"
            content="https://raw.githubusercontent.com/hirejuniors-dev/front-end/main/public/social.png"
          />
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
      </Html>
    );
  }
}
