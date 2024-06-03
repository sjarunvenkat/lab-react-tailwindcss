import React from "react";
import "./App.css";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-400 py-4 px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-white font-semibold text-2xl">Kalvium</div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                About us
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Contacts
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Courses
              </a>
            </div>
          </div>
          <button className="text-white font-bold py-2 px-4 rounded border-2 border-white hover:bg-red-600">
            Log in
          </button>
        </nav>
      </header>

      <main className="mt-8 mx-auto max-w-3xl px-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button One
        </button>
        <div className="mt-4 bg-red-200 text-red-800 px-4 py-2 rounded">
          Alert! This is Awesome!
        </div>
      </main>
      <body className="mt-8">
        <div className="p-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-6">
          <div className="shrink-0">
            <img
              className="h-10 w-32"
              src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
              alt="kalvium logo"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">Kalvium Store</div>
            <p className="text-slate-500">You have a message</p>
          </div>
        </div>
      </body>

      <footer className="fixed bottom-0 left-0 w-full">
        <p className="py-4 bg-gray-300 text-center text-gray-500 text-sm">
          Copyright &copy; 2024 Kalvium. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
