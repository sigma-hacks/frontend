import { V2_MetaFunction } from '@remix-run/node'
import { ContactsCardsList } from '~/entities/contact'
import { FeedbackForm } from '~/entities/contact/ui/feedback'
import {
  ContentSection,
  SectionSubTitle,
  SectionTitle,
} from '~/shared/client/ui'

export const meta: V2_MetaFunction = () => [
  { title: 'Контакты | Кабинет партнера ЕКЖ Мурманской Области' },
]

const Contacts = () => {
  return (
    <>
      <ContentSection>
        <div className="space-y-4">
          <SectionTitle>
            <span className="rainbow-text font-bold">Контакты</span>
          </SectionTitle>
          <SectionSubTitle>
            По вопросам подключения и использования кабинета Партнера ЕКЖ
            Мурманской области
          </SectionSubTitle>
        </div>

        <ContactsCardsList />
      </ContentSection>

      <ContentSection>
        <FeedbackForm />
      </ContentSection>
    </>
  )
}

export default Contacts
