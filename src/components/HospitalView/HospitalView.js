import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

function HospitalView() {
  return (
    <>
      {" "}
      <div className="flex flex-col flex-wrap gap-4 mb-[2em]">
        <Breadcrumbs size="md">
          <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="/Hospital">Hospitals</BreadcrumbItem>
          <BreadcrumbItem>Hospital View</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="flex flex-col gap-4 mb-8 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-800">Hospital View</h1>
      </div>
    </>
  );
}

export default HospitalView;
