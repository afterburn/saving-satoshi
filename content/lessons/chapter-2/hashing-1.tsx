'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { HashChallenge } from 'ui'

export default function Hashing1({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <HashChallenge
      answer={8}
      next={`${routes.chaptersUrl}/chapter-2/hashing-2`}
      label={'Enter anything'}
      label2={'Below you will see your input converted to a hash'}
      hints
    />
  )
}

export const metadata = {
  title: 'hashing_one.title',
}
