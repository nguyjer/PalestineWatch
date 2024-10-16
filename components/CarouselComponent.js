// components/CarouselComponent.js
import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselComponent() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/partition-un.jpg"
          alt="UN Partition"
          style={{ height: "50vh" }}
        />
        <Carousel.Caption>
          <p>1947: The United Nations divides Palestine</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/6-day-war.webp"
          alt="6 Day War"
          style={{ height: "50vh" }}
        />
        <Carousel.Caption>
          <p>1967: 6-day War against Israel over West Bank and Gaza</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/camp-david.jpg"
          alt="Camp David"
          style={{ height: "50vh" }}
        />
        <Carousel.Caption>
          <p>2000: President Clinton hosts peace talks</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/passover-massacre.jpg"
          alt="Passover Massacre"
          style={{ height: "50vh" }}
        />
        <Carousel.Caption>
          <p>2002: Terrorist attack kills 30 Israelis</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/israel-hamas.jpg"
          alt="Israel-Hamas Conflict"
          style={{ height: "50vh" }}
        />
        <Carousel.Caption>
          <p>2021: Conflict between Gaza and Israel escalates</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
