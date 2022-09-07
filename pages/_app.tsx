import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'styles/createEmotionCache'
import { App } from 'components/App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { setupStore } from 'store/store'
import { SnackbarProvider } from 'notistack'
import { useEffect } from 'react'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const queryClient = new QueryClient()

const store = setupStore()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider
            maxSnack={4}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <App>
              <Head>
                <title>Starter</title>
                <meta
                  name="viewport"
                  content="initial-scale=1, width=device-width"
                />
                <meta
                  name="description"
                  content="It looks like you're early. The Lympo NFT platform is undergoing changes – prepare to experience a new era of Lympo and get ready for the world of SPORT!"
                />
                <meta
                  property="og:image"
                  content={`/static/images/meta/claim-meta-image.jpeg`}
                />
                <meta
                  name="twitter:image"
                  content={`/static/images/meta/claim-meta-image.jpeg`}
                />
              </Head>
              <Component {...pageProps} />
            </App>
          </SnackbarProvider>
        </QueryClientProvider>
      </Provider>
    </CacheProvider>
  )
}
