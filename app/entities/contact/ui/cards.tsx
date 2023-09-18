import { Link } from '@remix-run/react'
import { EmailIcon, PhoneIcon } from '~/shared/client/ui'
import { contactsList } from '../model'

export const ContactsCardsList = () => (
  <ul className="grid grid-cols-3 gap-5">
    {contactsList.map(({ name, pos, phone, email }) => (
      <li key={name} className="p-8 rounded-xl space-y-4 bg-accent-main">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-muted-dark text-sm">{pos}</p>
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              to={`tel:${phone}`}
              className="inline-flex items-center gap-2 text-[#0070B3] hover:underline"
            >
              <PhoneIcon />
              {phone}
            </Link>
          </li>
          <li>
            <Link
              to={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-[#0070B3] hover:underline"
            >
              <EmailIcon />
              {email}
            </Link>
          </li>
        </ul>
      </li>
    ))}
  </ul>
)
