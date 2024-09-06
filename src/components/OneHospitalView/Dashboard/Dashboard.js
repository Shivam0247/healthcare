import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

const metricsData = [
  { title: "Appointment", value: "250", upward: true, percent: "1.8%" },
  { title: "New Patients", value: "140", upward: true, percent: "2.5%" },
  { title: "Operation", value: "56", upward: false, percent: "5.2%" },
  { title: "Earnings", value: "$250.00", upward: true, percent: "2.2%" },
];

const donutChartOptions = {
  series: [35.1, 23.5, 2.4, 5.4],
  colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
  chart: { height: 320, width: "100%", type: "donut" },
  stroke: { colors: ["transparent"] },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: { show: true, fontFamily: "Inter, sans-serif", offsetY: 20 },
          total: {
            showAlways: true,
            show: true,
            label: "Patient Department",
            fontFamily: "Inter, sans-serif",
            formatter: (w) => {
              const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              return `${sum}k`;
            },
          },
          value: {
            show: true,
            fontFamily: "Inter, sans-serif",
            offsetY: -20,
            formatter: (value) => `${value}k`,
          },
        },
        size: "80%",
      },
    },
  },
  grid: { padding: { top: -2 } },
  labels: ["Neurology", "Dental Care", "Gynecology", "Orthopaedic"],
  dataLabels: { enabled: false },
  legend: { position: "bottom", fontFamily: "Inter, sans-serif" },
};

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
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: { fontFamily: "Inter, sans-serif" },
  },
  states: { hover: { filter: { type: "darken", value: 1 } } },
  stroke: { show: true, width: 0, colors: ["transparent"] },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: -14 },
  },
  dataLabels: { enabled: false },
  legend: { show: false },
  xaxis: {
    labels: {
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  fill: { opacity: 1 },
};

const radialChartOptions = {
  series: [70, 80, 90],
  chart: { height: 380, type: "radialBar" },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: { show: true, fontSize: "22px", fontFamily: "Inter, sans-serif" },
        value: {
          show: true,
          fontSize: "16px",
          fontFamily: "Inter, sans-serif",
          offsetY: 10,
        },
      },
      track: { background: "#f5f5f5", strokeWidth: "100%" },
    },
  },
  colors: ["#FF4560", "#00E396", "#008FFB"],
  legend: {
    show: true,
    floating: true,
    fontSize: "16px",
    position: "right",
    offsetX: 0,
    offsetY: 50,
  },
  fill: { opacity: 1 },
  stroke: { lineCap: "round" },
};

const updateDonutSeries = (checkedValues) => {
  const seriesMap = {
    desktop: [15.1, 22.5, 4.4, 8.4],
    tablet: [25.1, 26.5, 1.4, 3.4],
    mobile: [45.1, 27.5, 8.4, 2.4],
    default: [55.1, 28.5, 1.4, 5.4],
  };
  return checkedValues.length
    ? checkedValues.reduce((acc, value) => [...acc, ...seriesMap[value]], [])
    : seriesMap.default;
};

export default function Dashboard() {
  const [donutSeries, setDonutSeries] = useState(donutChartOptions.series);
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckedValues((prevValues) =>
      checked ? [...prevValues, value] : prevValues.filter((v) => v !== value)
    );
  };

  useEffect(() => {
    setDonutSeries(updateDonutSeries(checkedValues));
  }, [checkedValues]);

  return (
    <>
      <div className="flex flex-col gap-4 mb-8 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex min-h-screen">
        <div className="container max-w-6xl px-5 mx-auto my-5">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {metricsData.map((metrics, index) => (
              <div className="p-5 bg-white rounded-large shadow" key={index}>
                <div className="text-base text-gray-400">{metrics.title}</div>
                <div className="flex items-center pt-1">
                  <div className="text-2xl font-bold text-gray-900">
                    {metrics.value}
                  </div>
                  <span
                    className={`flex items-center px-2 py-0.5 mx-2 text-sm rounded-full ${
                      metrics.upward
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 mr-1.5 ${
                        metrics.upward ? "text-green-500" : "text-red-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={metrics.upward ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                      />
                    </svg>
                    {metrics.percent}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex">
            <div className="bg-white p-5 rounded-lg shadow mt-10 mr-[2rem] w-[78vw]">
              <div className="text-xl font-bold text-gray-800 mb-4">
                Patient Statistics
              </div>
              <ApexCharts
                options={radialChartOptions}
                series={radialChartOptions.series}
                type="radialBar"
                height={380}
              />
            </div>

            <div className="grid gap-7 grid-cols-1 lg:grid-cols-2 mt-10 ">
              <div className="bg-white p-5 rounded-lg shadow w-[35vw]">
                <div className="text-xl font-bold text-gray-800 mb-4">
                  Department Metrics
                </div>
                <ApexCharts
                  options={donutChartOptions}
                  series={donutSeries}
                  type="donut"
                  height={320}
                />
                <div className="flex justify-center mt-4"></div>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow mt-[2rem]">
            <div className="text-xl font-bold text-gray-800 mb-4">
              Weekly Patients
            </div>
            <ApexCharts
              options={barChartOptions}
              series={barChartOptions.series}
              type="bar"
              height={320}
            />
          </div>
        </div>
      </div>
    </>
  );
}
