import { type Component } from 'solid-js'

import { type IIcon } from '../types/core'

interface IProps {
  title: string
  icon: IIcon
}

const Service: Component<IProps> = (props) => (
  <div class="flex flex-col justify-start items-center max-w-24">
    <div class="w-24 h-24 p-4 bg-accent rounded-lg">
      <img src={props.icon} alt="test" class="w-full h-full" />
    </div>
    <div class="text-center mt-4">
      <h6>{props.title}</h6>
    </div>
  </div>
)

export default Service
