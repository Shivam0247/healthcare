const columns = [
  { name: "ITEM NAME", uid: "itemName", sortable: true },
  { name: "QUANTITY", uid: "quantity", sortable: true },
  { name: "CATEGORY", uid: "category", sortable: true },
  { name: "REASON FOR MAINTENANCE", uid: "maintenanceReason", sortable: false },
  { name: "DURATION", uid: "duration", sortable: false },
  { name: "STATUS", uid: "status", sortable: true },
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
    itemName: "Motorcycles",
    quantity: 5,
    category: "Vehicle",
    maintenanceReason: "Engine failure",
    duration: "2 weeks",
    status: "Under Maintenance",
  },
  {
    id: 2,
    itemName: "Police Van",
    quantity: 2,
    category: "Vehicle",
    maintenanceReason: "Transmission issue",
    duration: "3 weeks",
    status: "Under Maintenance",
  },
  {
    id: 3,
    itemName: "Surveillance Drones",
    quantity: 10,
    category: "Equipment",
    maintenanceReason: "Battery replacement",
    duration: "1 week",
    status: "Under Maintenance",
  },
];

export { columns, statusOptions, users };
