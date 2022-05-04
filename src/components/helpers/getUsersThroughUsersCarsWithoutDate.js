export default function getUsersThroughUsersCarsWithoutDate(carId) {
  const usersFromcars = (JSON.parse(localStorage.getItem('usersCars')) || []).filter(userCar => userCar.carId === carId);
  const filteredUsers = JSON.parse(localStorage.getItem('users')).filter(user => usersFromcars.find(userCar => userCar.userId === user.id));
  return filteredUsers;
}