import { type Component } from 'solid-js'

import LanguageSelector from '../components/LanguageSelector'
import ThemeToggler from '../components/ThemeToggler'
import { ROUTES } from '../constants/router'

const Header: Component = () => (
  <header class="navbar bg-primary-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href={ROUTES.HOME}>
        Luxury
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a href={ROUTES.ABOUT}>About us</a>
        </li>
      </ul>
      <div class="flex gap-2">
        <LanguageSelector />
        <ThemeToggler />
        <a class="btn btn-primary">Button</a>
      </div>
    </div>
  </header>
)

export default Header
