import { type Component } from 'solid-js'

import { useTranslateStore } from '../context/locale.context'

import Section from '../components/Section'
import Button from '../components/Button'

const HomePage: Component = () => {
  const { t } = useTranslateStore()

  return (
    <div class="flex flex-col gap-4">
      <Section class="bg-primary text-primary-content">
        <Section.Body class="flex items-center">
          <div class="grow flex flex-col gap-4">
            <h1 class="text-6xl">{t('home.title')}</h1>
            <h1>{t('home.description')}</h1>
            <div>
              <Button title={t('home.action')} class="btn-secondary" />
            </div>
          </div>
          <img src="https://dummyimage.com/600x400/000/fff&text=test" alt="" />
        </Section.Body>
      </Section>
    </div>
  )
}

export default HomePage
