import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "./Contex";
import StyledHero from "./StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  //componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room is found </h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <section>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
        </section>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <p>price: {price}tk </p>
            <p>size:{size} </p>
            <p>
              max-capacity:
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}{" "}
            </p>
            <p>pets:{pets ? "Pets allowed" : "not allowed"} </p>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
        <article className="room-extras">
          <h3>Extras</h3>
          <ul className="extras">
            {extras.map((extra, index) => {
              return <li key={index}> - {extra} </li>;
            })}
          </ul>
        </article>
      </section>
    );
  }
}
