import React from "react";
import Hero from "../component/Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import RooomsContainer from "./RoomsContainer";
export const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Go to Home
          </Link>
        </Banner>
      </Hero>
      <RooomsContainer />
    </>
  );
};
export default Rooms;
