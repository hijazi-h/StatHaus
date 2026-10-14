// Landing page
export default function Home() {
    return (
        <div>
            {/* // Header */}
            <h1 className="text-4xl font-bold">StatHaus</h1>

            {/* Navbar */}
            <nav className="nav-bg flex justify-center gap-6">
                <ul className="nav-list flex gap-6">
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


            <section className="lander">
                <div className="lander-main max-w-3xl mx-auto px-6 py-12 mb-4 space-y-4">
                    <h2>Easily Track Your Jobs and Applications</h2>
                    <p className="lander-desc text-2xl, text-lg, font-semibold, text-gray-600 mb-4">
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
            
            
        </div>
    );

  
}

