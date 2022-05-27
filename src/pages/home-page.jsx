import React from "react";
import { Link } from "react-router-dom";
import imgHero from "../assets/img/hero.png";


import {PopoverAttach} from "../cmps/board-app/task/add-attachment";

export const HomePage = () => {

  return (
    <section className="homepage-container">
      <section className="homepage-wrapper">
        <section className="homepage">
          <div className="homepage-text">
            <h1 className="homepage-title">Nemo helps teams move work forward.</h1>
            <p className="homepage-paragraph" >Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
            <button className="demo-btn">Sign up—it’s free!</button>
          </div>

          <PopoverAttach/>
          <div className="homepage-hero">
            <img className="hero-img" src={imgHero} alt="" />
           
          </div>
        </section>
      </section>
    </section>
  );
};

