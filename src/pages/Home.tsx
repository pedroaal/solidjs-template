import { type Component } from 'solid-js'

import { useTranslateStore } from '../context/locale.context'

import Section from '../components/Section'
import Button from '../components/Button'
import Card from '../components/Card'
import Service from '../components/Service'
import { ICONS } from '../config/assets'

const HomePage: Component = () => {
  const { t } = useTranslateStore()

  return (
    <div class="flex flex-col">
      <Section class="bg-primary text-primary-content">
        <Section.Body class="flex flex-col md:flex-row items-center">
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
      <Section>
        <Section.Body class="flex flex-col md:flex-row items-center">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="w-full md:w-1/2">
              <Card
                title="first card"
                user="Pedro Altamirano"
                createdAt="2024-01-01"
                tags={['tag1', 'tag2', 'tag3']}
                thumbnail="https://dummyimage.com/600x600/000/fff&text=test"
                avatar="https://dummyimage.com/600x600/000/fff&text=test"
              />
            </div>
            <div class="w-full md:w-1/2 flex flex-col gap-6">
              <Card
                title="first card"
                user="Pedro Altamirano"
                createdAt="2024-01-01"
                tags={['tag1', 'tag2', 'tag3']}
                thumbnail="https://dummyimage.com/600x600/000/fff&text=test"
                avatar="https://dummyimage.com/600x600/000/fff&text=test"
                isHorizontal
              />
              <Card
                title="first card"
                user="Pedro Altamirano"
                createdAt="2024-01-01"
                tags={['tag1', 'tag2', 'tag3']}
                thumbnail="https://dummyimage.com/600x600/000/fff&text=test"
                avatar="https://dummyimage.com/600x600/000/fff&text=test"
                isHorizontal
              />
              <Card
                title="first card"
                user="Pedro Altamirano"
                createdAt="2024-01-01"
                tags={['tag1', 'tag2', 'tag3']}
                thumbnail="https://dummyimage.com/600x600/000/fff&text=test"
                avatar="https://dummyimage.com/600x600/000/fff&text=test"
                isHorizontal
              />
            </div>
          </div>
        </Section.Body>
      </Section>
      <Section class="bg-neutral-100">
        <Section.Body class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-2 items-center">
          <img src="https://dummyimage.com/600x400/000/fff&text=test" alt="" />
          <div>
            <div class="flex flex-col gap-4">
              <h6>{t('home.title')}</h6>
              <p>{t('home.description')}</p>
            </div>
            <div class="mt-12">
              <Button title={t('home.action')} />
            </div>
          </div>
        </Section.Body>
      </Section>
      <Section>
        <Section.Body>
          <div>
            <div class="flex flex-col gap-16 w-full">
              <div class="divider divider-start text-6xl">
                {t('home.services.title')}
              </div>
            </div>
            <div class="w-full flex gap-8 justify-center mt-12">
              <Service title={t('home.services.service1')} icon={ICONS.cat} />
              <Service title={t('home.services.service2')} icon={ICONS.bed} />
              <Service title={t('home.services.service3')} icon={ICONS.paw} />
              <Service title={t('home.services.service4')} icon={ICONS.fish} />
              <Service title={t('home.services.service5')} icon={ICONS.toys} />
              <Service title={t('home.services.service6')} icon={ICONS.wine} />
              <Service
                title={t('home.services.service7')}
                icon={ICONS.notifications}
              />
            </div>
          </div>
        </Section.Body>
      </Section>
      <Section class="bg-neutral-100">
        <Section.Body class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-2 items-center">
          <div>
            <div class="flex flex-col gap-4">
              <h6>{t('home.title')}</h6>
              <p>{t('home.description')}</p>
            </div>
            <div class="mt-12">
              <Button title={t('home.action')} />
            </div>
          </div>
          <img src="https://dummyimage.com/600x400/000/fff&text=test" alt="" />
        </Section.Body>
      </Section>
      <Section>
        <Section.Body>
          <div>
            <div class="flex flex-col gap-16 w-full">
              <div class="divider divider-end text-6xl">
                {t('home.addons.title')}
              </div>
            </div>
            <div class="w-full flex gap-8 justify-center mt-12">
              <Card
                title={t('home.addons.addon1.title')}
                description={t('home.addons.addon1.description')}
                thumbnail={t('home.addons.addon1.thumbnail')}
              />
              <Card
                title={t('home.addons.addon2.title')}
                description={t('home.addons.addon2.description')}
                thumbnail={t('home.addons.addon2.thumbnail')}
              />
              <Card
                title={t('home.addons.addon3.title')}
                description={t('home.addons.addon3.description')}
                thumbnail={t('home.addons.addon3.thumbnail')}
              />
              <Card
                title={t('home.addons.addon4.title')}
                description={t('home.addons.addon4.description')}
                thumbnail={t('home.addons.addon4.thumbnail')}
              />
              <Card
                title={t('home.addons.addon5.title')}
                description={t('home.addons.addon5.description')}
                thumbnail={t('home.addons.addon5.thumbnail')}
              />
            </div>
          </div>
        </Section.Body>
      </Section>
    </div>
  )
}

export default HomePage
