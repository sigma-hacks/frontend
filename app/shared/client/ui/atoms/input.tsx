import cn from 'classnames'
import { ComponentProps, ReactNode, useState } from 'react'
import { CheckWithoutCircleIcon } from '../icons'

export const InputLabel = ({
  className,
  ...props
}: ComponentProps<'label'>) => (
  <label {...props} className={cn('text-primary-main', className)} />
)

export type TextFieldProps = {
  label?: string
  fullWidth?: boolean
  containerClassName?: string
  helperText?: string
} & ComponentProps<'input'>

export const TextField = ({
  label,
  className,
  fullWidth,
  containerClassName,
  helperText,
  ...props
}: TextFieldProps) => (
  <div
    className={cn(
      'inline-flex flex-col space-y-2',
      fullWidth && 'w-full',
      containerClassName
    )}
  >
    {label && <InputLabel htmlFor={props.id}>{label}</InputLabel>}
    <input
      {...props}
      type={props.type || 'text'}
      className={cn(
        'bg-accent-main text-base px-4 py-2 rounded-xl placeholder:text-muted-dark outline-none border-2 border-transparent focus:border-primary-main',
        fullWidth && 'w-full',
        className
      )}
    />
    {helperText && <p className="text-sm text-muted-main">{helperText}</p>}
  </div>
)

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

export type MultilineFieldProps = {
  label?: string
  fullWidth?: boolean
  containerClassName?: string
  helperText?: string
} & ComponentProps<'textarea'>

export const MultilineField = ({
  label,
  fullWidth,
  containerClassName,
  helperText,
  className,
  ...props
}: MultilineFieldProps) => (
  <div
    className={cn(
      'inline-flex flex-col space-y-2',
      fullWidth && 'w-full',
      containerClassName
    )}
  >
    {label && <InputLabel htmlFor={props.id}>{label}</InputLabel>}
    <textarea
      {...props}
      className={cn(
        'bg-accent-main text-base px-4 py-2 rounded-xl placeholder:text-muted-dark outline-none border-2 border-transparent focus:border-primary-main resize-y',
        fullWidth && 'w-full',
        className
      )}
    ></textarea>
    {helperText && <p className="text-sm text-muted-main">{helperText}</p>}
  </div>
)

export type SelectFieldProps = {
  options: {
    value: string | number
    label: ReactNode
  }[]
  label?: string
  fullWidth?: boolean
  containerClassName?: string
  helperText?: string
} & ComponentProps<'select'>

export const SelectField = ({
  options,
  label,
  fullWidth,
  containerClassName,
  helperText,
  className,
  ...props
}: SelectFieldProps) => (
  <div
    className={cn(
      'inline-flex flex-col space-y-2',
      fullWidth && 'w-full',
      containerClassName
    )}
  >
    {label && <InputLabel htmlFor={props.id}>{label}</InputLabel>}
    <select
      {...props}
      className={cn(
        'bg-accent-main text-base px-4 py-2 rounded-xl placeholder:text-muted-dark outline-none border-2 border-transparent focus:border-primary-main resize-y',
        fullWidth && 'w-full',
        className
      )}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
    {helperText && <p className="text-sm text-muted-main">{helperText}</p>}
  </div>
)
