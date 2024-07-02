'use client'
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Modal from '@/app/components/model';

export default function Quiz() {
  const params = useParams();
  const id = params.id;
  const [quiz, setQuiz] = useState(null);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (id !== undefined) {
      const quizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
      const selectedQuiz = quizzes[id];
      if (selectedQuiz) {
        setQuiz(selectedQuiz);
        setCurrentAnswers(Array(selectedQuiz.length).fill(''));
      }
    }
  }, [id]);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...currentAnswers];
    newAnswers[index] = value;
    setCurrentAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    quiz.forEach((question, index) => {
      if (question.correctAnswer === currentAnswers[index]) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 bg-teal-200 min-h-screen">
      <h2 className="text-xl font-bold mb-4 ">Quiz</h2>
      {quiz.map((question, index) => (
        <div key={index} className="mb-4 p-2 border rounded bg-teal-500 w-full">
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex} className="block m-2">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={currentAnswers[index] === option}
                onChange={() => handleAnswerChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="px-4 py-2 bg-teal-800 text-white rounded">
        Submit
      </button>
      <Modal show={showResults} onClose={() => setShowResults(false)}>
        <p>Your score: {score}/{quiz.length}</p>
      </Modal>
    </div>
  );
}
