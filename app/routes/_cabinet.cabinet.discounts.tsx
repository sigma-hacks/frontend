import { CreateDiscount } from '~/features/create-discount'
import {
  ContentSection,
  EditIcon,
  HideIcon,
  IconButton,
  SearchForm,
  ShowIcon,
  TrashIcon,
} from '~/shared/client/ui'

const CabinetDiscountsPage = () => {
  return (
    <>
      <ContentSection className="space-y-8">
        <h1 className="font-bold text-3xl">Скидки</h1>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 space-y-4">
            <SearchForm />

            <p className="text-muted-main text-sm ml-2">
              Найдено <b>1</b> скидка из них <b>1</b> показана
            </p>

            <ul>
              <li>
                <div className="bg-white shadow-sm rounded-xl p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <p className="font-medium">Ко дню Святого Валентина</p>
                      <ShowIcon />
                    </div>
                    <span className="font-medium">скидка 25%</span>
                  </div>

                  <p className="num-of-lines-2 text-muted-main">
                    Условия: дата: 14.02 каждого года
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-main">
                      Услуги:{' '}
                      <span className="text-primary-main">
                        #экскурсия.. #купание... #ресторан...
                      </span>
                    </span>

                    <div className="flex gap-2">
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <TrashIcon />
                      </IconButton>
                      <IconButton>
                        <HideIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <CreateDiscount />
          </div>
        </div>
      </ContentSection>
    </>
  )
}

export default CabinetDiscountsPage
