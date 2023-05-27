import React from "react";

function Page() {
  return (
    <main>
      <article>
        <div className="hero has-before" id="home">
          <div className="container">
            <p className="section-subtitle">Enjoy The Games</p>

            <h1 className="h1 title hero-title">
              Epic Games Made For <br /> True Gamers!
            </h1>

            <a href="#" className="btn" data-btn>
              Join With Us
            </a>

            <div className="hero-banner">
              <img
                src="/public/hero-banner.png"
                width="850"
                height="414"
                alt="hero banner"
                className="w-100"
              />

              <img
                src="/public/hero-banner-bg.png"
                alt=""
                className="hero-banner-bg"
              />
            </div>
          </div>
        </div>

        <section
          className="section upcoming"
          aria-labelledby="upcoming-label"
          id="tournament"
        >
          <div className="container">
            <p
              className="section-subtitle"
              id="upcoming-label"
              data-reveal="bottom"
            >
              Upcoming Matches
            </p>

            <h2 className="h2 section-title" data-reveal="bottom">
              Battles Extreme <br /> Masters{" "}
              <span className="span">Tournament</span>
            </h2>

            <p className="section-text" data-reveal="bottom">
              Our success in creating business solutions is due in large part to
              our talented and highly committed team.
            </p>

            <ol className="upcoming-list">
              <li className="upcoming-item">
                <div
                  className="upcoming-card left has-before"
                  data-reveal="left"
                >
                  <img
                    src="/public/team-logo-1.png"
                    width="86"
                    height="81"
                    loading="lazy"
                    alt="Purple Death Cadets"
                    className="card-banner"
                  />

                  <h3 className="h3 card-title">Purple Death Cadets</h3>

                  <div className="card-meta">Group 04 | Match 06th</div>
                </div>

                <div className="upcoming-time" data-reveal="bottom">
                  <time className="time" dateTime="10:00">
                    10:00
                  </time>

                  <time className="date" dateTime="2022-05-25">
                    25TH May 2024
                  </time>

                  <div className="social-wrapper">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-youtube"></ion-icon>
                    </a>

                    <a href="#" className="social-link">
                      <ion-icon name="logo-twitch"></ion-icon>
                    </a>
                  </div>
                </div>

                <div
                  className="upcoming-card right has-before"
                  data-reveal="right"
                >
                  <img
                    src="/public/team-logo-2.png"
                    width="86"
                    height="81"
                    loading="lazy"
                    alt="Trigger Brain Squad"
                    className="card-banner"
                  />

                  <h3 className="h3 card-title">Trigger Brain Squad</h3>

                  <div className="card-meta">Group 04 | Match 06th</div>
                </div>
              </li>

              <li className="upcoming-item">
                <div
                  className="upcoming-card left has-before"
                  data-reveal="left"
                >
                  <img
                    src="/public/team-logo-3.png"
                    width="86"
                    height="81"
                    loading="lazy"
                    alt="The Black Hat Hackers"
                    className="card-banner"
                  />

                  <h3 className="h3 card-title">The Black Hat Hackers</h3>

                  <div className="card-meta">Group 05 | Match 02nd</div>
                </div>

                <div className="upcoming-time" data-reveal="bottom">
                  <time className="time" dateTime="12:30">
                    12:30
                  </time>

                  <time className="date" dateTime="2024-01-10">
                    10TH Jan 2024
                  </time>

                  <div className="social-wrapper">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-youtube"></ion-icon>
                    </a>

                    <a href="#" className="social-link">
                      <ion-icon name="logo-twitch"></ion-icon>
                    </a>
                  </div>
                </div>

                <div
                  className="upcoming-card right has-before"
                  data-reveal="right"
                >
                  <img
                    src="/public/team-logo-4.png"
                    width="86"
                    height="81"
                    loading="lazy"
                    alt="Your Worst Nightmare"
                    className="card-banner"
                  />

                  <h3 className="h3 card-title">Your Worst Nightmare</h3>

                  <div className="card-meta">Group 05 | Match 02nd</div>
                </div>
              </li>

              <li className="upcoming-item">
                <div
                  className="upcoming-card left has-before"
                  data-reveal="left"
                >
                  <img
                    src="/public/team-logo-5.png"
                    width="86"
                    height="81"
                    loading="lazy"
                    alt="Witches And Quizards"
                    className="card-banner"
                  />

                  <h3 className="h3 card-title">Witches And Quizards</h3>

                  <div className="card-meta">Group 02 | Match 03rd</div>
                </div>

                <div className="upcoming-time" data-reveal="bottom">
                  <time className="time" dateTime="04:20">
                    04:20
                  </time>

                  <time className="date" dateTime="2024-12-15">
                    15th Dec 2024
                  </time>

                  <div className="social-wrapper">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-youtube"></ion-icon>
                    </a>

                    <a href="#" className="social-link">
                      <ion-icon name="logo-twitch"></ion-icon>
                    </a>
                  </div>
                </div>

                <div
                  className="upcoming-card right has-before"
                  data-reveal="right"
                >
                  <img
                    src="/public/team-logo-6.png"
                    width="86"
                    height="81"
                    loading="lazy"
                    alt="Resting Bitch Faces"
                    className="card-banner"
                  />

                  <h3 className="h3 card-title">Resting Bitch Faces</h3>

                  <div className="card-meta">Group 02 | Match 03rd</div>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="section news"
          aria-label="our latest news"
          id="news"
        >
          <div className="container">
            <p className="section-subtitle" data-reveal="bottom">
              What's On Our Mind
            </p>

            <h2 className="h2 section-title" data-reveal="bottom">
              News And <span className="span">Headlines</span>
            </h2>

            <p className="section-text" data-reveal="bottom">
              Our success in creating business solutions is due in large part to
              our talented and highly committed team.
            </p>

            <ul className="news-list">
              <li data-reveal="bottom">
                <div className="news-card">
                  <figure
                    className="card-banner img-holder"
                    style={{width: 600, height: 400 }}
                  >
                    <img
                      src="/public/news-1.jpg"
                      width="600"
                      height="400"
                      loading="lazy"
                      alt="Innovative Business All Over The World."
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <a href="#" className="card-tag">
                      Business
                    </a>

                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <ion-icon
                          name="calendar-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <time className="card-meta-text" dateTime="2022-01-01">
                          Jan 01 2022
                        </time>
                      </li>

                      <li className="card-meta-item">
                        <ion-icon
                          name="person-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <p className="card-meta-text">Elliot Alderson</p>
                      </li>
                    </ul>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Innovative Business All Over The World.
                      </a>
                    </h3>

                    <p className="card-text">
                      Financial experts support or help you to to find out which
                      way you can raise your funds more...
                    </p>

                    <a href="#" className="link has-before">
                      Read More
                    </a>
                  </div>
                </div>
              </li>

              <li data-reveal="bottom">
                <div className="news-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ width: 600, height: 400}}
                  >
                    <img
                      src="/public/news-2.jpg"
                      width="600"
                      height="400"
                      loading="lazy"
                      alt="How To Start Initiating An Startup In Few Days."
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <a href="#" className="card-tag">
                      Startup
                    </a>

                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <ion-icon
                          name="calendar-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <time className="card-meta-text" dateTime="2022-01-01">
                          Jan 01 2022
                        </time>
                      </li>

                      <li className="card-meta-item">
                        <ion-icon
                          name="person-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <p className="card-meta-text">Elliot Alderson</p>
                      </li>
                    </ul>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        How To Start Initiating An Startup In Few Days.
                      </a>
                    </h3>

                    <p className="card-text">
                      Financial experts support or help you to to find out which
                      way you can raise your funds more...
                    </p>

                    <a href="#" className="link has-before">
                      Read More
                    </a>
                  </div>
                </div>
              </li>

              <li data-reveal="bottom">
                <div className="news-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ width: 600, height: 400}}
                  >
                    <img
                      src="/public/news-3.jpg"
                      width="600"
                      height="400"
                      loading="lazy"
                      alt="Financial Experts Support Help You To Find Out."
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <a href="#" className="card-tag">
                      Finance
                    </a>

                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <ion-icon
                          name="calendar-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <time className="card-meta-text" dateTime="2022-01-01">
                          Jan 01 2022
                        </time>
                      </li>

                      <li className="card-meta-item">
                        <ion-icon
                          name="person-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <p className="card-meta-text">Elliot Alderson</p>
                      </li>
                    </ul>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Financial Experts Support Help You To Find Out.
                      </a>
                    </h3>

                    <p className="card-text">
                      Financial experts support or help you to to find out which
                      way you can raise your funds more...
                    </p>

                    <a href="#" className="link has-before">
                      Read More
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Page;
