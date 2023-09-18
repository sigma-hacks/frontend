import { CheckIcon } from '~/shared/client/ui'
import { advantages } from '../model'

export const PartnersProgramAdvantages = () => (
  <ul className="grid grid-cols-2 gap-8">
    {advantages.map(({ title, details, list }) => (
      <li key={title} className="p-10 rounded-xl space-y-4 bg-accent-main">
        <p className="text-2xl font-bold">{title}</p>
        {details.map(line => (
          <p key={line} className="text-muted-dark">
            {line}
          </p>
        ))}
        <ul className="space-y-4">
          {list.map(line => (
            <li key={line} className="flex items-center gap-4">
              <CheckIcon />
              <span className="text-muted-dark">{line}</span>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
)
