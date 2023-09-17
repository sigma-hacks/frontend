import cn from 'classnames'
import { ComponentProps } from 'react'

export const SectionTitle = ({ className, ...props }: ComponentProps<'h2'>) => (
  <h2
    {...props}
    className={cn('text-5xl font-medium text-center', className)}
  />
)

export const SectionSubTitle = ({ className, ...props }: ComponentProps<'p'>) => (
  <p
    {...props}
    className={cn('text-muted-main text-center', className)}
  />
)
