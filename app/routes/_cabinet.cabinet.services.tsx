import { useQuery } from '@tanstack/react-query'
import { ServiceCard } from '~/entities/service'
import { CreateService } from '~/features/create-service'
import { serviceApi } from '~/shared/client/api'
import { ContentSection, SearchForm } from '~/shared/client/ui'

const CabinetServicesPage = () => {
  const { data: services } = useQuery(['services'], () =>
    serviceApi.getServices()
  )

  return (
    <>
      <ContentSection className="space-y-8">
        <h1 className="font-bold text-3xl">Услуги</h1>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 space-y-4">
            <SearchForm />

            {services && (
              <p className="text-muted-main text-sm ml-2">
                Найдено <b>{services.total}</b> услуг из них{' '}
                <b>{services.data.length}</b> показано
              </p>
            )}

            <ul className="space-y-4">
              {services?.data.map(
                ({ id, is_active, name, price, description, created_at }) => (
                  <li key={id}>
                    <ServiceCard
                      active={is_active}
                      name={name}
                      price={price}
                      description={description}
                      createdAt={created_at}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-span-4">
            <CreateService />
          </div>
        </div>
      </ContentSection>
    </>
  )
}

export default CabinetServicesPage
