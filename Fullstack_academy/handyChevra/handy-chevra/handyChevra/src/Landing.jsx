import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
export default function Landing() {
  return (
    <section className="landing">
      <div className="landing__wrapper">
        <figure className="img__wrapper">
          <img
            className="landing__img"
            src="./src/assets/handyChevraPerson.png"
            alt=""
          />
        </figure>
        <div className="wrapper">
          <p className="landing__header">ONE CALL FIX ALL!</p>
          <p className="landing__para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            ipsa autem quia harum? Labore iste praesentium quibusdam,
            perspiciatis adipisci nam quam culpa in sequi modi beatae aliquid
            veniam maiores ea.
          </p>
        </div>
      </div>
    </section>
  );
}
