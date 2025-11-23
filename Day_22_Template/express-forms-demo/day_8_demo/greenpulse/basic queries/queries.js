//  insertin data into collection
db.Reading_energy.insertMany([
  { "meterId": "MTR001", "location": "Delhi-Office", "timestamp": ISODate("2025-10-29T10:00:00Z"), "energy_kWh": 3.5, "temperature_C": 27 },
  { "meterId": "MTR001", "location": "Delhi-Office", "timestamp": ISODate("2025-10-29T11:00:00Z"), "energy_kWh": 3.8, "temperature_C": 28 },
  { "meterId": "MTR001", "location": "Delhi-Office", "timestamp": ISODate("2025-10-29T12:00:00Z"), "energy_kWh": 4.2, "temperature_C": 30 },
  { "meterId": "MTR002", "location": "Mumbai-Plant", "timestamp": ISODate("2025-10-29T10:00:00Z"), "energy_kWh": 5.5, "temperature_C": 32 },
  { "meterId": "MTR002", "location": "Mumbai-Plant", "timestamp": ISODate("2025-10-29T11:00:00Z"), "energy_kWh": 6.2, "temperature_C": 33 },
  { "meterId": "MTR002", "location": "Mumbai-Plant", "timestamp": ISODate("2025-10-29T12:00:00Z"), "energy_kWh": 5.9, "temperature_C": 31 }
]
);

//Retrieving all readings  for a specific meter ex mtr001
db.Reading_energy.find({"meterId":"MTR001"});

// Find the readings gt  specific time stamp 

 db.Reading_energy.find({meterId:"MTR001",timestamp:{$gt:ISODate("2010-10-23T10:00:00Z")}});



//  Find the readings between two time stamps 
 db.Reading_energy.find({
  timestamp: {
    $gte: ISODate("2025-10-29T10:00:00Z"),
    $lte: ISODate("2025-10-29T12:00:00Z")
  }
});


db.Reading_energy.aggregate([
  {
    $group: {
      _id: { hour: { $hour: "$timestamp" }, meterId: "$meterId" },
      hourlyConsumption: { $sum: "$energy_kWh" }
    }
  },
  { $sort: { "_id.hour": 1 } }
]);


db.Reading_energy.aggregate([
  { $group: {
      _id: { meterId: "$meterId", date: { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } } },
      totalEnergy: { $sum: "$energy_kWh" },
      avgTemp: { $avg: "$temperature_C" }
  }},
  { $sort: { totalEnergy: -1 } },
  { $limit: 5 }
]);