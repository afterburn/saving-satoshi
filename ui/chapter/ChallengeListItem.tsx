import clsx from 'clsx'
import Link from 'next/link'
import { lessons, chapters } from 'content'

import CheckIcon from 'public/assets/icons/check.svg'
import LockIcon from 'public/assets/icons/lock.svg'

import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import useLessonStatus from 'hooks/useLessonStatus'
import { useProgressContext } from 'providers/ProgressProvider'

export default function ChallengeItem({
  position,
  title,
  chapterId,
  lessonId,
}) {
  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const { progress } = useProgressContext()

  const lessonMeta =
    lessons[chapterId][lessonId].metadata.key === 'CH1GEN1'
      ? lessons[chapterId]['intro-1'].metadata
      : lessons[chapterId][lessonId].metadata
  const { isUnlocked, isCompleted } = useLessonStatus(progress, lessonMeta.key)

  const lessonHref =
    lessonId === chapters['chapter-1'].metadata['challenges'][0]
      ? 'intro-1'
      : lessonId
  const href = `${routes.chaptersUrl}/${chapterId}/${lessonHref}`
  const ComponentType = isUnlocked ? Link : 'p'

  return (
    <ComponentType
      href={href}
      className={clsx(
        'justify-left relative flex w-full px-[15px] py-[11px] font-cbrush text-xl transition duration-150 ease-in-out',
        {
          'border-t border-white/25': position !== 1,
          'bg-black/15': isUnlocked && !isCompleted,
          'hover:bg-black/20': isUnlocked,
        }
      )}
    >
      <span className="pr-1 opacity-50">{position + '. '}</span>
      {t(title)}
      {!isUnlocked && (
        <LockIcon className="absolute right-[15px] top-1/2 -translate-y-1/2 opacity-25" />
      )}
      {isCompleted && (
        <CheckIcon className="absolute right-[15px] top-1/2 h-[20px] w-[20px] -translate-y-1/2" />
      )}
    </ComponentType>
  )
}
