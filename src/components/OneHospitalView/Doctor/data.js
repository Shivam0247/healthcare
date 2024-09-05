// data.js
const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "SPECIALIST", uid: "specialist", sortable: true },
  { name: "EMAIL", uid: "email", sortable: true },
  { name: "CONTACT", uid: "contact" },
  { name: "AVAILABILITY", uid: "availability", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Available", uid: "Available" },
  { name: "NotAvailable", uid: "NotAvailable" },
];

const users = [
  {
    id: 1,
    name: "Dr. Alice Johnson",
    specialist: "Cardiology",
    email: "alice.johnson@example.com",
    contact: "+1-555-1234",
    availability: "Available",
  },
  {
    id: 2,
    name: "Dr. Bob Smith",
    specialist: "Dermatology",
    email: "bob.smith@example.com",
    contact: "+1-555-5678",
    availability: "NotAvailable",
  },
  {
    id: 3,
    name: "Dr. Carol Williams",
    specialist: "Neurology",
    email: "carol.williams@example.com",
    contact: "+1-555-8765",
    availability: "Available",
  },
  {
    id: 4,
    name: "Dr. David Brown",
    specialist: "Orthopedics",
    email: "david.brown@example.com",
    contact: "+1-555-4321",
    availability: "Available",
  },
  {
    id: 5,
    name: "Dr. Emily Davis",
    specialist: "Pediatrics",
    email: "emily.davis@example.com",
    contact: "+1-555-9876",
    availability: "NotAvailable",
  },
  {
    id: 6,
    name: "Dr. Frank Miller",
    specialist: "Radiology",
    email: "frank.miller@example.com",
    contact: "+1-555-6543",
    availability: "Available",
  },
  {
    id: 7,
    name: "Dr. Grace Wilson",
    specialist: "Gastroenterology",
    email: "grace.wilson@example.com",
    contact: "+1-555-3210",
    availability: "Available",
  },
  {
    id: 8,
    name: "Dr. Henry Moore",
    specialist: "Psychiatry",
    email: "henry.moore@example.com",
    contact: "+1-555-6789",
    availability: "Available",
  },
  {
    id: 9,
    name: "Dr. Irene Taylor",
    specialist: "Oncology",
    email: "irene.taylor@example.com",
    contact: "+1-555-5432",
    availability: "NotAvailable",
  },
  {
    id: 10,
    name: "Dr. Jack Anderson",
    specialist: "Internal Medicine",
    email: "jack.anderson@example.com",
    contact: "+1-555-1098",
    availability: "Available",
  },
];

export { columns, statusOptions, users };
