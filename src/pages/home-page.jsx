import React from 'react';
import { Link } from 'react-router-dom';
import imgHero from '../assets/img/hero.png';

export function HomePage() {
    return (
        <section className="homepage">
            <div className="hero flex">

                <div className="hero-content flex column">
                    <div className="hero-content-wrapper">
                        <h1>Memo helps teams move work forward.</h1>
                        <p>
                            Collaborate, manage projects, and reach new productivity peaks. From high rises to the home
                            office, the way your team works is unique accomplish it all with Memo.
                        </p>
                        <Link to="/workspace"> Start Demo </Link>
                    </div>
                </div>
                <div className="hero-img">
                    <img className="hero-img" src={imgHero} alt="" />
                </div>
            </div>
        </section>
    )
}
