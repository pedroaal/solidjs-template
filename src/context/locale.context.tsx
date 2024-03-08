import {
  type Component,
  createContext,
  createSignal,
  type JSXElement,
  useContext,
  createResource,
  type Setter,
  type Accessor,
} from 'solid-js'
import * as i18n from '@solid-primitives/i18n'

import { type ILocale, type ILanguage } from '../types/locale'
import es from '../locale/es.json'

interface IContext {
  t: i18n.Translator<i18n.BaseRecordDict, string>
  locale: Accessor<ILanguage>
  setLocale: Setter<ILanguage>
}

interface IProps {
  children: JSXElement
}

const Context = createContext<IContext>()

const fetchLocale = async (
  locale: ILanguage,
): Promise<i18n.Flatten<ILocale>> => {
  const dict: ILocale = await import(`../locale/${locale}.json`)
  return i18n.flatten(dict)
}

export const TranslateProvider: Component<IProps> = (props) => {
  const [locale, setLocale] = createSignal<ILanguage>('es')

  const [dict] = createResource(locale, fetchLocale, {
    initialValue: i18n.flatten(es),
  })

  const t = i18n.translator(dict)

  return (
    <Context.Provider value={{ t, locale, setLocale }}>
      {props.children}
    </Context.Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useTranslateStore = (): IContext => useContext(Context)!
