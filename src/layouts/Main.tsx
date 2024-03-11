import { type JSX, type Component } from 'solid-js'

import Header from './Header'
import Footer from './Footer'

interface IProps {
  children?: JSX.Element
}

const MainLayout: Component<IProps> = (props) => (
  <div class="w-full min-h-screen flex flex-col">
    <Header />
    <div class="container mx-auto p-6 md:p-4 grow">{props.children}</div>
    <Footer />
  </div>
)

export default MainLayout
