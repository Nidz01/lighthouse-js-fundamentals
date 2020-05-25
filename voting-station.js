const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
  ];
  const chooseStations = (stations) => {
    const filteredStations = stations.filter((station) => (
      station[1] >= 20 && (station[2] === 'community centre' || station[2] === 'school')
    ));
    return filteredStations.map(station => station[0]);
  }
  console.log(chooseStations(stations));

