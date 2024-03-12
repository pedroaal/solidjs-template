import { type JSX, type Component } from 'solid-js'

import Header from './Header'
import Footer from './Footer'

interface IProps {
  children?: JSX.Element
}

const MainLayout: Component<IProps> = (props) => (
  <div class="w-full min-h-screen flex flex-col">
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default MainLayout
