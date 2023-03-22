'use client'

import { useState, useEffect } from 'react'
import { LessonDirection } from 'types'
import { LessonIde, Lesson, LessonTabs, LessonTerminal } from 'ui'
import { setUserProgress } from 'lib/user'
import { useMediaQuery } from 'hooks'

const tabData = [
  {
    id: 'info',
    text: 'Info',
  },
  {
    id: 'code',
    text: 'Code',
  },
]

/**
 * @expectedInput {string} | {userVariable, value} answer to the challenge problem or the input variable and the expected value
 * @saveInfo {chapter, challenge} information required for saving user progress
 * @next {string} link to next part of chapter
 * @instruction {string} terminal instruction for user
 * @successMessage {string} Message displayed to the user upon finishing a challenge
 * @customLines {string} Custom message displayed in terminal for the user to read
 * @commonError {error, message} Common error the user may make in completing this challenge and a return tip to help them
 */
export default function IdeChallenge({
  children,
  expectedInput,
  saveInfo,
  next,
  successMessage,
  customLines,
  commonError,
}: {
  children: any
  expectedInput: string | any
  saveInfo: any
  next: string
  successMessage: string
  customLines?: string
  commonError?: any
}) {
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState('')
  const [challengeState, setChallengeState] = useState<string>('incomplete')

  const isSmallScreen = useMediaQuery({ width: 767 })

  function saveProgress() {
    setUserProgress(saveInfo.chapter, saveInfo.challenge)
  }

  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    hydrated && (
      <Lesson
        direction={
          isSmallScreen ? LessonDirection.Vertical : LessonDirection.Horizontal
        }
      >
        <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
        {children}

        <LessonIde
          success={success}
          lines={'lines'}
          onChange={'onChange'}
          next={next}
        />
      </Lesson>
    )
  )
}
