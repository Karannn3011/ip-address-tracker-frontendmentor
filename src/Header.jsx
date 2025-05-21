import { useState } from "react";

export default function Header({ onSearch, children }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue.trim());
    setInputValue("");
  };

  return (
    <div className="relative">
      <header className="p-5 text-center bg-[url('./public/pattern-bg-mobile.png')] z-0 bg-cover max-h-[325px] lg:max-h-[200px] flex flex-col items-center">
        <h1 className="text-white font-bold text-3xl mb-6">
          IP Address Tracker
        </h1>

        <form onSubmit={handleSubmit} className="flex w-full max-w-xl mx-auto">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-white p-3 rounded-l-lg focus:outline-none"
            placeholder="Search for any IP address"
          />
          <button
            type="submit"
            className="bg-black cursor-pointer p-4 rounded-r-lg hover:bg-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </button>
        </form>
        <div className="w-full mt-9 shadow-lg">{children}</div>
      </header>    
    </div>
  );
}
