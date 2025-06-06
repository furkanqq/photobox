import { NextScript, Main, Html, Head } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/assets/q.png" type="image/svg" rel="icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
