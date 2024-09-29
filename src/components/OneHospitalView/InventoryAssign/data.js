const columns = [
  { name: "ITEM NAME", uid: "itemName", sortable: true },
  { name: "ASSIGNED STATION", uid: "assignedStation", sortable: true },
  { name: "QUANTITY", uid: "quantity", sortable: true },
  { name: "CATEGORY", uid: "category", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "In Use", uid: "InUse" },
  { name: "Available", uid: "Available" },
  { name: "Under Maintenance", uid: "UnderMaintenance" },
];
const users = [
  {
    id: 1,
    itemName: "Handcuffs",
    assignedStation: "Bhopal Police Station",
    quantity: 50,
    category: "Equipment",
    status: "Available",
  },
  {
    id: 2,
    itemName: "Patrol Car",
    assignedStation: "Indore Police Station",
    quantity: 3,
    category: "Vehicle",
    status: "In Use",
  },
  {
    id: 3,
    itemName: "Bulletproof Vests",
    assignedStation: "Gwalior Police Station",
    quantity: 20,
    category: "Equipment",
    status: "Available",
  },
  {
    id: 4,
    itemName: "Tear Gas Canisters",
    assignedStation: "Jabalpur Police Station",
    quantity: 100,
    category: "Equipment",
    status: "Available",
  },
  {
    id: 5,
    itemName: "Motorcycles",
    assignedStation: "Ujjain Police Station",
    quantity: 5,
    category: "Vehicle",
    status: "Under Maintenance",
  },
  {
    id: 6,
    itemName: "Police Radios",
    assignedStation: "Sagar Police Station",
    quantity: 40,
    category: "Equipment",
    status: "In Use",
  },
];

export { columns, statusOptions, users };
