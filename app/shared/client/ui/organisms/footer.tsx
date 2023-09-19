import { Link } from '@remix-run/react'
import { routes } from '../../config'

const mainLinks = [
  {
    title: 'О кабинете',
    link: routes.HOME,
  },
  {
    title: 'Стать партнером',
    link: routes.PARTNERS_PROGRAM,
  },
  {
    title: 'Партнеры',
    link: routes.PARTNERS_LIST,
  },
  {
    title: 'Частые вопросы',
    link: routes.QUESTIONS,
  },
  {
    title: 'Контакты',
    link: routes.CONTACTS,
  },
]

const infoLinks = [
  {
    title: 'Новости',
    link: routes.NEWS,
  },
  {
    title: 'Документы',
    link: routes.DOCS,
  },
  {
    title: 'Об операторе',
    link: routes.ABOUT_OPERATOR,
  },
  {
    title: 'Единая Карта Жителя',
    link: routes.CARD,
  },
  {
    title: 'Приложение для клиента',
    link: routes.CLIENT_APP,
  },
]

export const Footer = () => (
  <footer className="relative bg-white shadow-2xl z-10 p-8">
    <div className="max-w-screen-xl w-full px-4 m-auto space-y-8">
      <img
        src="/assets/img/logo-full.png"
        alt="Единая карта жителя Мурманской области"
        className="w-[200px]"
      />

      <div className="grid grid-cols-5">
        <div>
          <p className="text-secondary-dark font-bold mb-4">Партнерам</p>
          <ul className="space-y-2">
            {mainLinks.map(({ title, link }) => (
              <li key={title}>
                <Link to={link} className="hover:underline">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-secondary-dark font-bold mb-4">Информация</p>
          <ul className="space-y-2">
            {infoLinks.map(({ title, link }) => (
              <li key={title}>
                <Link to={link} className="hover:underline">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2"></div>
        <div>
          <p className="text-secondary-dark font-bold mb-4">Горячая линия</p>
          <ul className="space-y-2">
            <Link
              to="tel:8 800 200 60 05"
              className="font-bold text-primary-main hover:underline"
            >
              8 800 200 60 05
            </Link>
            <p>Пн-Пт: 09:30 - 16:00</p>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-8">
          {[
            {
              logo: '/assets/img/supports/1.png',
              title: 'Правительство Мурманской области',
              link: '/',
            },
            {
              logo: '/assets/img/supports/2.png',
              title: 'Наш Север',
              link: '/',
            },
            {
              logo: '/assets/img/supports/3.png',
              title: 'Карта51',
              link: '/',
            },
          ].map(({ logo, title, link }) => (
            <li key={title}>
              <Link to={link}>
                <img src={logo} alt={title} className="w-[120px]" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-secondary-dark text-sm">
          <b>© 2023</b>. Разработано командой <b>SIGMA</b> для хакатона{' '}
          <span className="text-primary-main font-bold">#НаСевереКодить</span>
        </p>
      </div>
    </div>
  </footer>
)
