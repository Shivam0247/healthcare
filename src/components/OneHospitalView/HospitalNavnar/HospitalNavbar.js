import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Hospital from "../../Hospital/Hospital";
import Chemist from "../../Chemist/Chemist";
import HospitalView from "../../HospitalView/HospitalView";
import ChemistView from "../../ChemistView/ChemistView";
import Doctor from "../Doctor/Doctor";
import Patient from "../Patient/Patient";
import Dashboard from "../Dashboard/Dashboard";
import PatientRequest from "../PatientRequest/PatientRequest";

function HospitalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button
            onClick={toggleSidebar}
            type="button"
            className="absolute top-4 right-4 p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
            aria-label="Close sidebar"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M6.293 4.293a1 1 0 011.414 0L10 5.586l2.293-2.293a1 1 011.414 1.414L11.414 7l2.293 2.293a1 1 0 01-1.414 1.414L10 8.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 7 6.293 4.707a1 1 0 010-1.414z"
              ></path>
            </svg>
          </button>

          <a
            href="/Hospital/Dashboard"
            className="flex items-center ps-2.5 mb-5"
          >
            {/* <i class="fa-solid fa-link h-6 me-3 sm:h-7 text-[26px] text-blue-800"></i> */}
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
              HealthLink
            </span>
          </a>

          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/Hospital/Dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i className="fa-solid fa-house"></i>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Hospital/PoliceOfficer"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i
                  class="fi fi-bs-user-police"
                  style={{ fontSize: "20px" }}
                ></i>{" "}
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Police Officer
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Hospital/Inventory"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i
                  class="fi fi-br-inventory-alt"
                  style={{ fontSize: "20px" }}
                ></i>{" "}
                <span className="flex-1 ms-3 whitespace-nowrap">Inventory</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Hospital/Inventoryrequest"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i class="fa-solid fa-code-pull-request"></i>{" "}
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Inventory Request
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i className="fa-solid fa-gear"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content area */}
      <div className="p-4 sm:ml-64 overflow-hidden">
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/PoliceOfficer" element={<Doctor />} />
          <Route path="/Inventory" element={<Patient />} />
          <Route path="/Inventoryrequest" element={<PatientRequest />} />
          {/* <Route path="/Hospital/HospitalView" element={<HospitalView />} />
          <Route path="/Chemist/ChemistView" element={<ChemistView />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default HospitalNavbar;
