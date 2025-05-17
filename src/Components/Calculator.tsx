import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("0");
  const [base, setBase] = useState(10); // Default: Decimal

  const handleInput = (value: string) => {
    setInput((prev) => (prev === "0" ? value : prev + value));
  };

  const handleClear = () => setInput("0");

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Evaluate expression
    } catch {
      setInput("Error");
    }
  };

  const handleBaseChange = (newBase: number) => {
    const num = parseInt(input, base);
    setBase(newBase);
    setInput(num.toString(newBase));
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-5 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-center text-2xl font-bold mb-4">Scientific Calculator</h1>
      <div className="bg-gray-900 p-3 rounded text-right text-lg font-mono mb-3">{input}</div>

      <div className="grid grid-cols-4 gap-2 mb-3">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "C", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "C" ? handleClear() : handleInput(btn))}
            className={`p-3 rounded ${btn === "C" ? "bg-red-500" : "bg-gray-700"} hover:bg-gray-600`}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleCalculate} className="col-span-4 p-3 bg-green-500 hover:bg-green-600 rounded">
          =
        </button>
      </div>

      <div className="flex justify-between">
        {[
          { label: "BIN", base: 2 },
          { label: "OCT", base: 8 },
          { label: "DEC", base: 10 },
          { label: "HEX", base: 16 },
        ].map(({ label, base: newBase }) => (
          <button
            key={label}
            onClick={() => handleBaseChange(newBase)}
            className={`p-2 rounded ${base === newBase ? "bg-blue-500" : "bg-gray-700"} hover:bg-gray-600`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
