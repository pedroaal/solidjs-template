import { type Component } from 'solid-js'

import { ROUTES } from '../constants/router'
import { useTranslateStore } from '../context/locale.context'

import LanguageSelector from '../components/LanguageSelector'
import ThemeToggler from '../components/ThemeToggler'

const Header: Component = () => {
  const { t } = useTranslateStore()

  return (
    <header class="navbar bg-primary-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" href={ROUTES.HOME}>
          {t('navigation.home')}
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href={ROUTES.ABOUT}>{t('navigation.about')}</a>
          </li>
        </ul>
        <div class="flex gap-2">
          <LanguageSelector />
          <ThemeToggler />
          <a class="btn btn-primary">{t('navigation.action')}</a>
        </div>
      </div>
    </header>
  )
}

export default Header
