import React from "react";
import Sidebar from "../components/Sidebar";

export default function DocProfile() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <img
            src="https://ahamediagroup.com/wp-content/uploads/2021/09/DoctorProfiles2.png"
            alt="profile"
          />
        </div>
      </div>
    </>
  );
}
