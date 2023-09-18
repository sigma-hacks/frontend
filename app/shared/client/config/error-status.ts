export const errorStatusMessage: Record<
  number,
  { title: string; details: string }
> = {
  404: {
    title: 'Кажется страница не найдена',
    details: 'Возможно она удалена или перемещена',
  },
  500: {
    title: 'Произошла серверная ошибка',
    details:
      'Мы уже устраняем эту неполадку, повторите запрос через пару минут',
  },
}
