import React, { useContext } from "react";
import { RoomContext } from "../context/context";

import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";


const RoomContainer = () => {

    const { loading, sortedRooms, rooms } = useContext(RoomContext);

    if (loading) {
        return <Loading />;
    };

    return (
        <>
            <RoomsFilter rooms={ rooms } />
            <RoomsList rooms={ sortedRooms } />
        </>
    );
};
  
export default RoomContainer;
