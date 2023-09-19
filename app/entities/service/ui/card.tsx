import { dmYFormat, hiFormat } from '~/shared/client/lib/date'
import { EditIcon, HideIcon, IconButton, ShowIcon, TrashIcon } from '~/shared/client/ui'

export type ServiceCardProps = {
  name: string
  price: number
  active: boolean
  description: string
  createdAt: string | Date
}

export const ServiceCard = ({
  name,
  price,
  active,
  description,
  createdAt,
}: ServiceCardProps) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <p className="font-medium">{name}</p>
          {active ? <ShowIcon /> : <HideIcon />}
        </div>
        <span className="font-medium">от {price} ₽</span>
      </div>

      <p className="num-of-lines-2 text-muted-main">{description}</p>

      <div className="flex justify-between items-center">
        <span className="text-muted-main">
          {dmYFormat(createdAt)} в {hiFormat(createdAt)}
        </span>

        <div className="flex gap-2">
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <TrashIcon />
          </IconButton>
          <IconButton>
            {active ? <HideIcon /> : <ShowIcon />}
          </IconButton>
        </div>
      </div>
    </div>
  )
}
