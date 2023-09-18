import cn from 'classnames'
import { ComponentProps, useState } from 'react'
import { CheckWithoutCircleIcon } from '../icons'

export type TextFieldProps = {
  label?: string
  fullWidth?: boolean
  containerClassName?: string
} & ComponentProps<'input'>

export const TextField = ({
  label,
  className,
  fullWidth,
  containerClassName,
  ...props
}: TextFieldProps) => {
  return (
    <div
      className={cn(
        'inline-flex flex-col space-y-2',
        fullWidth && 'w-full',
        containerClassName
      )}
    >
      {label && (
        <label htmlFor={props.id} className="text-primary-main">
          {label}
        </label>
      )}
      <input
        {...props}
        type={props.type || 'text'}
        className={cn(
          'bg-accent-main text-base px-4 py-2 rounded-xl placeholder:text-muted-dark outline-none border-2 border-transparent focus:border-primary-main',
          fullWidth && 'w-full',
          className
        )}
      />
    </div>
  )
}

export type CheckboxFieldProps = {
  label: string
}

export const CheckboxField = ({ label, ...props }: CheckboxFieldProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        {...props}
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        type="checkbox"
        className="opacity-0 absolute"
      />
      <div className="w-8 h-8 bg-accent-main rounded-full flex items-center justify-center">
        {checked && <CheckWithoutCircleIcon />}
      </div>
      {label}
    </label>
  )
}
