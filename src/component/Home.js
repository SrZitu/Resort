import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import Services from "./Services";
import FeaturedRoom from "./FeaturedRoom";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="A1 Rooms " subtitle="deluxe rooms starting from $600">
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </>
  );
}
