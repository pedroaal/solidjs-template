import { type Component } from 'solid-js'
import { useTranslateStore } from '../context/locale.context'

const HomePage: Component = () => {
  const { t } = useTranslateStore()

  return (
    <div class="flex flex-col gap-4">
      <h1>{t('home.title')}</h1>
    </div>
  )
}

export default HomePage
