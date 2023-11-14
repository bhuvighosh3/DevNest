/* eslint-disable react/no-unescaped-entities */
import  { useState } from "react";

export default function SqlCode() {
  const [sqlQuery, setSqlQuery] = useState("");

  const sqlQueries = [
    "Retrieve all columns from the your_table where condition1 is met:    ",
    "Retrieve column1 and column2 from the your_table where condition2 is met:    ",
    "Retrieve all columns from the your_table where condition3 is met:    ",
    "Retrieve column1 from the your_table where condition4 is met:    ",
    "Retrieve all columns from the your_table where condition5 is met:    ",
  ];

  const generateRandomSqlQuery = () => {
    const randomIndex = Math.floor(Math.random() * sqlQueries.length);
    const randomSqlQuery = sqlQueries[randomIndex];
    setSqlQuery(randomSqlQuery);
  };

  const handleTextareaChange = (event) => {
    setSqlQuery(event.target.value);
  };

  return (
    <>
      <div
        className="py-4 border border-1 border-slate-300 w-full bg-slate-200"
        style={{ boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
      >
        {/* heading of prompt */}
        <div
          className="w-full px-4 pb-4"
          style={{ boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 sm:w-8 sm:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <p className="text-lg sm:text-2xl font-bold ">Prompt</p>
          </div>
          <div className="text-slate-800 text-md ">
            Guiding instruction for Ai's intelligent response for generating SQL
            queries
          </div>
        </div>
        <div className="w-full flex items-center justify-between py-4 px-4">
          <div>Base prompt</div>
          <div
            className="bg-slate-800 text-white p-2 rounded-lg cursor-pointer text-md"
            onClick={generateRandomSqlQuery}
          >
            Prompt Example
          </div>
        </div>
        <textarea
          className="mx-4 h-16 sm:h-32 w-[90%] sm:w-[92%] md:w-[95%] rounded-lg p-4"
          value={sqlQuery}
          onChange={handleTextareaChange}
        />
        <div className="mx-4 text-white  py-2 font-bold text-lg sm:text-xl rounded-xl w-[90%] sm:w-[92%] md:w-[95%] text-center bg-black cursor-pointer hover:bg-slate-800">
          Generate Query
        </div>
      </div>
      {/* when response is generated */}
      <div className="mt-4 text-xl font-bold">Generated Code:</div>
      <div className="bg-slate-900 p-2 rounded-xl sm:p-2 text-red-400 mt-4 h-60 w-full overflow-y-scroll">
        <div className="">
          <pre>Query</pre>
          <pre>Query</pre>
          <pre>Query</pre>
          <pre>Query</pre>
          <pre>Query</pre>
          <pre>Query</pre>
          <pre>Query</pre>
          <pre>Query</pre>
          <pre>Query</pre>
          <pre>Query</pre>
          <pre>Query</pre>
          <pre>Query</pre>
        </div>
      </div>
    </>
  );
}
