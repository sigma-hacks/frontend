import cn from 'classnames'
import { ComponentProps } from 'react'

export type TextFieldProps = {
  label: string
} & ComponentProps<'input'>

export const TextField = ({ label, className, ...props }: TextFieldProps) => {
  return (
    <div className="inline-flex flex-col">
      <label htmlFor={props.id} className="text-primary-main">
        {label}
      </label>
      <input
        {...props}
        className={cn(
          'bg-primary-light text-base px-4 py-2 rounded-xl placeholder:text-primary-main outline-none border-2 border-transparent focus:border-primary-main',
          className
        )}
      />
    </div>
  )
}
