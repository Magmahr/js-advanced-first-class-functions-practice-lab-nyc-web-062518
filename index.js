// Code your solution in this file!


function logDriverNames(drivers){
  drivers.map(function(driver){
  console.log(`${driver.name}`)
  })
}

function logDriversByHometown(drivers, town){
  const matches = drivers.filter(function(driver){
    return driver.hometown === town
  })
  return logDriverNames(matches)
  // matches.map(function(driver){
  //   console.log(driver.name)
  // })
}

function driversByRevenue(drivers){
  const revenues = drivers.map(function(driver){
    return driver.revenue
  })
  return sorted
}

const driverRevenueSorter = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue ;
};

const driverNameSorter = function (driver1, driver2) {
  return driver1.name.localeCompare(driver2.name) ;
};

function driversByRevenue(drivers){
  const drivers2 = [...drivers]
  const revenues = drivers2.sort(driverRevenueSorter)
  return revenues
}

function driversByName(drivers){
  const drivers2 = [...drivers]
  const names = drivers2.sort(driverNameSorter)
  return names
}

function totalRevenue(drivers){
  const revenues = drivers.map(function(driver){
    return driver.revenue
  })
  const total = revenues.reduce(function(total, amount){
    return total + amount
  })
  return total
}

function averageRevenue(drivers){
  const avg = (totalRevenue(drivers) / drivers.length)
  return avg
}
