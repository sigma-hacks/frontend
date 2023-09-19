import { FormEvent } from 'react'
import {
  Button,
  InputLabel,
  SelectField,
  Sidebar,
  TextField,
} from '~/shared/client/ui'

export const CreateDiscount = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Sidebar title="Быстрое создание скидки">
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField label="Наименование услуги/товара" fullWidth />
        <TextField label="Размер скидки" fullWidth />
        <SelectField
          label="Подключенные услуги"
          options={[{ label: 'Все услуги', value: 'all' }]}
          fullWidth
        />
        <div className="space-y-2">
          <InputLabel>Первое условие</InputLabel>
          <div className="flex gap-2">
            <SelectField
              options={[{ label: 'Возраст от', value: 'age_from' }]}
              fullWidth
            />
            <TextField placeholder="12 лет" fullWidth />
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button type="submit" className="w-full max-w-[300px]">
            Добавить
          </Button>
        </div>
      </form>
    </Sidebar>
  )
}
