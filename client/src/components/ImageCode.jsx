import { useState } from "react";
export default function ImageCode() {
  const [imageFile, setImageFile] = useState(null);

  const handleImageFileUpload = (event) => {
    const file = event.target.files[0];

    // Do something with the file if needed
    console.log("Selected file:", file);

    // Set the file to state
    setImageFile(file);
  };
  return (
    <>
      <label
        htmlFor="fileInput"
        className="h-72 sm:h-80  border-dashed border-2 border-gray-500 flex w-full justify-center text-center items-center bg-slate-200 cursor-pointer"
      >
        <div>
          <div className="w-full flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

          </div>
          <p className="text-bold text-2xl md:text-3xl px-4">
            Drag and drop or click here
          </p>
          <p className="px-4">to upload your Image file of component</p>
        </div>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept="image/jpeg, image/png, image/gif"
          onChange={handleImageFileUpload}
        />
      </label>
      {/* when response is generated */}
      <div className="mt-4 text-xl font-bold">Generated Code:</div>
      <div className="bg-slate-900 p-4 rounded-xl sm:p-8 text-red-400 mt-4 h-60 w-full overflow-y-scroll">
        <div className="">
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
          <pre>Image</pre>
        </div>
      </div>
    </>
  );
}
