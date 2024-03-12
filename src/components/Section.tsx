import {
  type JSXElement,
  type Component,
  createContext,
  useContext,
} from 'solid-js'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IContext {}

interface IBodyProps {
  children: JSXElement
  class?: string
}

interface IProps {
  children: JSXElement
  class?: string
}

interface IComposition {
  Body: Component<IBodyProps>
}

const Context = createContext<IContext>()

export const Body: Component<IBodyProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const context = useContext(Context)

  return <div class={`container mx-auto ${props.class}`}>{props.children}</div>
}

const Section: Component<IProps> & IComposition = (props) => (
  <Context.Provider value={{}}>
    <div class={`w-full p-6 md:p-4 ${props.class}`}>{props.children}</div>
  </Context.Provider>
)

Section.Body = Body

export default Section
