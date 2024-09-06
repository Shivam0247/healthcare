import React from "react";

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "PHONE NO", uid: "phone", sortable: true },
  { name: "ADDRESS", uid: "address" },
  { name: "SHOP STATUS", uid: "shopStatus" },
  { name: "OPERATING HOURS", uid: "operatingHours" }, // New column for operating hours
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Open", uid: "Open" },
  { name: "Closed", uid: "Closed" },
];

const operatingHoursOptions = [
  { name: "Daylight", uid: "Daylight" },
  { name: "24 Hours", uid: "24Hours" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    phone: "+1234567890",
    address: "123 Elm Street, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 2,
    name: "Zoey Lang",
    phone: "+1234567891",
    address: "456 Oak Avenue, Springfield",
    status: "paused",
    shopStatus: "Closed",
    operatingHours: "Daylight", // New field for operating hours
  },
  {
    id: 3,
    name: "Jane Fisher",
    phone: "+1234567892",
    address: "789 Pine Road, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 4,
    name: "William Howard",
    phone: "+1234567893",
    address: "101 Maple Lane, Springfield",
    status: "vacation",
    shopStatus: "Closed",
    operatingHours: "Daylight", // New field for operating hours
  },
  {
    id: 5,
    name: "Kristen Copper",
    phone: "+1234567894",
    address: "202 Birch Boulevard, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 6,
    name: "Brian Kim",
    phone: "+1234567895",
    address: "303 Cedar Street, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 7,
    name: "Michael Hunt",
    phone: "+1234567896",
    address: "404 Spruce Avenue, Springfield",
    status: "paused",
    shopStatus: "Closed",
    operatingHours: "Daylight", // New field for operating hours
  },
  {
    id: 8,
    name: "Samantha Brooks",
    phone: "+1234567897",
    address: "505 Fir Road, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 9,
    name: "Frank Harrison",
    phone: "+1234567898",
    address: "606 Aspen Lane, Springfield",
    status: "vacation",
    shopStatus: "Closed",
    operatingHours: "Daylight", // New field for operating hours
  },
  {
    id: 10,
    name: "Emma Adams",
    phone: "+1234567899",
    address: "707 Redwood Street, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 11,
    name: "Brandon Stevens",
    phone: "+1234567800",
    address: "808 Willow Avenue, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 12,
    name: "Megan Richards",
    phone: "+1234567801",
    address: "909 Poplar Road, Springfield",
    status: "paused",
    shopStatus: "Closed",
    operatingHours: "Daylight", // New field for operating hours
  },
  {
    id: 13,
    name: "Oliver Scott",
    phone: "+1234567802",
    address: "1010 Elm Street, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 14,
    name: "Grace Allen",
    phone: "+1234567803",
    address: "1111 Oak Avenue, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 15,
    name: "Noah Carter",
    phone: "+1234567804",
    address: "1212 Pine Road, Springfield",
    status: "paused",
    shopStatus: "Closed",
    operatingHours: "Daylight", // New field for operating hours
  },
  {
    id: 16,
    name: "Ava Perez",
    phone: "+1234567805",
    address: "1313 Maple Lane, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 17,
    name: "Liam Johnson",
    phone: "+1234567806",
    address: "1414 Birch Boulevard, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 18,
    name: "Sophia Taylor",
    phone: "+1234567807",
    address: "1515 Cedar Street, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
  {
    id: 19,
    name: "Lucas Harris",
    phone: "+1234567808",
    address: "1616 Spruce Avenue, Springfield",
    status: "vacation",
    shopStatus: "Closed",
    operatingHours: "Daylight", // New field for operating hours
  },
  {
    id: 20,
    name: "Isabella Lewis",
    phone: "+1234567809",
    address: "1717 Fir Road, Springfield",
    status: "active",
    shopStatus: "Open",
    operatingHours: "24 Hours", // New field for operating hours
  },
];

export { columns, users, statusOptions, operatingHoursOptions };
