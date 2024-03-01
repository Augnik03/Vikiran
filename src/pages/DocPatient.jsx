import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config";

export default function DocPatient() {
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

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h2 className="text-2xl font-semibold mb-4">Patients Data</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID No.</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">phone</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                {/* Add more table headers as per your data fields */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patientsData.map(patient => (
                <tr key={patient.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.designation}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.idno}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.description}</td>
                  {/* Add more table cells with patient data */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
