import { type Component } from 'solid-js'

import { useTranslateStore } from '../context/locale.context'

const Footer: Component = () => {
  const { t } = useTranslateStore()

  return (
    <div class="bg-neutral-100 p-6 w-full flex flex-col justify-center items-center">
      <h6>{t('footer.title')}</h6>
      <div class="flex">
        <ul class="">
          <li>
            <a href="#">{t('footer.service1')}</a>
          </li>
          <li>
            <a href="#">{t('footer.service2')}</a>
          </li>
          <li>
            <a href="#">{t('footer.service3')}</a>
          </li>
        </ul>
        <ul class="">
          <li>
            <a href="#">{t('footer.link1')}</a>
          </li>
          <li>
            <a href="#">{t('footer.link2')}</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
