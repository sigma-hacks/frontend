import { useQueryClient } from '@tanstack/react-query'
import { FormEvent, useState } from 'react'
import { serviceApi } from '~/shared/client/api'
import {
  Button,
  MultilineField,
  SelectField,
  Sidebar,
  TextField,
} from '~/shared/client/ui'

export const CreateService = () => {
  const client = useQueryClient()
  const [isLoading, setIsLoading] = useState(false)

  const [activity, setActivity] = useState('1')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [ageFrom, setAgeFrom] = useState('')
  const [ageTo, setAgeTo] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      await serviceApi.createService({
        is_active: activity === '1',
        name,
        description,
        price: +price,
        conditions: {
          age: {
            from: +ageFrom,
            to: +ageTo,
          },
        },
        photo: 'https://images.com/good-image.png',
      })

      client.invalidateQueries(['services'])

      alert('Услуга успешно добавлена')
    } catch (e) {
      alert('Не удалось добавить услугу')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Sidebar title="Добавление услуги">
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Наименование услуги/товара"
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
        />

        <TextField
          type="number"
          label="Начальная цена"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="0"
          fullWidth
        />

        <MultilineField
          label="Краткое описание"
          value={description}
          onChange={e => setDescription(e.target.value)}
          fullWidth
        />

        <SelectField
          label="Активность"
          value={activity}
          onChange={e => setActivity(e.target.value)}
          options={[
            {
              label: 'Услуга активна',
              value: '1',
            },
            {
              label: 'Услуга неактивна',
              value: '0',
            },
          ]}
          fullWidth
        />

        <p>Ограничение по возрасту</p>

        <div className="flex gap-4">
          <div className="w-1/2 flex gap-2 items-center">
            <span>от</span>
            <TextField
              type="number"
              value={ageFrom}
              onChange={e => setAgeFrom(e.target.value)}
              placeholder="0"
              fullWidth
            />
          </div>
          <div className="w-1/2 flex gap-2 items-center">
            <span>до</span>
            <TextField
              type="number"
              value={ageTo}
              onChange={e => setAgeTo(e.target.value)}
              placeholder="99"
              fullWidth
            />
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full max-w-[300px]"
          >
            Добавить
          </Button>
        </div>
      </form>
    </Sidebar>
  )
}
