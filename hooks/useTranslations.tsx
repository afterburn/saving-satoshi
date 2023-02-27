import { t } from 'lib/translate'

export const useTranslations = (lang: string) => {
  return function (key: string) {
    if (!lang) {
      lang = 'en'
    }
    return t(key, lang)
  }
}
