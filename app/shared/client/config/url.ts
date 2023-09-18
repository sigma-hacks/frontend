export const mainLinks = {
  home: { title: 'О кабинете', link: '/' },
  partnersProgram: { title: 'Стать партнером', link: '/partners-program' },
  partnersList: { title: 'Партнеры', link: '/partners' },
  questions: { title: 'Частые вопросы', link: '/questions' },
  contacts: { title: 'Контакты', link: '/contacts' },
}

export const infoLinks = {
  news: { title: 'Новости', link: '/news' },
  docs: { title: 'Документы', link: '/' },
  aboutOperator: { title: 'Об операторе', link: '/' },
  card: { title: 'Единая Карта Жителя', link: '/' },
  mobileApp: { title: 'Приложение для клиента', link: '/' },
}

export const subLinks = {
  newsItem: { link: (slug: string) => `/news/${slug}` },
}
