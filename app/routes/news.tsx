import { LoaderArgs, json } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { ChangeEvent, useState } from 'react'
import {
  ContentSection,
  SearchIcon,
  SectionTitle,
  TextField,
} from '~/shared/client/ui'

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')

  return json({
    query,
  })
}

const NewsPage = () => {
  const { query } = useLoaderData<typeof loader>()
  const [newQuery, setNewQuery] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewQuery(e.target.value)
  }

  return (
    <>
      <ContentSection>
        <SectionTitle>
          <span className="rainbow-text font-bold">Новости</span>
        </SectionTitle>

        <div className="space-y-4">
          <Form preventScrollReset className="relative max-w-screen-md m-auto">
            <TextField
              name="q"
              value={newQuery}
              onChange={handleChange}
              placeholder="Поиск"
              fullWidth
              className="pr-10"
            />
            <button
              type="submit"
              className="absolute top-0.5 right-0.5 bottom-0.5 aspect-square flex items-center justify-center"
            >
              <SearchIcon />
            </button>
          </Form>
          <p className="text-secondary-main text-center">
            По запросу “{query}” найдено 12 ответов из них показано 10
          </p>
        </div>
      </ContentSection>
    </>
  )
}

export default NewsPage
