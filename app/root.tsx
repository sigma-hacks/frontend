import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react'
import { PropsWithChildren } from 'react'
import { PartnersMobileAppPromotion } from './entities/partner'
import { errorStatusMessage } from './shared/client/config/error-status'
import { mainLinks } from './shared/client/config/url'
import { Button, ContentSection, Footer, Header } from './shared/client/ui'
import styles from './tailwind.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: styles },
]

export const meta: V2_MetaFunction = () => [
  { title: 'Кабинет партнера ЕКЖ Мурманской Области' },
]

const Document = ({ children }: PropsWithChildren) => {
  return (
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

        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="font-inter">
        <Header />
        <main className="bg-secondary-main pt-32 space-y-32">
          {children}
          <PartnersMobileAppPromotion />
        </main>
        <Footer />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

const App = () => (
  <Document>
    <Outlet />
  </Document>
)

export const ErrorBoundary = () => {
  const error = useRouteError()

  const message =
    (isRouteErrorResponse(error) && errorStatusMessage[error.status]) ||
    errorStatusMessage[500]

  return (
    <Document>
      <ContentSection>
        <div className="space-y-4">
          <p className="text-2xl font-bold">{message.title}</p>
          <p>{message.details}</p>
        </div>
        <Link to={mainLinks.home.link} className="block">
          <Button variant="default">На главную</Button>
        </Link>
      </ContentSection>
    </Document>
  )
}

export default App
