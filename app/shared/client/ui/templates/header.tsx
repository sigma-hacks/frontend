import { ReactNode } from 'react'

export type HeaderWrapperProps = {
  left: ReactNode
  middle: ReactNode
  right: ReactNode
}

export const HeaderWrapper = ({ left, middle, right }: HeaderWrapperProps) => (
  <header className="sticky top-0 bg-white shadow px-4 py-2 z-20">
    <div className="max-w-screen-xl w-full px-4 m-auto grid grid-cols-5">
      <div className="w-full">{left}</div>
      <div className="col-span-3">{middle}</div>
      <div className="w-full">{right}</div>
    </div>
  </header>
)
