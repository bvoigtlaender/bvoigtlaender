import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="I make good websites." />
        <meta name="og:title" content="Bjarne Voigtländer" />
        <meta name="og:description" content="I make good websites." />
      </Head>
      <body className="overflow-y-scroll p-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
