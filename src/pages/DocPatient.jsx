import React from "react";
import Sidebar from "../components/Sidebar";
import PatientCard from "../components/PatientCard";

export default function DocPatient() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="p-4 sm:ml-64">
        <div className="mt-5 border text-4xl text-center rounded-lg border-black">
          PATIENT LIST
        </div>
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-14">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
            <div>
              <PatientCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
