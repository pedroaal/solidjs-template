import { Show, type Component, For } from 'solid-js'
import Avatar from './Avatar'
import { formatDateLong } from '../utils/date'

interface IProps {
  thumbnail: string
  title: string
  description?: string
  tags?: string[]
  avatar?: string
  user?: string
  createdAt?: string
  isHorizontal?: boolean
}

const Card: Component<IProps> = (props) => (
  <div
    class={`card ${props.isHorizontal ? 'card-side' : ''} bg-neutral-100 shadow`}
  >
    <figure class={props.isHorizontal ? 'max-w-xs' : 'max-h-xs'}>
      <img src={props.thumbnail} alt="side" />
    </figure>
    <div class="card-body">
      <h5>{props.title}</h5>
      <Show when={props.description}>
        <p>{props.description}</p>
      </Show>
      <Show when={props.tags}>
        <div class="card-actions">
          <For each={props.tags}>
            {(tag) => (
              <>
                <div class="badge badge-lg bg-secondary text-secondary-content">
                  {tag}
                </div>
              </>
            )}
          </For>
        </div>
      </Show>
      <Show when={props.avatar && props.user && props.createdAt}>
        <div class="border-t my-2" />
        <div class="flex gap-4">
          <div>
            <Avatar thumbnail={props.avatar} />
          </div>
          <div>
            <p>{props.user}</p>
            <p>{formatDateLong(props.createdAt)}</p>
          </div>
        </div>
      </Show>
    </div>
  </div>
)

export default Card
