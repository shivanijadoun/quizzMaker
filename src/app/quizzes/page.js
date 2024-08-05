'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
    setQuizzes(storedQuizzes);
  }, []);

  const handleDeleteQuiz = (index) => {
    const newQuizzes = quizzes.filter((_, i) => i !== index);
    setQuizzes(newQuizzes);
    localStorage.setItem('quizzes', JSON.stringify(newQuizzes));
  };

  return (
    <div className="bg-teal-200 flex flex-col items-center p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Available Quizzes</h2>
      {quizzes.length === 0 ? (
        <p>No quizzes available. Create one!</p>
      ) : (
        <div className='flex flex-wrap'>
          {quizzes.map((quiz, index) => (
            <div key={index} className="m-4 p-2 border rounded bg-teal-700 h-48 w-48 text-white relative">
              <Link href={`/quiz/${index}`}>
                <h1 className="cursor-pointer">Quiz {index + 1}</h1>
              </Link>
              <button
                onClick={() => handleDeleteQuiz(index)}
                className="absolute top-0 right-0 mt-2 mr-2 px-2 py-1 bg-teal-700 text-white rounded"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
