import { useState, useRef } from 'react';

function JsonConverter() {
  const [output, setOutput] = useState("Sample JSON Output");
  const inputAreaRef = useRef(null);

  const handleFormat = () => {
    if (inputAreaRef.current) { 
      try {
        const input = JSON.parse(inputAreaRef.current.value);
        const formattedOutput = JSON.stringify(input, null, 4);
        setOutput(formattedOutput);
      } catch (error) {
        setOutput("Invalid JSON: " + error.message); 
      }
    }
  };

  const handleMinify = () => {
    if (inputAreaRef.current) {
      try {
        const input = JSON.parse(inputAreaRef.current.value);
        const minifiedOutput = JSON.stringify(input);
        setOutput(minifiedOutput);
      } catch (error) {
        setOutput("Invalid JSON: " + error.message);
      }
    }
  };

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      alert("Text copied!");
    } else {
      alert("Nothing to copy!");
    }
  };

  return (
    <div>
      <div className="mt h-[100%] w-[100vw] rounded-xs bg-black p-6">
      <h1 className='text-3xl font-bold mb-4 text-pink-500'>Json Formatter</h1>

        <div className="mt-[4vh] flex flex-col gap-4 md:flex-row">
          <textarea
            ref={inputAreaRef}
            className="h-[80vh] w-full resize-none rounded-md bg-gray-800 p-2 text-white focus:outline-none md:w-[50%]"
            placeholder="Enter JSON here"
          ></textarea>

          <div className="h-[80vh] w-full overflow-y-auto rounded-md bg-gray-800 p-2 text-white md:w-[50%]">
            <pre>{output}</pre>
            <button
                onClick={handleCopy}
                   className=" text-xl fixed top-20 right-10 rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-700">
                Copy
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <button onClick={handleFormat} className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Format
          </button>
          <button onClick={handleMinify} className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
            Minify
          </button>
        </div>
      </div>
    </div>
  );
}

export default JsonConverter;