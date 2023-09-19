import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { ContentSection, SearchForm, SectionTitle } from '~/shared/client/ui'

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')

  return json({
    query,
  })
}

const NewsPage = () => {
  const { query } = useLoaderData<typeof loader>()

  return (
    <>
      <ContentSection>
        <SectionTitle>
          <span className="rainbow-text font-bold">Новости</span>
        </SectionTitle>

        <div className="space-y-4">
          <SearchForm className="max-w-screen-md m-auto" />
          <p className="text-secondary-main text-center">
            По запросу “{query}” найдено 12 ответов из них показано 10
          </p>
        </div>
      </ContentSection>
    </>
  )
}

export default NewsPage
