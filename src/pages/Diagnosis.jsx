import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import queryFunction from '../utils/queryFunction';

function Diagnosis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pneumoniaProgress, setPneumoniaProgress] = useState(0);
  const [normalProgress, setNormalProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

//   const handleQuery = async () => {
//     if (!selectedFile) {
//       alert("Please select a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await queryFunction(formData); 
//       console.log(response);
//     } catch (error) {
//       console.error("Error querying:", error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <Sidebar />
//       </div>
//       <div className="p-4 sm:ml-64">
//         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
//           <div>
//             <h1>My React Component</h1>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleQuery}>Query</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Diagnosis;
