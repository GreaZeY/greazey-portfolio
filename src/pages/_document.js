import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-IN'>
        <Head>
        <meta name="yandex-verification" content="8d2e7f57778ae04b" />
        <meta name="title" content="Nikhil's Portfolio" />    
        <meta name="description" content="My website to showcase my work."/>
        <meta property="og:title" content="Nikhil's Portfolio"/>
        <meta property="og:description" content="My website to showcase my work."/>
        <meta property="og:image" content="/images/ack.jfif"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />

        </body>
      </Html>
    );
  }
}