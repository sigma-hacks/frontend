import { Form } from '@remix-run/react'
import cn from 'classnames'
import { TextField } from '../atoms'
import { SearchIcon } from '../icons'

export type SearchFormProps = {
  className?: string
}

export const SearchForm = ({ className }: SearchFormProps) => (
  <Form preventScrollReset className={cn('relative', className)}>
    <TextField name="q" placeholder="Поиск" fullWidth className="pr-10" />
    <button
      type="submit"
      className="absolute top-0.5 right-0.5 bottom-0.5 aspect-square flex items-center justify-center"
    >
      <SearchIcon />
    </button>
  </Form>
)
