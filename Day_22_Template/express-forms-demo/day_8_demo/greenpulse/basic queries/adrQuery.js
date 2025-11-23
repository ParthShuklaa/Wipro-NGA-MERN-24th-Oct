// Finding total energy consumption per meter


db.Reading_energy.aggregate([
  {
    $group: {
      _id: "$meterId",               
      totalEnergy: { $sum: "$energy_kWh" }  
    }
  }
]);


// Average temperature by location 
db.Reading_energy.aggregate([{ $group:{_id:"$location", avgtemp: { $avg: "$temperature_C" }}}]);


// Hourly energy consumption trend



// Comparing average energy usage across meters

db.Reading_energy.aggregate([{$group:{_id:"$meterId",avgenerg:{$avg:"$energy_kWh"}}}]);