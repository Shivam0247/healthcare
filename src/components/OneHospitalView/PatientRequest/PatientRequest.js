import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

function PatientRequest() {
  return (
    <div>
      <div className="flex flex-col flex-wrap gap-4 mb-[2em]">
        <Breadcrumbs size="md">
          <BreadcrumbItem href="/Hospital/Dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem>Patient Request</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="flex flex-col gap-4 mb-8 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-800">Patients Request</h1>
      </div>

      <div className="allcards flex flex-wrap">
        <div class="block max-w-xs p-6 bg-white border bg-[#00800036] border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mr-3 mt-3">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Shivam Patel
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">Age: 19</p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Diseases: Cold
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Gender: Male
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Insurance Id: 2118721
          </p>

          <div className="btn mt-5">
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Accept
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Decline
            </button>
          </div>
        </div>

        <div class="block max-w-xs p-6 bg-white border border-gray-200 bg-[#ff00001f] rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mr-3 mt-3">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Herit Patel
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">Age: 19</p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Diseases: Cancer
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Gender: Male
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Insurance Id: 2123721
          </p>

          <div className="btn mt-5">
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Accept
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Decline
            </button>
          </div>
        </div>
        <div class="block max-w-xs p-6 bg-white border bg-[#00800036] border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mr-3 mt-3">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Aneri Shah
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">Age: 19</p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Diseases: Fever
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Gender: Male
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Insurance Id: 2118721
          </p>

          <div className="btn mt-5">
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Accept
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRequest;
