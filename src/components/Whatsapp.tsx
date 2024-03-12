import { type Component } from 'solid-js'
import { phone } from 'solid-heroicons/outline'

import Button from './Button'

const Whatsapp: Component = () => {
  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank')
  }

  return (
    <div class="fixed bottom-5 right-5 z-10">
      <Button
        class="btn btn-green-100 flex justify-center items-center"
        onClick={handleClick}
        icon={phone}
      />
    </div>
  )
}

export default Whatsapp
