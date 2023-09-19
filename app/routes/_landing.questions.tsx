import { LoaderArgs, V2_MetaFunction, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import {
  ContentSection,
  SearchForm,
  SectionSubTitle,
  SectionTitle,
} from '~/shared/client/ui'

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')

  const questions = [
    {
      question: 'Есть ли виртуальная карта?',
      answer: 'Нет, но работы по этому направлению ведутся.',
    },
    {
      question: 'Есть ли физическая карта?',
      answer: `
        Да и она активно работает. Вы можете более детально ознакомится с следующей информацией:
        1. Какие цены на использование карты
        2. Для чего служит карта
        3. Почему именно ЕКЖ Мурманской области
        Нажмите на любой пункт из списка и получите ответ.
      `,
    },
  ]

  return json({
    questions,
    query,
  })
}

export const meta: V2_MetaFunction = () => [
  { title: 'Вопросы и ответы | Кабинет партнера ЕКЖ Мурманской Области' },
]

const QuestionsPage = () => {
  const { questions, query } = useLoaderData<typeof loader>()

  return (
    <>
      <ContentSection>
        <div className="space-y-4">
          <SectionTitle>
            <span className="rainbow-text font-bold">Вопросы</span> и ответы
          </SectionTitle>
          <SectionSubTitle>
            В базе знаний {questions.length} вопросов и ответов
          </SectionSubTitle>
        </div>

        <div className="space-y-4">
          <SearchForm className="max-w-screen-md m-auto" />
          <p className="text-secondary-main text-center">
            По запросу “{query}” найдено 12 ответов из них показано 10
          </p>
        </div>

        <ul className="space-y-4">
          {questions.map(({ question, answer }) => (
            <li
              key={question}
              className="p-8 rounded-xl bg-accent-main space-y-2"
            >
              <p className="font-medium">{question}</p>
              <p className="text-muted-dark whitespace-pre-line leading-relaxed">
                {answer.trim()}
              </p>
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  )
}

export default QuestionsPage
