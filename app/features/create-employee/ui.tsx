import { FormEvent } from 'react'
import { Button, Sidebar, TextField } from '~/shared/client/ui'

export const CreateEmployee = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Sidebar title="Добавление услуги">
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField label="ФИО сотрудника" fullWidth />
        <TextField label="6-значный код авторизации" fullWidth />
        <TextField type="password" label="Пароль" fullWidth />
        <TextField type="email" label="Email" fullWidth />
        <TextField label="Номер единой карты жителя сотрудника" fullWidth />

        <div className="flex justify-center pt-4">
          <Button type="submit" className="w-full max-w-[300px]">
            Добавить
          </Button>
        </div>
      </form>
    </Sidebar>
  )
}
