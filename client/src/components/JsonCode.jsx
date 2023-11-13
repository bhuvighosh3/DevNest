import { useState } from "react";
export default function JsonCode() {
  const [jsonFile, setJsonFile] = useState(null);

  const handleJsonFileUpload = (event) => {
    const file = event.target.files[0];

    // Do something with the file if needed
    console.log("Selected file:", file);

    // Set the file to state
    setJsonFile(file);
  };
  return (
    <>
      <label
        htmlFor="fileInput"
        className="h-72 sm:h-80  border-dashed border-2 border-gray-500 flex w-full justify-center text-center items-center bg-slate-200 cursor-pointer"
      >
        <div>
          <div className="w-full flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="blue"
              className="w-12 h-12"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-bold text-2xl md:text-3xl px-4">
            Drag and drop or click here
          </p>
          <p className="px-4">to upload your json file of component</p>
        </div>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept=".json"
          onChange={handleJsonFileUpload}
        />
      </label>
      {/* when response is generated */}
      <div className="mt-4 text-xl font-bold">Generated Code:</div>
      <div className="bg-slate-900 p-4 rounded-xl sm:p-8 text-red-400 mt-4 h-60 w-full overflow-y-scroll">
        <div className="">
          <pre>JSON</pre>
          <pre>JSON</pre>
          <pre>JSON</pre>
          <pre>JSON</pre>
          <pre>JSON</pre>
          <pre>JSON</pre>
          <pre>JSON</pre>
          <pre>JSON</pre>
          <pre>JSON</pre>
          <pre>JSON</pre>
          <pre>JSON</pre>
        </div>
      </div>
    </>
  );
}
