import cn from 'classnames'
import { ComponentProps } from 'react'

const variants = {
  default: 'bg-primary-main text-white hover:bg-hover-main',
  outlined: 'bg-none text-primary-main border-2 border-primary-main',
  ghost: 'bg-none text-primary-main',
  rainbow:
    'bg-gradient-to-r text-white from-[#13A03B] via-[#137FA0] via-[#7025BB] to-[#4C647A]',
}

export type ButtonProps = {
  variant?: keyof typeof variants
} & ComponentProps<'button'>

export const Button = ({
  variant = 'default',
  className,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={cn(
      variants[variant],
      'px-8 py-3 text-center rounded-full font-bold transition-[background-color,transform,color] duration-200 active:scale-95 disabled:opacity-50',
      className
    )}
  />
)

export const IconButton = ({
  className,
  ...props
}: ComponentProps<'button'>) => (
  <button
    {...props}
    className={cn(
      'w-8 h-8 rounded-full hover:bg-black/5 active:bg-black/10 flex items-center justify-center transition-colors duration-100 cursor-pointer',
      className
    )}
  />
)
