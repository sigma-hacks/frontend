import { ReactNode } from 'react'

export type SidebarProps = {
  title: string
  children: ReactNode
}

export const Sidebar = ({ title, children }: SidebarProps) => (
  <div className="bg-white shadow-sm rounded-xl">
    <div className="p-4 border-b">
      <p className="font-medium">{title}</p>
    </div>
    <div className="p-4 space-y-4">{children}</div>
  </div>
)
