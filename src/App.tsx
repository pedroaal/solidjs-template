import { type Component } from 'solid-js'
import { Route, Router } from '@solidjs/router'

import { ROUTES } from './constants/router'
import { CoreProvider } from './context/core.context'
import { TranslateProvider } from './context/locale.context'

import Alerts from './components/Alerts'
import Loader from './components/Loader'

import Home from './pages/Home'
import MainLayout from './layouts/Main'

const App: Component = () => (
  <CoreProvider>
    <TranslateProvider>
      <Alerts />
      <Loader />
      <Router root={MainLayout}>
        <Route path={ROUTES.HOME} component={Home} />
      </Router>
    </TranslateProvider>
  </CoreProvider>
)

export default App
