import { type Component } from 'solid-js'
import { Route, Router } from '@solidjs/router'

import { ROUTES } from './constants/router'
import { CoreProvider } from './context/core.context'
import { TranslateProvider } from './context/locale.context'

import Alerts from './components/Alerts'
import Loader from './components/Loader'

import MainLayout from './layouts/Main'

import Home from './pages/Home'
import About from './pages/About'

const App: Component = () => (
  <CoreProvider>
    <TranslateProvider>
      <Alerts />
      <Loader />
      <Router root={MainLayout}>
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ABOUT} component={About} />
      </Router>
    </TranslateProvider>
  </CoreProvider>
)

export default App
