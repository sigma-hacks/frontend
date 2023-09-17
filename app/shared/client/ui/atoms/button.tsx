import cn from 'classnames'
import { ComponentProps } from 'react'

const variants = {
  default: 'bg-primary-main text-white hover:bg-hover-main',
  outlined:
    'bg-none text-primary-main border-2 border-primary-main',
  ghost: 'bg-none text-primary-main',
  rainbow:
    'bg-gradient-to-r text-white from-[#13A03B] via-[#137FA0] via-[#7025BB] to-[#4C647A]',
}

export type ButtonProps = {
  variant: keyof typeof variants
} & ComponentProps<'button'>

export const Button = ({ variant, className, ...props }: ButtonProps) => (
  <button
    {...props}
    className={cn(
      variants[variant],
      'px-8 py-3 text-center rounded-full font-bold transition-[background-color,transform,color] duration-200 active:scale-95',
      className
    )}
  />
)
