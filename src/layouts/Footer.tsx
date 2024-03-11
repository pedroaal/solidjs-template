import { type Component } from 'solid-js'

const Footer: Component = () => (
  <div class="bg-neutral-100 p-6 w-full flex flex-col justify-center items-center">
    <h6>Our Services</h6>
    <div class="flex">
      <ul class="">
        <li>
          <a href="#">Service 1</a>
        </li>
        <li>
          <a href="#">Service 2</a>
        </li>
        <li>
          <a href="#">Service 3</a>
        </li>
      </ul>
      <ul class="">
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
