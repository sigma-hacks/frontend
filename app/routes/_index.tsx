import { V2_MetaFunction, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import {
  PartnerSlide,
  PartnersCarousel,
  PartnersProgramAdvantages,
} from '~/entities/partner'
import { dmYFormat } from '~/shared/client/lib/date'
import {
  Button,
  ContentSection,
  SectionSubTitle,
  SectionTitle,
} from '~/shared/client/ui'

export const loader = async () => {
  const partners = [
    {
      logo: '/partner/partner-1.png',
      name: 'Деловые линии',
      serviceCount: 5,
      link: '/',
    },
    {
      logo: '/partner/partner-2.png',
      name: 'Мурманская городская универсальная научная библиотека',
      serviceCount: 5,
      link: '/',
    },
    {
      logo: '/partner/partner-3.png',
      name: 'Снежная деревня',
      serviceCount: 5,
      link: '/',
    },
  ]

  const news = [
    {
      slug: '/',
      banner: '/news/1.png',
      title: 'Новый партнер «Снежная Деревня»',
      details:
        'Теперь можно полюбоваться красотами Снежной Деревни используя ЕКЖ Мурманской Области Области Области',
      createdAt: new Date(),
    },
    {
      slug: '/',
      banner: '/news/2.png',
      title: 'Новый партнер «ТУНДРА ПАРК»',
      details:
        'Теперь можно полюбоваться красотами Снежной Деревни используя ЕКЖ Мурманской Области Области Области',
      createdAt: new Date(),
    },
    {
      slug: '/',
      banner: '/news/3.png',
      title: 'Новый партнер проекта Кафе «ЭДЕЛЬВЕЙС»',
      details:
        'Теперь можно полюбоваться красотами Снежной Деревни используя ЕКЖ Мурманской Области Области Области',
      createdAt: new Date(),
    },
  ]

  return json({
    partners,
    news,
  })
}

export const meta: V2_MetaFunction = () => [
  { title: 'Кабинет партнера ЕКЖ Мурманской Области' },
]

const IndexPage = () => {
  const { partners, news } = useLoaderData<typeof loader>()

  return (
    <>
      <ContentSection className="flex flex-col justify-center items-center space-y-12">
        <h1 className="font-bold text-5xl text-center leading-normal">
          Кабинет партнера
          <br />
          ЕКЖ <span className="text-primary-main">Мурманской Области</span>
        </h1>

        <p className="text-lg text-muted-main text-center">
          Управление льготами, бонусами и услугами
        </p>

        <Link to="/be-partner">
          <Button variant="outlined">Стать партнером</Button>
        </Link>
      </ContentSection>

      <ContentSection>
        <div className="space-y-4">
          <SectionTitle>
            <span className="rainbow-text font-bold">Бесплатное</span>{' '}
            подключение и обслуживание
          </SectionTitle>
          <SectionSubTitle>
            Получите больше клиентов за счет Единой карты жителя
            <br />
            Мурманской области
          </SectionSubTitle>
        </div>

        <PartnersProgramAdvantages />

        <ul className="grid grid-cols-3 gap-4">
          {[
            {
              icon: '/partner/icon-1.png',
              title: 'Кто может стать Партнером?',
              details:
                'Индивидуальные предприниматели и иные Юридические лица, а также Государственные организации оказывающие платные услуги',
            },
            {
              icon: '/partner/icon-2.png',
              title: 'Какие нужны документы?',
              details:
                'Заявление о присоединении к сервису Карточку подключаемого предприятия',
            },
            {
              icon: '/partner/icon-3.png',
              title: 'Сколько потребуется времени?',
              details:
                'Чаще всего подключение к проекту занимает от одного до трех месяцев.',
            },
          ].map(({ icon, title, details }) => (
            <li
              key={title}
              className="bg-white shadow-sm p-10 rounded-xl flex flex-col items-center gap-4"
            >
              <img
                src={icon}
                alt=""
                className="w-[40px] h-[40px] object-contain"
              />
              <p className="text-center text-2xl font-bold w-72">{title}</p>
              <p className="text-center text-muted-main text-sm">{details}</p>
            </li>
          ))}
        </ul>

        <div className="bg-accent-main py-10 px-20 rounded-xl space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Текущие партнеры</h3>
            <p className="text-2xl text-muted-main">
              <b>{partners.length}</b> организаций
            </p>
          </div>

          <PartnersCarousel>
            {partners.map(({ logo, name, serviceCount, link }) => (
              <PartnerSlide
                key={name}
                logo={logo}
                name={name}
                servicesCount={serviceCount}
                link={link}
              />
            ))}
          </PartnersCarousel>

          <p className="text-muted-dark">
            Все больше и больше компаний участвуют в проекте, среди них банки,
            супермаркеты, спортмагазины, фитнес-центры, кинотеатры, библиотеки и
            многие другие. Карта жителя Мурманской области заменяет карты
            лояльности популярных торговых сетей: клиенту больше не нужно искать
            нужную карту на кассе, а организации производить свои карты для
            скидок.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button variant="outlined">Все партнеры</Button>
            <Button variant="default">Стать партнером</Button>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="space-y-4">
          <SectionTitle>
            Получить доступ к{' '}
            <span className="rainbow-text font-bold">кабинету Партнера</span>{' '}
            можно уже сейчас
          </SectionTitle>
          <SectionSubTitle>
            Нужно просто отправить заявку и подготовить пакет документов
            организации
          </SectionSubTitle>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              question: 'Есть ли виртуальная карта?',
              answer: 'Нет, но работы по этому направлению ведутся.',
            },
            {
              question: 'Сколько длится подключение к кабинету Партнера?',
              answer:
                'Подключение кабинета для Вас может длится от одного до трех месяцев. Зависит это от того, на сколько быстро Вы подготовите документы, каким образом произойдет отправка документов и на сколько сейчас загружен центр Операторов ЕКЖ.',
            },
            {
              question: 'Если заявление отклонено?',
              answer:
                'Оператор отправляет ТСП уведомление с указанием причин в течении пяти рабочих дней.',
            },
            {
              question: 'Возможные причины отказа?',
              answer: [
                '1. Непредоставление сведений, обязательных при заполнении заявления об участии в качестве акцептанта',
                '2. Hепредоставление документов, подтверждающих сведения в заявлении об участии в качестве акцептанта',
              ],
            },
          ].map(({ question, answer }) => (
            <div
              key={question}
              className="p-10 rounded-xl bg-accent-main space-y-4"
            >
              <p className="font-bold">{question}</p>
              {Array.isArray(answer) ? (
                <ul className="space-y-2">
                  {answer.map(line => (
                    <li key={line} className="text-muted-dark">
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-dark">{answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="rainbow">Больше вопросов</Button>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="space-y-4 flex flex-col items-center">
          <SectionTitle>
            <span className="rainbow-text font-bold">Новости</span> для
            партнеров
          </SectionTitle>
          <Button variant="ghost">Все новости {'>'}</Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {news.map(({ banner, title, details, createdAt, slug }) => (
            <div
              key={title}
              className="bg-white shadow-sm rounded-xl overflow-hidden"
            >
              <img src={banner} alt="" className="w-full h-56 object-cover" />
              <div className="p-4 space-y-4">
                <p className="font-bold">{title}</p>
                <p className="text-muted-main num-of-lines-2">{details}</p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-main">
                    {dmYFormat(createdAt)}
                  </span>
                  <Link
                    to={`/news/${slug}`}
                    className="text-primary-main underline"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  )
}

export default IndexPage
