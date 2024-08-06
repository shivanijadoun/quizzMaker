'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CreateQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const router = useRouter();

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: currentQuestion, options, correctAnswer }]);
    setCurrentQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSaveQuiz = () => {
    console.log("questions: ", questions);
    const quizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
    quizzes.push(questions);
    localStorage.setItem('quizzes', JSON.stringify(quizzes));

    console.log('quizzes in local storage', localStorage.getItem('quizzes'));
    router.push('/quizzes');
  };

  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col items-center p-4 bg-teal-300 min-h-screen">
        <h2 className="text-2xl font-bold m-4">Create a Quiz</h2>
        <div className='flex flex-col items-center p-4 bg-teal-950 border rounded-xl m-3 w-full max-w-md overflow-hidden'>
          <input
            type="text"
            placeholder="Question"
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
            className="mb-2 p-2 border rounded w-full bg-teal-700 text-white"
          />
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[index] = e.target.value;
                setOptions(newOptions);
              }}
              className="mb-2 p-2 border rounded w-full bg-teal-700 text-white"
            />
          ))}
          <input
            type="text"
            placeholder="Correct Answer"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            className="mb-2 p-2 border rounded w-full bg-teal-600 text-white"
          />
          <button onClick={handleAddQuestion} className="px-4 py-2 bg-teal-900 text-white rounded w-full">
            Add Question
          </button>
          <button onClick={handleSaveQuiz} className="mt-4 px-4 py-2 bg-teal-900 text-white rounded w-full">
            Save Quiz
          </button>
        </div>
        <div className="mt-4 w-full max-w-md">
          {/* <h3 className="text-xl font-bold mb-2">Added Questions:</h3> */}
          {questions.map((question, index) => (
            <div key={index} className="m-4 p-2 border rounded bg-teal-800 text-white relative">
              <p className="font-bold">Q: {question.question}</p>
              <ul className="list-disc list-inside ml-4">
                {question.options.map((option, idx) => (
                  <li key={idx} className={option === question.correctAnswer ? 'text-green-400' : ''}>
                    {option}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleDeleteQuestion(index)}
                className="absolute top-0 right-0 mt-2 mr-2 px-2 py-1 bg-teal-200 text-white rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
