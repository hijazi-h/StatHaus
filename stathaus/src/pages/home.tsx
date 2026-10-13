// Landing page
// import React from "react";

export default function Home() {
    return (
        <div>
            {/* // Header */}
            <h1>StatHaus</h1>
            <section className="lander">
                <div className="lander-main">
                    <h2>Easily Track Your Jobs and Applications</h2>
                    <p className="lander-desc">
                        StatHaus was developed with simplicity in mind to streamline jobs and applications.
                        Avoiding overhead and extra clutter, our UI makes it easy to track and input any jobs
                        regardless of position or industry. 
                    </p>
                </div>

                <section className="tutorial">
                    <div className="tut-desc">
                        {/* //insert tutorial video in... */}
                    </div>
                </section>
            </section>
            <nav className="nav-bg">
                <ul className="nav-list">
                    <li>
                        <a href="#tracker">Track A Job</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            
        </div>
    );

  
}

