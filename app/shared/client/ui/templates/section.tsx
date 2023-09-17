import cn from 'classnames'
import { ComponentProps } from 'react'

export const ContentSection = ({
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <section>
      <div
        {...props}
        className={cn(
          'max-w-screen-xl w-full px-4 m-auto space-y-16',
          className
        )}
      />
    </section>
  )
}
