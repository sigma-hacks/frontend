import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import styles from './tailwind.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: styles },
]

export const meta: V2_MetaFunction = () => [
  { title: 'Кабинет партнера ЕКЖ Мурманской Области' },
]

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
})

const App = () => (
  <html lang="ru">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <Links />
      <link rel="icon" href="/assets/img/logo.png" type="image/png" />
    </head>
    <body>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
)

export default App
