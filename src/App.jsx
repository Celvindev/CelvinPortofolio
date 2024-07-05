import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Hello, Celvin!</h1>
      <button onClick={() => setCount(count + 1)} className="ml-4 p-2 bg-blue-500 text-white">
        Clicked {count} times
      </button>
    </div>
  )
}

export default App
