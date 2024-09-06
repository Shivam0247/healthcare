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
    </div>
  );
}

export default PatientRequest;
