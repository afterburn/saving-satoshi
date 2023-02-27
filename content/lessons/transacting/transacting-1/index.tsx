'use client'
import { useLang, useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'

export default function Transacting1() {
  const lang = useLang()
  const t = useTranslations(lang)
  return (
    <ChapterIntro
      title={t('transacting_one.title')}
      heading={t('transacting_one.heading')}
      next={'/chapters/chapter-1/transacting-2'}
    >
      <p className="pt-2 text-lg">{t('transacting_one.paragraph_one')}</p>
      <p className="pt-2 text-lg">{t('transacting_one.paragraph_two')}</p>
      <p className="pt-2 text-lg">{t('transacting_one.paragraph_three')}</p>
    </ChapterIntro>
  )
}

export const metadata = {
  title: 'transacting_one.title',
}
