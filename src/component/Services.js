import React, { Component } from "react";
import Title from "./Tittle";
import { FaCocktail, FaBeer, FaShuttleVan, FaHiking } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Best Drinks items",
        info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cum.`,
      },
      {
        icon: <FaBeer />,
        title: "Free Beer",
        info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cum.`,
      },
      {
        icon: <FaShuttleVan />,
        title: "Best Riding Service",
        info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cum.`,
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cum.`,
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Our services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
