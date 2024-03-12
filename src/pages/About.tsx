import { type Component } from 'solid-js'

import { useTranslateStore } from '../context/locale.context'

import Section from '../components/Section'

const AboutPage: Component = () => {
  const { t } = useTranslateStore()

  return (
    <div class="flex flex-col grow">
      <Section class="bg-primary text-primary-content">
        <Section.Body class="p-20 flex justify-center">
          <h1 class="text-6xl">{t('about.title')}</h1>
        </Section.Body>
      </Section>
      <Section>
        <Section.Body class="grid grid-cols-2 items-center">
          <img src="https://dummyimage.com/600x400/000/fff&text=test" alt="" />
          <div class="px-10 py-6">
            <p>{t('about.content1')}</p>
          </div>
        </Section.Body>
      </Section>
      <Section>
        <Section.Body class="grid grid-cols-2 items-center">
          <div class="px-10 py-6">
            <p>{t('about.content2')}</p>
          </div>
          <img src="https://dummyimage.com/600x400/000/fff&text=test" alt="" />
        </Section.Body>
      </Section>
    </div>
  )
}

export default AboutPage
