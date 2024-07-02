'use client'
import Link from 'next/link';
import ChatAi from './components/ChatAi';
export default function Home() {
  return (
    <div className="flex  flex-row items-center justify-center min-h-screen py-2 bg-teal-200 ">
      <div className="mr-72 p-3">
      <h1 className="text-4xl font-bold ">Quiz Master</h1>
      <div className="mt-8 p-3  bg-teal-950 h-64 w-64 rounded-xl " >
        <Link href="/create">
          <h1 className="px-4 p-2 bg-teal-600 text-white rounded-md m-4">Create a Quiz</h1>
        </Link>
        <Link href="/quizzes">
          <h1 className="m-4 px-4 p-2 bg-teal-600 text-white rounded-md">Take a Quiz</h1>
        </Link>
        </div>
      </div>
      <ChatAi/>
    </div>
  );
}
