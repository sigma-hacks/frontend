import { Link, Outlet } from '@remix-run/react'
import { UserMenuButton } from '~/entities/user/ui/menu-button'
import { routes } from '~/shared/client/config'
import { useOnlyAuthenticatedAccess } from '~/shared/client/lib/hooks'
import { Footer, HeaderWrapper } from '~/shared/client/ui'

const menuLinks = [
  {
    title: 'Услуги',
    link: routes.CABINET_SERVICES,
  },
  {
    title: 'Скидки',
    link: routes.CABINET_DISCOUNTS,
  },
  {
    title: 'Сотрудники',
    link: routes.CABINET_EMPLOYEES,
  },
  {
    title: 'Нужна помощь?',
    link: routes.HOME,
  },
  {
    title: 'Контакты',
    link: routes.CONTACTS,
  },
]

const CabinetLayout = () => {
  useOnlyAuthenticatedAccess()

  return (
    <div className="font-inter flex flex-col h-screen">
      <HeaderWrapper
        left={
          <Link to="/" className="flex items-center gap-4">
            <img src="/assets/img/logo.png" alt="" width={38} height={50} />
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
        }
        middle={
          <ul className="flex items-center justify-center gap-8 h-full">
            {menuLinks.map(({ title, link }) => (
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
        }
        right={
          <div className="flex items-center justify-end h-full">
            <UserMenuButton />
          </div>
        }
      />

      <main className="grow bg-secondary-main py-16 space-y-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default CabinetLayout
