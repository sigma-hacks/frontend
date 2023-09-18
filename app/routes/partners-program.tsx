import { V2_MetaFunction } from '@remix-run/node'
import { ContactsCardsList } from '~/entities/contact'
import { PartnersProgramAdvantages } from '~/entities/partner'
import {
  ContentSection,
  SectionSubTitle,
  SectionTitle,
} from '~/shared/client/ui'

export const meta: V2_MetaFunction = () => [
  { title: 'Партнёрская программа | Кабинет партнера ЕКЖ Мурманской Области' },
]

const PartnersProgramPage = () => {
  return (
    <>
      <ContentSection>
        <div className="space-y-4">
          <SectionTitle>
            <span className="rainbow-text font-bold">Партнёрская</span>{' '}
            программа
          </SectionTitle>
          <SectionSubTitle>
            Участие приняли уже более 20 организаций
          </SectionSubTitle>
        </div>

        <PartnersProgramAdvantages />
      </ContentSection>

      <ContentSection>
        <div className="space-y-4">
          <SectionTitle>Как стать партнёром</SectionTitle>
          <SectionSubTitle>
            Подключение к сервису и проверка документов занимает от одного до
            трех месяцев
          </SectionSubTitle>
        </div>

        <ol className="grid grid-cols-3 gap-10">
          {[
            {
              title: '1 шаг',
              subtitle: 'Оформить пакет документов',
              details: [
                '1. Заявление о присоединении',
                '2. Карточку предприятия',
              ],
            },
            {
              title: '2 шаг',
              subtitle: 'Отправить документы Оператору ЕКЖ',
              details:
                'Заказным письмом по адресу: 184209, Мурманская область, г. Апатиты, ул. Ферсмана 26В',
            },
            {
              title: '3 шаг',
              subtitle: 'Ожидать рассмотрения документов',
              details: 'Занимает до 10 рабочих дней',
            },
          ].map(({ title, subtitle, details }) => (
            <li key={title} className="space-y-2.5">
              <div className="border-b-4 pb-2.5">
                <p className="text-primary-main text-7xl font-bold">{title}</p>
              </div>
              <p className="font-bold">{subtitle}</p>
              {Array.isArray(details) ? (
                <ul>
                  {details.map(line => (
                    <li key={line} className="text-muted-main">
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-main">{details}</p>
              )}
            </li>
          ))}
        </ol>

        <ul className="grid grid-cols-2 gap-5">
          <li className="p-10 rounded-xl space-y-8 bg-accent-main">
            <div className="flex justify-between">
              <p className="text-2xl font-bold">
                Если заявление{' '}
                <span className="text-success-main">принято</span>
              </p>
              <img
                src="/assets/img/icons/outlined-success-icon.png"
                alt=""
                className="w-[30px] object-contain"
              />
            </div>

            <ol className="space-y-8">
              {[
                {
                  icon: '/assets/img/icons/outlined-mail-icon.png',
                  text: 'В течение 5 рабочих дней Оператор ЕКЖ направляет подписанный проект соглашения в 2-х экземплярах',
                },
                {
                  icon: '/assets/img/icons/outlined-document-icon.png',
                  text: 'Партнер, не позднее 7 рабочих дней, подписывает и направляет один из экземпляров в сторону Оператора ЕКЖ',
                },
                {
                  icon: '/assets/img/icons/outlined-smile-icon.png',
                  text: 'Оператор ЕКЖ, не позднее 3 рабочих дней включает Партнера в реестр приложений ЕКЖ, выдает доступ к личному кабинету Партнера',
                },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-4">
                  <img src={icon} alt="" className="w-[35px]" />
                  <p className="text-muted-dark">{text}</p>
                </li>
              ))}
            </ol>
          </li>
          <li className="p-10 rounded-xl space-y-8 bg-accent-main">
            <div className="flex justify-between">
              <p className="text-2xl font-bold">
                Если заявление{' '}
                <span className="text-error-main">отклонено</span>
              </p>
              <img
                src="/assets/img/icons/outlined-error-icon.png"
                alt=""
                className="w-[30px] object-contain"
              />
            </div>

            <p className="flex items-center gap-4">
              <img
                src="/assets/img/icons/outlined-mail-icon.png"
                alt=""
                className="w-[35px]"
              />
              <p className="text-muted-dark">
                В течение 5 рабочих дней Оператор отправляет ТСП уведомление с
                указанием причин
              </p>
            </p>

            <p className="text-2xl font-bold">Возможные причины отказа</p>

            <ul className="space-y-4 list-disc pl-4">
              {[
                'Непредставление сведений, обязательных при заполнении заявления об участии в качестве акцептанта',
                'Непредставление документов, подтверждающих сведения в заявлении об участии в качестве акцептанта',
              ].map(cause => (
                <li key={cause} className="text-muted-dark">
                  {cause}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </ContentSection>

      <ContentSection>
        <div className="space-y-4">
          <SectionTitle>
            <span className="rainbow-text font-bold">Контакты</span>
          </SectionTitle>
          <SectionSubTitle>
            Следующие специалисты ответят на ваши вопросы и помогут оформить
            документы
          </SectionSubTitle>
        </div>

        <ContactsCardsList />
      </ContentSection>
    </>
  )
}

export default PartnersProgramPage
