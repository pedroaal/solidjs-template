import { type Component } from 'solid-js'

import { useTranslateStore } from '../context/locale.context'

import Select from './Select'

const LanguageSelector: Component = () => {
  const { locale, setLocale } = useTranslateStore()

  return (
    <Select
      onChange={setLocale}
      value={locale}
      options={[
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'English' },
      ]}
    />
  )
}

export default LanguageSelector
