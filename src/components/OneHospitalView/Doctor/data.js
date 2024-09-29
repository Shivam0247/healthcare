// data.js
const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "RANK", uid: "rank", sortable: true },
  { name: "EMAIL", uid: "email", sortable: true },
  { name: "CONTACT", uid: "contact" },
  { name: "AVAILABILITY", uid: "availability", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "On Duty", uid: "OnDuty" },
  { name: "Off Duty", uid: "OffDuty" },
];

const users = [
  {
    id: 1,
    name: "Inspector Rajesh Sharma",
    rank: "Inspector",
    email: "rajesh.sharma@police.in",
    contact: "+91-9876543210",
    availability: "On Duty",
  },
  {
    id: 2,
    name: "Sub-Inspector Priya Nair",
    rank: "Sub-Inspector",
    email: "priya.nair@police.in",
    contact: "+91-9876543211",
    availability: "Off Duty",
  },
  {
    id: 3,
    name: "Constable Vikram Singh",
    rank: "Constable",
    email: "vikram.singh@police.in",
    contact: "+91-9876543212",
    availability: "On Duty",
  },
  {
    id: 4,
    name: "Assistant Commissioner Anil Kumar",
    rank: "Assistant Commissioner",
    email: "anil.kumar@police.in",
    contact: "+91-9876543213",
    availability: "On Duty",
  },
  {
    id: 5,
    name: "Head Constable Sunita Reddy",
    rank: "Head Constable",
    email: "sunita.reddy@police.in",
    contact: "+91-9876543214",
    availability: "Off Duty",
  },
  {
    id: 6,
    name: "Deputy Commissioner Pankaj Verma",
    rank: "Deputy Commissioner",
    email: "pankaj.verma@police.in",
    contact: "+91-9876543215",
    availability: "On Duty",
  },
  {
    id: 7,
    name: "Inspector Kavita Joshi",
    rank: "Inspector",
    email: "kavita.joshi@police.in",
    contact: "+91-9876543216",
    availability: "On Duty",
  },
  {
    id: 8,
    name: "Sub-Inspector Arjun Patel",
    rank: "Sub-Inspector",
    email: "arjun.patel@police.in",
    contact: "+91-9876543217",
    availability: "On Duty",
  },
  {
    id: 9,
    name: "Constable Meena Desai",
    rank: "Constable",
    email: "meena.desai@police.in",
    contact: "+91-9876543218",
    availability: "Off Duty",
  },
  {
    id: 10,
    name: "Commissioner Rakesh Gupta",
    rank: "Commissioner",
    email: "rakesh.gupta@police.in",
    contact: "+91-9876543219",
    availability: "On Duty",
  },
];

export { columns, statusOptions, users };
