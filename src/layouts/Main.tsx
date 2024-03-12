import { type JSX, type Component } from 'solid-js'

import Header from './Header'
import Footer from './Footer'
import Whatsapp from '../components/Whatsapp'

interface IProps {
  children?: JSX.Element
}

const MainLayout: Component<IProps> = (props) => (
  <div class="w-full min-h-screen flex flex-col">
    <Header />
    <div class="grow w-full h-full">{props.children}</div>
    <Footer />
    <Whatsapp />
  </div>
)

export default MainLayout
