import React from "react";
import { Link } from "react-router-dom";
import imgHero from "../assets/img/hero.png";

// export const HomePage = () => {
//   return (
//     <section className="homepage">
//       <div className="hero flex">
//         <div className="hero-content flex column">
//           <div className="hero-content-wrapper">
//             <h1>Nemo helps teams move work forward.</h1>
//             <p>
//               Collaborate, manage projects, and reach new productivity peaks.
//               From high rises to the home office, the way your team works is
//               unique accomplish it all with Nemo.
//             </p>

//             <a className="demo-btn" href="/workspace">Start Demo</a>
//           </div>
//         </div>
//         <div className="hero-img">
//           <img className="hero-img" src={imgHero} alt="" />
//         </div>
//       </div>
//     </section>
//   );
// };

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
          <div className="homepage-hero">
            <img className="hero-img" src={imgHero} alt="" />
          </div>
        </section>
      </section>
    </section>
  );
};

