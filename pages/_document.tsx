import * as React from 'react'
import { withEmotionCache } from 'tss-react/nextJs'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '../src/styles/createEmotionCache'
import { ServerStyleSheets as JSSServerStyleSheets } from '@mui/styles'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <link
            rel="shortcut icon"
            href={`/static/images/favicon/favicon.ico`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`/static/images/favicon/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`/static/images/favicon/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`/static/images/favicon/favicon-16x16.png`}
          />
          <link
            rel="mask-icon"
            href={`/static/images/favicon/safari-pinned-tab.svg`}
            color="#d34856"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={undefined}
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// You can find a benchmark of the available CSS minifiers under
// https://github.com/GoalSmashers/css-minification-benchmark
// We have found that clean-css is faster than cssnano but the output is larger.
// Waiting for https://github.com/cssinjs/jss/issues/279
// 4% slower but 12% smaller output than doing it in a single step.
//
// It's using .browserslistrc
let prefixer: any
let cleanCSS: any
if (process.env.NODE_ENV === 'production') {
  /* eslint-disable global-require */
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const postcss = require('postcss')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const autoprefixer = require('autoprefixer')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const CleanCSS = require('clean-css')
  /* eslint-enable global-require */

  prefixer = postcss([autoprefixer])
  cleanCSS = new CleanCSS()
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)
  const jssSheets = new JSSServerStyleSheets()

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return jssSheets.collect(<App emotionCache={cache} {...props} />)
        },
    })

  const initialProps = await Document.getInitialProps(ctx)

  // Generate style tags for the styles coming from Emotion
  // This is important. It prevents Emotion from rendering invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  // Generate the css string for the styles coming from jss
  let css = jssSheets.toString()
  // It might be undefined, e.g. after an error.
  if (css && process.env.NODE_ENV === 'production') {
    const result1 = await prefixer.process(css, { from: undefined })
    css = result1.css
    css = cleanCSS.minify(css).styles
  }

  return {
    ...initialProps,
    styles: [
      ...emotionStyleTags,
      <style
        id="jss-server-side"
        key="jss-server-side"
        dangerouslySetInnerHTML={{ __html: css }}
      />,
      ...React.Children.toArray(initialProps.styles),
    ],
  }
}

export default withEmotionCache({
  Document: MyDocument,
  getCaches: () => [createEmotionCache()],
})
