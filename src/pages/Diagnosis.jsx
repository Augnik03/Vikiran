import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

function Diagnosis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleQuery = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    // Assuming you can extract the file name from the selectedFile
    const fileName = selectedFile.name;

    // Mocking results based on the file name
    let mockResult;
    if (fileName.toLowerCase().includes('sick')) {
      mockResult = { diagnosis: 'Pneumonia' };
    } else {
      mockResult = { diagnosis: 'Normal' };
    }

    // Set the mock result to display in your UI
    setResult(mockResult);
  };

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div>
            <h1>My React Component</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleQuery}>Query</button>

            {/* Display progress bar based on the mock result */}
            {result && (
              <div>
                <h2>Diagnosis Result:</h2>
                <p>{result.diagnosis}</p>
                {/* Add progress bars based on the diagnosis */}
                <div className="relative pt-1">
                  {result.diagnosis === 'Pneumonia' ? (
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                      <div style={{ width: '100%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                    </div>
                  ) : (
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                      <div style={{ width: '100%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Diagnosis;
