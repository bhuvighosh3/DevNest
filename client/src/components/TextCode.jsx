/* eslint-disable react/no-unescaped-entities */
import  { useState } from "react";

export default function TextCode() {
  const [textQuery, settextQuery] = useState("");

  const TextQueries = [
    "Design a React component for a navigation bar that includes links to Home, About Us, Services, and Contact. Ensure it has a responsive design.    ",
    "Create a React component for an image carousel that displays a set of images with a sliding effect. Allow users to navigate through the images.    ",
    "Build a React component for an accordion that shows and hides content when the user clicks on each section. Include at least three collapsible sections.    ",
    "Develop a React modal component that displays additional information when triggered. Add a close button to dismiss the modal.    ",
    "Design a React card component that showcases information such as an image, title, and description. Make it flexible for displaying various types of content.    ",
  ];

  const generateRandomtextQuery = () => {
    const randomIndex = Math.floor(Math.random() * TextQueries.length);
    const randomtextQuery = TextQueries[randomIndex];
    settextQuery(randomtextQuery);
  };

  const handleTextareaChange = (event) => {
    settextQuery(event.target.value);
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
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <p className="text-2xl font-bold ">Prompt</p>
          </div>
          <div className="text-slate-800">
            Guiding instruction for Ai's intelligent response for generating
            Text to code
          </div>
        </div>
        <div className="w-full flex items-center justify-between py-4 px-4">
          <div>Base prompt</div>
          <div
            className="bg-slate-800 text-white p-2 rounded-lg cursor-pointer"
            onClick={generateRandomtextQuery}
          >
            Prompt Example
          </div>
        </div>
        <textarea
          className="mx-4 h-16 sm:h-32 w-[90%] sm:w-[92%] md:w-[95%] rounded-lg p-4"
          value={textQuery}
          onChange={handleTextareaChange}
        />
        <div className="mx-4 text-white  py-2 font-bold text-xl rounded-xl w-[90%] sm:w-[92%] md:w-[95%] text-center bg-black cursor-pointer hover:bg-slate-800">
          Generate Code
        </div>
      </div>
      {/* when response is generated */}
      <div className="mt-4 text-xl font-bold">Generated Code:</div>
      <div className="bg-slate-900 p-2 rounded-xl sm:p-2 text-red-400 mt-4 h-60 w-full overflow-y-scroll">
        <div className="">
          <pre>Text</pre>
          <pre>Text</pre>
          <pre>Text</pre>
          <pre>Text</pre>
          <pre>Text</pre>
          <pre>Text</pre>
          <pre>Text</pre>
          <pre>Text</pre>
          <pre>Text</pre>
          <pre>Text</pre>
          <pre>Text</pre>
        </div>
      </div>
    </>
  );
}
