import { Link, useNavigate } from '@remix-run/react'
import { FormEvent, useState } from 'react'
import { authModel } from '~/entities/auth'
import { authApi } from '~/shared/client/api'
import { routes } from '~/shared/client/config'
import { Button, TextField } from '~/shared/client/ui'

const LOGIN_STEP = 1
const PASSWORD_STEP = 2
const SMS_STEP = 3

const LoginPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(LOGIN_STEP)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [smsCode, setSmsCode] = useState('1234')

  const { setAccessToken } = authModel.useAuthStore()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (step !== SMS_STEP) {
      setStep(step + 1)
      return
    }

    setIsLoading(true)

    try {
      const {
        data: { token },
      } = await authApi.login({ login, password })

      setAccessToken(token)
      navigate(routes.CABINET_SERVICES)
    } catch (e) {
      alert('Не удалось войти')
      setStep(LOGIN_STEP)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="m-auto max-w-md w-full space-y-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full space-y-8"
      >
        <img
          src="/assets/img/logo-full.png"
          alt="Единая карта жителя Мурманской области"
          className="w-[300px] m-auto"
        />

        <div className="space-y-2">
          <p className="text-2xl font-bold text-center">
            Вход в кабинет партнера
          </p>
          <p className="text-muted-main text-center">
            Получение доступа к сервисам портала «Единая карта жителя Мурманской
            области»
          </p>
        </div>

        {step === SMS_STEP ? (
          <div className="space-y-2">
            <TextField
              label="Код из СМС"
              value={smsCode}
              onChange={e => setSmsCode(e.target.value)}
              required
              fullWidth
            />
            <p className="text-muted-main text-sm">
              Отправить повторно можно будет через 120 секунд...
            </p>
            <button className="underline text-primary-main">Отправить</button>
          </div>
        ) : step === PASSWORD_STEP ? (
          <TextField
            type="password"
            label="Пароль от аккаунта"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            fullWidth
          />
        ) : (
          <TextField
            label="ИНН или номер телефона"
            value={login}
            onChange={e => setLogin(e.target.value)}
            required
            helperText="Потребуется ввести пароль или код из СМС"
            fullWidth
          />
        )}

        <div className="flex w-full gap-4">
          {step === LOGIN_STEP ? (
            <Link to={routes.HOME} className="w-1/2">
              <Button variant="outlined" type="button" className="w-full">
                На главную
              </Button>
            </Link>
          ) : (
            <Button
              variant="outlined"
              onClick={() => setStep(step - 1)}
              type="button"
              className="w-1/2"
            >
              Назад
            </Button>
          )}
          <Button type="submit" disabled={isLoading} className="w-1/2">
            Далее
          </Button>
        </div>
      </form>

      <div className="flex justify-between">
        <span>СЛУЖБА ПОДДЕРЖКИ</span>
        <Link to="tel:8 800 200 60 05" className="hover:underline">
          8 800 200 60 05
        </Link>
      </div>
    </main>
  )
}

export default LoginPage
