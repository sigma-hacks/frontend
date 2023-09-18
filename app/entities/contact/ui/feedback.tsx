import { FormEvent } from 'react'
import { Button, CheckboxField, TextField } from '~/shared/client/ui'

export const FeedbackForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-16 max-w-screen-sm w-full m-auto"
    >
      <div className="space-y-2">
        <p className="text-2xl font-bold text-center">Обратная связь</p>
        <p className="text-muted-main text-center">
          Свяжемся с вами в течение 72 часов
        </p>
      </div>

      <div className="space-y-8">
        <TextField
          label="Тема обращения *"
          placeholder="Выберите тему обращения"
          fullWidth
        />

        <TextField label="Вопрос или сообщение *" fullWidth />

        <TextField
          label="Как к Вам обращаться?"
          placeholder="Например: Василий Игнатьев"
          fullWidth
        />
      </div>

      <div className="space-y-2">
        <p className="text-2xl font-bold text-center">Куда направить ответ?</p>
        <p className="text-muted-main text-center">
          Если ответ не требуется, оставьте поля пустыми
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex gap-4">
          <TextField label="Контактный номер" fullWidth />
          <TextField
            label="Электронная почта"
            placeholder="example@mail.ru"
            fullWidth
          />
        </div>

        <CheckboxField label="Я принимаю соглашение об использовании персональных данных" />

        <div className="flex justify-center">
          <Button variant="default" type="submit">
            Отправить
          </Button>
        </div>
      </div>
    </form>
  )
}
