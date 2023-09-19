import { Link, Outlet } from '@remix-run/react'
import { useAuthRoute } from '~/entities/auth/model'
import { PartnersMobileAppPromotion } from '~/entities/partner'
import { routes } from '~/shared/client/config'
import { Footer, HeaderWrapper } from '~/shared/client/ui'

const menuLinks = [
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

const LandingLayout = () => {
  const cabinetRoute = useAuthRoute()

  return (
    <div className="font-inter">
      <HeaderWrapper
        left={
          <Link to="/" className="flex items-center gap-4">
            <img src="/assets/img/logo.png" alt="" width={38} height={50} />
            <div className="flex-col">
              <p className="text-sm text-primary-main font-bold">
                Единая Карта Жителя
              </p>
              <p className="text-sm text-primary-main">Мурманской Области</p>
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
            <Link
              to={cabinetRoute}
              className="hover:text-primary-main transition-colors duration-200"
            >
              Личный кабинет
            </Link>
          </div>
        }
      />

      <main className="bg-secondary-main pt-32 space-y-32">
        <Outlet />
        <PartnersMobileAppPromotion />
      </main>

      <Footer />
    </div>
  )
}

export default LandingLayout
