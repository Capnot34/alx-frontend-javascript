import ClassRoom from './0-classroom';

function initializeRooms() {
  const Rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  return Rooms;
}
export default initializeRooms;
