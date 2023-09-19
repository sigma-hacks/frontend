import { ContentSection } from '~/shared/client/ui'

export const PartnersMobileAppPromotion = () => {
  return (
    <ContentSection className="flex items-center gap-10">
      <div className="w-full space-y-4">
        <h3 className="text-2xl font-bold">Приложение для партнеров</h3>
        <p className="text-muted-main">
          Удобное управление акциями и скидками в любом месте и в любое время.
          Мы разработали приложение для удобства и организации мобильности.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <img src="/assets/img/mobile-app-preview.png" alt="" className="w-[400px]" />
      </div>
    </ContentSection>
  )
}
