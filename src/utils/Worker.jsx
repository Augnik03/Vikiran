

import React, { useState } from "react";
import query from "./queryFunction"; 

function Worker() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleQuery = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await query(formData);
      console.log(response);
    } catch (error) {
      console.error("Error querying:", error);
    }
  };

  return (
    <div>
      <h1>My React Component</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleQuery}>Query</button>
    </div>
  );
}

export default Worker;
