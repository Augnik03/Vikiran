import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config";

export default function PatientCard() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'feedback'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPatientsData(data);
      } catch (error) {
        console.error("Error fetching patients data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleReadMoreClick = (patient) => {
    setSelectedPatient(patient);
    setShowDetail(true);
  };

  const handleCloseClick = () => {
    setShowDetail(false);
  };

  return (
    <div>
      {patientsData.map((patient) => (
        <div key={patient.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10 pt-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="./vite.svg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {patient.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Patient</span>
            <div className="flex mt-4 md:mt-6">
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleReadMoreClick(patient)}
              >
                Show Profile
              </button>
              <a
                href="#"
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Edit Details
              </a>
            </div>
          </div>
        </div>
      ))}
      {showDetail && selectedPatient && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-1/2 h- rounded-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseClick}
            >
              X
            </button>
            <div className="flex">
              <div className="w-1/2 p-4">
                <h1>Patient info from Backend</h1>
                <p>Name: {selectedPatient.name}</p>
                <p>Designation: {selectedPatient.designation}</p>
                <p>ID No.: {selectedPatient.idno}</p>
                <p>Category: {selectedPatient.category}</p>
                <p>Status: {selectedPatient.status}</p>
                <p>Phone: {selectedPatient.phone}</p>
                <p>Email: {selectedPatient.email}</p>
                <p>Description: {selectedPatient.description}</p>

                {/* Add other patient information fields as needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
