import { Link } from '@remix-run/react'
import { infoLinks, mainLinks } from '../../config/url'

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow px-4 py-2 z-20">
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
          {Object.values(mainLinks).map(({ title, link }) => (
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
  )
}

export const Footer = () => {
  return (
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
            {Object.values(mainLinks).map(({ title, link }) => (
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
            {Object.values(infoLinks).map(({ title, link }) => (
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
              logo: '/supports/1.png',
              title: 'Правительство Мурманской области',
              link: '/',
            },
            {
              logo: '/supports/2.png',
              title: 'Наш Север',
              link: '/',
            },
            {
              logo: '/supports/3.png',
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
    </footer>
  )
}
