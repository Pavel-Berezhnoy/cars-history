export default function getCarsThroughUsersCars(userId) {
  const usersFromCars = (JSON.parse(localStorage.getItem('usersCars')) || []).filter(userCar => userCar.userId === userId);
  const filteredCars = JSON.parse(localStorage.getItem('cars')).filter(car => usersFromCars.find(userCar => userCar.carId === car.id));
  return filteredCars.map(filteredCar => {
    const userCar = usersFromCars.find(userCar => userCar.carId === filteredCar.id)
    return {
      ...filteredCar,
      startDate: userCar.startDate,
      endDate: userCar.endDate
    }
  });
}