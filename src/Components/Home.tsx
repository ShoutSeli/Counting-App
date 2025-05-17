import React, { useState } from "react";

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-10">Counter App</h1>
      <p className="text-xl font-semibold mb-10">Count: {count}</p>
      <div className="flex gap-10">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Count Up
        </button>
        <button
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Count Down
        </button>
      </div>
    </div>
  );
};

export default HomePage;
