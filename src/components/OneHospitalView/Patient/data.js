// data.js
const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "AGE", uid: "age", sortable: true },
  { name: "EMAIL", uid: "email", sortable: true },
  { name: "CONTACT", uid: "contact" },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Admitted", uid: "Admitted" },
  { name: "Discharged", uid: "Discharged" },
  { name: "UnderTreatment", uid: "UnderTreatment" },
];

const users = [
  {
    id: 1,
    name: "John Doe",
    age: 34,
    email: "john.doe@example.com",
    contact: "+1-555-1234",
    status: "Admitted",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 29,
    email: "jane.smith@example.com",
    contact: "+1-555-5678",
    status: "Discharged",
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 47,
    email: "michael.brown@example.com",
    contact: "+1-555-8765",
    status: "UnderTreatment",
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 55,
    email: "emily.davis@example.com",
    contact: "+1-555-4321",
    status: "Admitted",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    age: 42,
    email: "sarah.wilson@example.com",
    contact: "+1-555-9876",
    status: "Discharged",
  },
  {
    id: 6,
    name: "David Johnson",
    age: 36,
    email: "david.johnson@example.com",
    contact: "+1-555-6543",
    status: "UnderTreatment",
  },
  {
    id: 7,
    name: "Laura Martinez",
    age: 63,
    email: "laura.martinez@example.com",
    contact: "+1-555-3210",
    status: "Admitted",
  },
  {
    id: 8,
    name: "Chris Taylor",
    age: 31,
    email: "chris.taylor@example.com",
    contact: "+1-555-6789",
    status: "UnderTreatment",
  },
  {
    id: 9,
    name: "Anna Anderson",
    age: 27,
    email: "anna.anderson@example.com",
    contact: "+1-555-5432",
    status: "Discharged",
  },
  {
    id: 10,
    name: "James Clark",
    age: 50,
    email: "james.clark@example.com",
    contact: "+1-555-1098",
    status: "Admitted",
  },
];

export { columns, statusOptions, users };
