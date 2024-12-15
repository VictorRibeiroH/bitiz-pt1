import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const questions = [
  {
    question: "Qual nosso primeiro filme?",
    options: ["Imaculada", "Ratatouille", "Scream"]
  },
  {
    question: "Qual é a minha comida favorita?",
    options: ["Pizza", "Sushi", "Hamburguinho"]
  },
  {
    question: "Onde foi nosso primeiro beijo?",
    options: ["Na Shopping", "No Cinema", "Em Colombo/PR"]
  },
]

export default function Quiz({ onComplete }: { onComplete: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onComplete()
    }
  }

  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-red-100 p-6">
        <CardTitle className="text-2xl font-bold text-red-800 text-center">
          Quiz do Pãozinho.
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {questions[currentQuestion].question}
        </h2>
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={handleAnswer}
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

