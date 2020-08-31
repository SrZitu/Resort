import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { withRoomConsumer } from "./Contex";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { Loading, sortedRooms, rooms } = context;
  if (Loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}
export default withRoomConsumer(RoomsContainer);
