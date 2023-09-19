import { Outlet } from '@remix-run/react'
import { useOnlyAuthenticatedAccess } from '~/shared/client/lib/hooks'

const AuthLayout = () => {
  useOnlyAuthenticatedAccess()

  return (
    <div className="relative h-screen bg-auth-gradient bg-fixed">
      <div className="relative h-full flex flex-col z-10">
        <Outlet />
      </div>
      <img
        src="/assets/img/auth-bg.svg"
        alt=""
        className="fixed left-0 right-0 bottom-0 z-0"
      />
    </div>
  )
}

export default AuthLayout
