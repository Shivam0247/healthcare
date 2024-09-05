const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "CATEGORY", uid: "category", sortable: true },
  { name: "AVAILABILITY", uid: "availability", sortable: true },
  { name: "DISCHARGES", uid: "discharges", sortable: true },
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
  },
  {
    id: 2,
    name: "City General",
    category: "Cardiology",
    availability: "NotAvailable",
    discharges: "180",
  },
  {
    id: 3,
    name: "Sunrise Clinic",
    category: "Pediatrics",
    availability: "Available",
    discharges: "300",
  },
  {
    id: 4,
    name: "Metropolitan Hospital",
    category: "Orthopedics",
    availability: "Available",
    discharges: "220",
  },
  {
    id: 5,
    name: "Riverside Medical",
    category: "Neurology",
    availability: "NotAvailable",
    discharges: "150",
  },
  {
    id: 6,
    name: "Coastal Health Center",
    category: "Dermatology",
    availability: "Available",
    discharges: "90",
  },
  {
    id: 7,
    name: "Green Valley Hospital",
    category: "Oncology",
    availability: "Available",
    discharges: "200",
  },
  {
    id: 8,
    name: "Highland Medical",
    category: "Gastroenterology",
    availability: "Available",
    discharges: "140",
  },
  {
    id: 9,
    name: "Brighton Health Clinic",
    category: "Psychiatry",
    availability: "Not Available",
    discharges: "110",
  },
  {
    id: 10,
    name: "Evergreen Hospital",
    category: "Radiology",
    availability: "Available",
    discharges: "175",
  },
];

export { columns, users, statusOptions };
