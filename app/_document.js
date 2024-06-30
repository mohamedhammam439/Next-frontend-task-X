import Document, { Html, Head, Main, NextScript } from "next/document";
import { Helmet } from "react-helmet";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=1280, initial-scale=1.0" />
            <meta name="description" content="a frontend task for wafferX" />
            <meta name="keywords" content="members, wafferX, frontend" />
            <link rel="icon" href="/favicon.ico" />
          </Helmet>
          <script async src="https://www.google-analytics.com/analytics.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;