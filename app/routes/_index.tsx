import { V2_MetaFunction, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { PartnerSlide, PartnersCarousel } from '~/entities/partner/ui/carousel'
import { dmYFormat } from '~/shared/client/lib/date'
import { Button, CheckIcon, ContentSection } from '~/shared/client/ui'

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
      <header className="sticky top-0 bg-white shadow p-4">
        <div className="max-w-screen-2xl w-full px-4 m-auto grid grid-cols-5">
          <div className="w-full">
            <Link to="/" className="flex items-center gap-4">
              <img src="/logo.png" alt="" width={38} height={50} />
              <div className="flex-col">
                <p className="text-sm text-primary-main font-bold">
                  Единая Карта Жителя
                </p>
                <p className="text-sm text-primary-main">Мурманской Области</p>
                <p className="text-sm text-secondary-dark font-bold">
                  Кабинет Партнера
                </p>
              </div>
            </Link>
          </div>

          <ul className="flex items-center justify-center gap-8 col-span-3">
            {[
              { title: 'О кабинете', link: '/' },
              { title: 'Стать партнером', link: '/' },
              { title: 'Партнеры', link: '/' },
              { title: 'Частые вопросы', link: '/' },
              { title: 'Контакты', link: '/' },
            ].map(({ title, link }) => (
              <li key={title}>
                <Link
                  to={link}
                  className="hover:text-primary-main transition-colors duration-200"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end w-full">
            <Link
              to="/"
              className="hover:text-primary-main transition-colors duration-200"
            >
              Личный кабинет
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-secondary-main pt-32 space-y-32">
        <ContentSection className="flex flex-col justify-center items-center space-y-10">
          <h1 className="font-bold text-5xl text-center leading-normal">
            Кабинет партнера
            <br />
            ЕКЖ <span className="text-primary-main">Мурманской Области</span>
          </h1>

          <p className="text-lg text-muted-main text-center">
            Управление льготами, бонусами и услугами
          </p>

          <Button variant="outlined">Стать партнером</Button>
        </ContentSection>

        <ContentSection>
          <div className="space-y-4">
            <h2 className="text-5xl font-medium text-center">
              <span className="rainbow-text font-bold">Бесплатное</span>{' '}
              подключение и обслуживание
            </h2>
            <p className="text-muted-main text-center">
              Получите больше клиентов за счет Единой карты жителя
              <br />
              Мурманской области
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-8">
            {[
              {
                title: 'Это выгодно и стабильно',
                details: [
                  'Сокращение расходов на выпуск и выдачу собственных дисконтных и бонусных карт.',
                ],
                list: [
                  'Оповестим участников об Ваших акциях',
                  'Выдадим все необходимое',
                  'Стабильно обновляем наши системы',
                ],
              },
              {
                title: 'Новые клиенты и полный контроль',
                details: [
                  'Дополнительные каналы привлечения новых клиентов',
                  'Участие в программе лояльности не подразумевает фин. отношений и влияния на дисконтную политику партнёра.',
                ],
                list: ['Независимость', 'Постоянный приток клиентов'],
              },
            ].map(({ title, details, list }) => (
              <li
                key={title}
                className="p-10 rounded-xl space-y-4 bg-accent-main"
              >
                <p className="text-2xl font-bold">{title}</p>
                {details.map(d => (
                  <p key={d} className="text-secondary-dark">
                    {d}
                  </p>
                ))}
                <ul className="space-y-4">
                  {list.map(item => (
                    <li key={item} className="flex items-center gap-4">
                      <CheckIcon />
                      <span className="text-secondary-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

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

            <p className="text-muted-main">
              Все больше и больше компаний участвуют в проекте, среди них банки,
              супермаркеты, спортмагазины, фитнес-центры, кинотеатры, библиотеки
              и многие другие. Карта жителя Мурманской области заменяет карты
              лояльности популярных торговых сетей: клиенту больше не нужно
              искать нужную карту на кассе, а организации производить свои карты
              для скидок.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Button variant="outlined">Все партнеры</Button>
              <Button variant="default">Стать партнером</Button>
            </div>
          </div>
        </ContentSection>

        <ContentSection>
          <div className="space-y-4">
            <h2 className="text-5xl font-medium text-center">
              Получить доступ к{' '}
              <span className="rainbow-text font-bold">кабинету Партнера</span>{' '}
              можно уже сейчас
            </h2>
            <p className="text-muted-main text-center">
              Нужно просто отправить заявку и подготовить пакет документов
              организации
            </p>
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
                      <li key={line} className="text-muted-main">
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-main">{answer}</p>
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
            <h2 className="text-5xl font-medium leading-normal text-center">
              <span className="rainbow-text font-bold">Новости</span> для
              партнеров
            </h2>
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

        <ContentSection className="flex items-start gap-10">
          <div className="w-full">
            <h3 className="text-2xl font-bold">Приложение для партнеров</h3>
            <p className="text-muted-main">
              Удобное управление акциями и скидками в любом месте и в любое
              время. Мы разработали приложение для удобства и организации
              мобильности.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <img src="/mobile-app-preview.png" alt="" className="w-[400px]" />
          </div>
        </ContentSection>
      </main>

      <footer className="relative bg-white shadow-2xl z-10 p-8 space-y-8">
        <img
          src="/logo-full.png"
          alt="Единая карта жителя Мурманской области"
          className="w-[200px]"
        />

        <div className="grid grid-cols-5">
          <div>
            <p className="text-secondary-dark font-bold mb-4">Партнерам</p>
            <ul className="space-y-2">
              {[
                { name: 'О карте', link: '/' },
                { name: 'Стать партнером', link: '/' },
                { name: 'Партнеры', link: '/' },
                { name: 'Частые вопросы', link: '/' },
                { name: 'Контакты', link: '/' },
              ].map(({ name, link }) => (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-secondary-dark font-bold mb-4">Информация</p>
            <ul className="space-y-2">
              {[
                { name: 'Новости', link: '/' },
                { name: 'Документы', link: '/' },
                { name: 'Об операторе', link: '/' },
                { name: 'Единая Карта Жителя', link: '/' },
                { name: 'Приложение для клиента', link: '/' },
              ].map(({ name, link }) => (
                <li key={name}>
                  <Link to={link} className="hover:underline">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2"></div>
          <div>
            <p className="text-secondary-dark font-bold mb-4">Горячая линия</p>
            <ul className="space-y-2">
              <p className="font-bold text-primary-main">8 800 200 60 05</p>
              <p>Пн-Пт: 09:30 - 16:00</p>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-8">
            {[
              {
                logo: '/supports/1.png',
                name: 'Правительство Мурманской области',
                link: '/',
              },
              {
                logo: '/supports/2.png',
                name: 'Наш Север',
                link: '/',
              },
              {
                logo: '/supports/3.png',
                name: 'Карта51',
                link: '/',
              },
            ].map(({ logo, name, link }) => (
              <li key={name}>
                <Link to={link}>
                  <img src={logo} alt={name} className="w-[120px]" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-secondary-dark text-sm">
            <b>© 2023</b>. Разработано командой <b>SIGMA</b> для хакатона{' '}
            <span className="text-primary-main font-bold">#НаСевереКодить</span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default IndexPage
