import { type Component } from 'solid-js'
import { Icon } from 'solid-heroicons'

import { type IIcon } from '../types/core'

interface IButtonProps {
  title?: string
  onClick: () => void
  icon?: IIcon
  class?: string
}

const Button: Component<IButtonProps> = (props) => (
  <button
    class={`btn btn-primary flex justify-center items-center gap-2 join-item ${props.class}`}
    onClick={() => {
      props.onClick()
    }}
  >
    {props.title}
    {props.icon !== undefined && <Icon path={props.icon} class="w-4 h-4" />}
  </button>
)

export default Button
