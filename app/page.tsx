'use client'

import { useState } from 'react'
import Quiz from './components/Quiz'
import FinalMessage from './components/FinalMessage'

export default function Home() {
  const [quizCompleted, setQuizCompleted] = useState(false)

  return (
    <main className='min-h-screen bg-pink-100 flex items-center justify-center p-4'>
      <div className='max-w-md w-full'>
        {
          !quizCompleted ? (
            <Quiz onComplete={() => setQuizCompleted(true)} />
          ) : (
            <FinalMessage />
          )
        }
      </div>
    </main>
  )
}