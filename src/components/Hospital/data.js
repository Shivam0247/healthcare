const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "CATEGORY", uid: "category", sortable: true },
  { name: "AVAILABILITY", uid: "availability", sortable: true },
  { name: "DISCHARGES", uid: "discharges", sortable: true },
  { name: "AVAILABLE BEDS", uid: "availableBeds", sortable: true }, // New column
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Available", uid: "Available" },
  { name: "NotAvailable", uid: "NotAvailable" },
];

const users = [
  {
    id: 1,
    name: "St. Mary's Hospital",
    category: "Cancer Specialist",
    availability: "Available",
    discharges: "250",
    availableBeds: "50", // New data
  },
  {
    id: 2,
    name: "City General",
    category: "Cardiology",
    availability: "NotAvailable",
    discharges: "180",
    availableBeds: "0", // New data
  },
  {
    id: 3,
    name: "Sunrise Clinic",
    category: "Pediatrics",
    availability: "Available",
    discharges: "300",
    availableBeds: "30", // New data
  },
  {
    id: 4,
    name: "Metropolitan Hospital",
    category: "Orthopedics",
    availability: "Available",
    discharges: "220",
    availableBeds: "20", // New data
  },
  {
    id: 5,
    name: "Riverside Medical",
    category: "Neurology",
    availability: "NotAvailable",
    discharges: "150",
    availableBeds: "0", // New data
  },
  {
    id: 6,
    name: "Coastal Health Center",
    category: "Dermatology",
    availability: "Available",
    discharges: "90",
    availableBeds: "15", // New data
  },
  {
    id: 7,
    name: "Green Valley Hospital",
    category: "Oncology",
    availability: "Available",
    discharges: "200",
    availableBeds: "25", // New data
  },
  {
    id: 8,
    name: "Highland Medical",
    category: "Gastroenterology",
    availability: "Available",
    discharges: "140",
    availableBeds: "40", // New data
  },
  {
    id: 9,
    name: "Brighton Health Clinic",
    category: "Psychiatry",
    availability: "NotAvailable",
    discharges: "110",
    availableBeds: "5", // New data
  },
  {
    id: 10,
    name: "Evergreen Hospital",
    category: "Radiology",
    availability: "Available",
    discharges: "175",
    availableBeds: "10", // New data
  },
];

export { columns, users, statusOptions };
