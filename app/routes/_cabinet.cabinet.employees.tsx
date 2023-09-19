import { CreateEmployee } from '~/features/create-employee'
import {
  BlockIcon,
  ContentSection,
  EditIcon,
  IconButton,
  QrIcon,
  SearchForm,
  ShowIcon,
  TrashIcon,
} from '~/shared/client/ui'

const CabinetEmployeesPage = () => {
  return (
    <>
      <ContentSection className="space-y-8">
        <h1 className="font-bold text-3xl">Сотрудники</h1>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 space-y-4">
            <SearchForm />

            <p className="text-muted-main text-sm ml-2">
              Найдено <b>1</b> сотрудник из них <b>1</b> показан
            </p>

            <ul>
              <li>
                <div className="bg-white shadow-sm rounded-xl p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <p className="font-medium">Иванов Петр Михайлович</p>
                      <ShowIcon />
                    </div>
                    <div className="flex items-center gap-2">
                      <QrIcon />
                      <span className="font-medium">15 000</span>
                    </div>
                  </div>

                  <p className="num-of-lines-2 text-muted-main">
                    Код авторизации: 555-321
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-main">ivanov@mail.ru</span>

                    <div className="flex gap-2">
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <TrashIcon />
                      </IconButton>
                      <IconButton>
                        <BlockIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <CreateEmployee />
          </div>
        </div>
      </ContentSection>
    </>
  )
}

export default CabinetEmployeesPage
