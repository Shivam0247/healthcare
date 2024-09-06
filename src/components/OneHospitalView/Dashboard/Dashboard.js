import React from "react";
import ApexCharts from "react-apexcharts";

const metricsData = [
  {
    title: "Appointment",
    value: "250",
    upward: true,
    percent: "1.8%",
  },
  {
    title: "New Patients",
    value: "140",
    upward: true,
    percent: "2.5%",
  },
  {
    title: "Operation",
    value: "56",
    upward: false,
    percent: "5.2%",
  },
  {
    title: "Beds Available",
    value: "78",
    upward: true,
    percent: "2.2%",
  },
];

const barChartOptions = {
  colors: ["#1A56DB", "#FDBA8C"],
  series: [
    {
      name: "Male",
      color: "#1A56DB",
      data: [
        { x: "Mon", y: 231 },
        { x: "Tue", y: 122 },
        { x: "Wed", y: 63 },
        { x: "Thu", y: 421 },
        { x: "Fri", y: 122 },
        { x: "Sat", y: 323 },
        { x: "Sun", y: 111 },
      ],
    },
    {
      name: "Female",
      color: "#FDBA8C",
      data: [
        { x: "Mon", y: 232 },
        { x: "Tue", y: 113 },
        { x: "Wed", y: 341 },
        { x: "Thu", y: 224 },
        { x: "Fri", y: 522 },
        { x: "Sat", y: 411 },
        { x: "Sun", y: 243 },
      ],
    },
  ],
  chart: {
    type: "bar",
    height: "320px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
};

const bubbleChartOptions = {
  chart: {
    height: "100%",
    type: "bubble",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  series: [
    { name: "To Do", data: [[5, 6, 70]] },
    { name: "In progress", data: [[8, 4, 45]] },
    { name: "Done", data: [[10, 9, 90]] },
  ],
  dataLabels: {
    enabled: true,
    formatter: (val, opts) => {
      const { seriesIndex, dataPointIndex } = opts;
      const series = opts.w.config.series[seriesIndex];
      const dataPoint = series.data[dataPointIndex];

      // Check if series and dataPoint are valid
      if (series && dataPoint) {
        return `${series.name}: ${dataPoint[2]}`;
      }
      return "";
    },
    style: {
      fontSize: "12px",
      fontFamily: "Inter, ui-sans-serif",
      fontWeight: "400",
      colors: ["#fff"],
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false,
  },
  stroke: {
    width: 5,
  },
  plotOptions: {
    bubble: {
      zScaling: false,
      minBubbleRadius: 40,
    },
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  xaxis: {
    min: 0,
    max: 15,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 15,
    labels: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
};

const pieChartOptions = {
  chart: {
    height: "100%",
    type: "pie",
    zoom: {
      enabled: false,
    },
  },
  series: [60, 18, 12, 10],
  labels: ["Direct", "Organic search", "Referral"],
  title: {
    show: false,
  },
  dataLabels: {
    style: {
      fontSize: "20px",
      fontFamily: "Inter, ui-sans-serif",
      fontWeight: "400",
      //   colors: ["#fff", "#fff", "bg-blue-200"],
    },
    dropShadow: {
      enabled: false,
    },
    formatter: (value) => `${value.toFixed(1)} %`,
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -15,
      },
    },
  },
  legend: {
    show: false,
  },
  stroke: {
    width: 4,
  },
  grid: {
    padding: {
      top: -10,
      bottom: -14,
      left: -9,
      right: -9,
    },
  },
  tooltip: {
    enabled: false,
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
};

// const pieChartColors = ["#3b82f6", "#22d3ee", "#e5e7eb"];

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-4 mb-8 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex min-h-screen">
        <div className="container max-w-6xl px-5 mx-auto my-5">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {metricsData.map((metrics, index) => (
              <div
                className="p-5 bg-gray-100 rounded-large shadow-smrounded-sm mb-5"
                key={index}
              >
                <div className="text-base text-gray-400">{metrics.title}</div>
                <div className="flex items-center pt-1">
                  <div className="text-2xl font-bold text-gray-900">
                    {metrics.value}
                  </div>
                  <span
                    className={`flex items-center px-2 py-0.5 mx-2 text-sm rounded-full ${
                      metrics.upward
                        ? "text-green-600 bg-green-100"
                        : "text-red-600 bg-red-100"
                    }`}
                  >
                    {metrics.upward && (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 15L12 9L6 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {!metrics.upward && (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {metrics.percent}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 19"
                >
                  <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                </svg>
              </div>
              <div className="text-base font-semibold text-gray-900 dark:text-white">
                Patients visited by their Gender
              </div>
            </div>
            <ApexCharts
              options={barChartOptions}
              series={barChartOptions.series}
              type="bar"
              height={320}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 xl:grid-cols-3 w-[100vw]">
            <div className="p-5 bg-white rounded-lg shadow w-[35vw] mr-[2rem]">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 19"
                  >
                    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                  </svg>
                </div>
                <div className="text-base font-semibold text-gray-900 dark:text-white">
                  Patient Files
                </div>
              </div>
              <ApexCharts
                options={bubbleChartOptions}
                series={bubbleChartOptions.series}
                type="bubble"
                height={320}
              />
            </div>
            <div className="p-5 bg-white rounded-lg shadow w-[40vw] ml-9">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 19"
                  >
                    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                  </svg>
                </div>
                <div className="text-base font-semibold text-gray-900 dark:text-white">
                  Patient Department
                </div>
              </div>
              <ApexCharts
                options={pieChartOptions}
                series={pieChartOptions.series}
                type="pie"
                height={320}
                labels={pieChartOptions.labels}
              />

              <div class="inline-flex items-center mr-5">
                <span class="size-2.5 inline-block bg-[rgba(254,176,25,1)] rounded-sm me-2"></span>
                <span class="text-[13px] text-gray-600 dark:text-neutral-400">
                  Neurology
                </span>
              </div>

              <div class="inline-flex items-center mr-5">
                <span class="size-2.5 inline-block bg-[rgba(0,143,251,1)] rounded-sm me-2"></span>
                <span class="text-[13px] text-gray-600 dark:text-neutral-400">
                  Dental Care
                </span>
              </div>

              <div class="inline-flex items-center mr-5">
                <span class="size-2.5 inline-block bg-[rgba(0,227,150,1)] rounded-sm me-2"></span>
                <span class="text-[13px] text-gray-600 dark:text-neutral-400">
                  Gynecology
                </span>
              </div>

              <div class="inline-flex items-center mr-5">
                <span class="size-2.5 inline-block bg-[rgba(255,69,96,1)] rounded-sm me-2"></span>
                <span class="text-[13px] text-gray-600 dark:text-neutral-400">
                  Orthopedic
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
