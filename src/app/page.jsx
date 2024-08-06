'use client';
import Link from 'next/link';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-teal-200 lg:flex-row lg:justify-center">
        <div className="p-3 w-full lg:w-auto">
          <h1 className="text-4xl font-bold text-center lg:text-left">Quiz Master</h1>
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 h-auto lg:h-96 p-3 flex flex-col justify-center items-center border rounded-xl w-full lg:w-96 mt-8 lg:mt-0">
            <div className="mt-8 p-3 bg-white h-auto lg:h-72 w-full lg:w-72 rounded-xl flex flex-col items-center">
              <Link href="/create">
                <div className="px-4 p-2 bg-teal-600 text-white rounded-md m-4 text-center cursor-pointer">Create a Quiz</div>
              </Link>
              <Link href="/quizzes">
                <div className="m-4 px-4 p-2 bg-teal-600 text-white rounded-md text-center cursor-pointer">Take a Quiz</div>
              </Link>
            </div>
          </div>
        </div>
        {/* <ChatAi /> */}
        {/* <Signup /> */}
      </div>
      <Footer />
    </div>
  );
}
