import { useEffect } from "react";

import profile from "./assets/images/profile.png";
import client_1 from "/src/assets/images/clients/client_1.png";
import client_2 from "/src/assets/images/clients/client_2.png";
import client_3 from "/src/assets/images/clients/client_3.png";
import client_4 from "/src/assets/images/clients/client_4.png";
import man1 from "/src/assets/images/man1.jpg";
import work1 from "/src/assets/images/works/work1.jpg";
import work2 from "/src/assets/images/works/work2.jpg";
import work3 from "/src/assets/images/works/work3.jpg";
import work4 from "/src/assets/images/works/work4.jpg";
import work5 from "/src/assets/images/works/work5.jpg";
import work6 from "/src/assets/images/works/work6.jpg";
import work7 from "/src/assets/images/works/work7.jpg";
import work8 from "/src/assets/images/works/work8.jpg";
import blog1 from "/src/assets/images/blog/blog1.jpg";
import blog2 from "/src/assets/images/blog/blog2.jpg";
import blog3 from "/src/assets/images/blog/blog3.jpg";


// Import local scripts
import "/src/assets/js/scripts.js";
import Customizer from "./components/customizer";

function App() {

  useEffect(() => {
    setTimeout(() => {
      var preload = document.querySelector('.preloader');
      var spinner = preload?.querySelector('.spinner');
      if(spinner && preload.style.display != "none"){
        preload.style.display = "none";
        spinner.style.display = "none";
      }
    }, 1000)
  }, [])
  return (
    <>
      <div className="page new-skin">

        {/* preloader */}
        <div className="preloader">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* background */}
        <div className="background gradient">
          <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        </div>

        {/* Container */}
        <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">

          {/* Header */}
          <header className="header">

            {/* menu */}
            <div className="top-menu">
              <ul>
                <li className="active">
                  <a href="#about-card">
                    <span className="icon ion-person"></span>
                    <span className="link">About</span>
                  </a>
                </li>
                <li>
                  <a href="#resume-card">
                    <span className="icon ion-android-list"></span>
                    <span className="link">Resume</span>
                  </a>
                </li>
                <li>
                  <a href="#works-card">
                    <span className="icon ion-paintbrush"></span>
                    <span className="link">Works</span>
                  </a>
                </li>
                <li>
                  <a href="#blog-card">
                    <span className="icon ion-chatbox-working"></span>
                    <span className="link">Blog</span>
                  </a>
                </li>
                <li>
                  <a href="#contacts-card">
                    <span className="icon ion-at"></span>
                    <span className="link">Contact</span>
                  </a>
                </li>
              </ul>
            </div>

          </header>

          {/* Card - Started */}
          <div className="card-started" id="home-card">

            {/*   Profile
            */}
            <div className="profile">

              {/* profile image */}
              <div className="slide"></div>

              {/* profile photo */}
              <div className="image">
                <img src={profile} alt="" />
              </div>

              {/* profile titles */}
              <div className="title">Sachinthaka Ayeshmantha</div>
              <div className="subtitle">Web Designer</div>

              {/* profile socials */}
              <div className="social">
                <a target="_blank" href="https://dribbble.com/"><span className="fab fa-dribbble"></span></a>
                <a target="_blank" href="https://twitter.com/"><span className="fab fa-twitter"></span></a>
                <a target="_blank" href="https://github.com/"><span className="fab fa-github"></span></a>
                <a target="_blank" href="https://www.spotify.com/"><span className="fab fa-spotify"></span></a>
                <a target="_blank" href="https://stackoverflow.com/"><span className="fab fa-stack-overflow"></span></a>
              </div>

              {/* profile buttons */}
              <div className="lnks">
                <a href="#" className="lnk">
                  <span className="text">Download CV</span>
                  <span className="ion ion-archive"></span>
                </a>
                <a href="#" className="lnk discover">
                  <span className="text">Contact Me</span>
                  <span className="arrow"></span>
                </a>
              </div>

            </div>

          </div>

          {/* Card - About */}
          <div className="card-inner animated active" id="about-card">
            <div className="card-wrap">

              {/* About */}
              <div className="content about">

                {/* title */}
                <div className="title">About Me</div>

                {/* content */}
                <div className="row">
                  <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                    <div className="text-box">
                      <p>
                        I am Sachinthaka Ayeshmantha, web designer from USA, California. I have rich experience in
                        web site design and building and customization, also I am good at wordpress.
                        I love to talk with you about our unique.
                      </p>
                    </div>
                    <div className="info-list">
                      <ul>
                        <li><strong>Age . . . . .</strong> 24</li>
                        <li><strong>Residence . . . . .</strong> USA</li>
                        <li><strong>Freelance . . . . .</strong> Available</li>
                        <li><strong>Address . . . . .</strong> California, USA</li>
                      </ul>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>

              </div>

              {/* Services */}
              <div className="content services">

                {/* title */}
                <div className="title">My Services</div>

                {/* content */}
                <div className="row service-items border-line-v">

                  {/* service item */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                    <div className="service-item">
                      <div className="icon"><span className="ion ion-code"></span></div>
                      <div className="name">Web Development</div>
                      <p>
                        Modern and mobile-ready website that will help you
                        reach all of your marketing.
                      </p>
                    </div>
                  </div>

                  {/* service item */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                    <div className="service-item">
                      <div className="icon"><span className="ion ion-music-note"></span></div>
                      <div className="name">Music Writing</div>
                      <p>
                        Music copying, transcription, arranging and composition services.
                      </p>
                    </div>
                  </div>

                  {/* service item */}
                  <div className="col col-d-6 col-t-6 col-m-12">
                    <div className="service-item">
                      <div className="icon"><span className="ion ion-speakerphone"></span></div>
                      <div className="name">Advetising</div>
                      <p>
                        Advertising services include television, radio, print, mail and web.
                      </p>
                    </div>
                  </div>

                  {/* service item */}
                  <div className="col col-d-6 col-t-6 col-m-12">
                    <div className="service-item">
                      <div className="icon"><span className="ion ion-ios-game-controller-b"></span></div>
                      <div className="name">Game Development</div>
                      <p>
                        Developing memorable and unique mobile android, ios games.
                      </p>
                    </div>
                  </div>

                  <div className="clear"></div>
                </div>

              </div>

              {/* Price Tables */}
              <div className="content pricing">

                {/* title */}
                <div className="title">Pricing</div>

                {/* content */}
                <div className="row pricing-items">

                  {/* pricing item */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="pricing-item">
                      <div className="icon"><i className="ion ion-speedometer speed-basic"></i></div>
                      <div className="name">Basic</div>
                      <div className="amount">
                        <span className="dollar">$</span>
                        <span className="number">22</span>
                        <span className="period">hour</span>
                      </div>
                      <div className="feature-list">
                        <ul>
                          <li>Web Development</li>
                          <li>Advetising</li>
                          <li>Game Development</li>
                          <li className="disable">Music Writing</li>
                          <li className="disable">Photography <strong>new</strong></li>
                        </ul>
                      </div>
                      <div className="lnks">
                        <a href="#" className="lnk">
                          <span className="text">Buy Basic</span>
                          <i className="ion ion-speedometer speed-basic"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* pricing item */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="pricing-item">
                      <div className="icon"><i className="ion ion-speedometer"></i></div>
                      <div className="name">Pro</div>
                      <div className="amount">
                        <span className="dollar">$</span>
                        <span className="number">48</span>
                        <span className="period">hour</span>
                      </div>
                      <div className="feature-list">
                        <ul>
                          <li>Web Development</li>
                          <li>Advetising</li>
                          <li>Game Development</li>
                          <li>Music Writing</li>
                          <li>Photography <strong>new</strong></li>
                        </ul>
                      </div>
                      <div className="lnks">
                        <a href="#" className="lnk">
                          <span className="text">Buy Pro</span>
                          <i className="ion ion-speedometer"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="clear"></div>
                </div>

              </div>

              {/* Fun Fact */}
              <div className="content fuct">

                {/* title */}
                <div className="title">Fun Fact</div>

                {/* content */}
                <div className="row fuct-items">

                  {/* fuct item */}
                  <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                    <div className="fuct-item">
                      <div className="icon"><span className="ion ion-disc"></span></div>
                      <div className="name">80 Albumes Listened</div>
                    </div>
                  </div>

                  {/* fuct item */}
                  <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                    <div className="fuct-item">
                      <div className="icon"><span className="ion ion-trophy"></span></div>
                      <div className="name">15 Awards Won</div>
                    </div>
                  </div>

                  {/* fuct item */}
                  <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                    <div className="fuct-item">
                      <div className="icon"><span className="ion ion-coffee"></span></div>
                      <div className="name">1 000 Cups of coffee</div>
                    </div>
                  </div>

                  {/* fuct item */}
                  <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                    <div className="fuct-item">
                      <div className="icon"><span className="ion ion-flag"></span></div>
                      <div className="name">10 Countries Visited</div>
                    </div>
                  </div>

                  <div className="clear"></div>
                </div>

              </div>

              {/* Clients */}
              <div className="content clients">

                {/* title */}
                <div className="title">Clients</div>

                {/* content */}
                <div className="row client-items">

                  {/* client item */}
                  <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                    <div className="client-item">
                      <div className="image">
                        <a target="_blank" href="https://www.google.com">
                          <img src={client_1} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* client item */}
                  <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                    <div className="client-item">
                      <div className="image">
                        <a target="_blank" href="https://www.google.com">
                          <img src={client_2} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* client item */}
                  <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                    <div className="client-item">
                      <div className="image">
                        <a target="_blank" href="https://www.google.com">
                          <img src={client_3} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* client item */}
                  <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                    <div className="client-item">
                      <div className="image">
                        <a target="_blank" href="https://www.google.com">
                          <img src={client_4} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="clear"></div>
                </div>

              </div>

              {/* Testimonials */}
              <div className="content testimonials">

                {/* title */}
                <div className="title">Testimonials</div>

                {/* content */}
                <div className="row testimonials-items">

                  {/* client item */}
                  <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                    <div className="revs-carousel default-revs">
                      <div className="owl-carousel">
                        <div className="item">
                          <div className="revs-item">
                            <div className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className="user">
                              <div className="img"><img src={man1} alt="" /></div>
                              <div className="info">
                                <div className="name">Helen Floyd</div>
                                <div className="company">Art Director</div>
                              </div>
                              <div className="clear"></div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="revs-item">
                            <div className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className="user">
                              <div className="img"><img src={man1} alt="" /></div>
                              <div className="info">
                                <div className="name">Robert Chase</div>
                                <div className="company">CEO</div>
                              </div>
                              <div className="clear"></div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="revs-item">
                            <div className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className="user">
                              <div className="img"><img src={man1} alt="" /></div>
                              <div className="info">
                                <div className="name">Helen Floyd</div>
                                <div className="company">Art Director</div>
                              </div>
                              <div className="clear"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="clear"></div>
                </div>

              </div>

            </div>
          </div>

          {/* Card - Resume */}
          <div className="card-inner" id="resume-card">
            <div className="card-wrap">

              {/* Resume */}
              <div className="content resume">

                {/* title */}
                <div className="title">Resume</div>

                {/* content */}
                <div className="row">

                  {/* experience */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="resume-title border-line-h">
                      <div className="icon"><i className="ion ion-briefcase"></i></div>
                      <div className="name">Experience</div>
                    </div>
                    <div className="resume-items">
                      <div className="resume-item border-line-h active">
                        <div className="date">2013 - Present</div>
                        <div className="name">Art Director</div>
                        <div className="company">Facebook Inc.</div>
                        <p>
                          Collaborate with creative and development teams on the execution of ideas.
                        </p>
                      </div>
                      <div className="resume-item border-line-h">
                        <div className="date">2011 - 2012</div>
                        <div className="name">Front-end Developer</div>
                        <div className="company">Google Inc.</div>
                        <p>
                          Monitored technical aspects of the front-end delivery for several projects.
                        </p>
                      </div>
                      <div className="resume-item">
                        <div className="date">2009 - 2010</div>
                        <div className="name">Senior Developer</div>
                        <div className="company">Abc Inc.</div>
                        <p>
                          Optimize website performance using latest technology.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* education */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="resume-title border-line-h">
                      <div className="icon"><i className="ion ion-university"></i></div>
                      <div className="name">Education</div>
                    </div>
                    <div className="resume-items">
                      <div className="resume-item border-line-h">
                        <div className="date">2006 - 2008</div>
                        <div className="name">Art University</div>
                        <div className="company">New York</div>
                        <p>
                          Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri
                        </p>
                      </div>
                      <div className="resume-item border-line-h">
                        <div className="date">2005 - 2006</div>
                        <div className="name">Programming Course</div>
                        <div className="company">Paris</div>
                        <p>
                          Coursework - Git, WordPress, Javascript, iOS, Android.
                        </p>
                      </div>
                      <div className="resume-item">
                        <div className="date">2004 - 2005</div>
                        <div className="name">Web Design Course</div>
                        <div className="company">London</div>
                        <p>
                          Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="clear"></div>
                </div>

              </div>

              {/* Skills */}
              <div className="content skills">

                {/* title */}
                <div className="title">My Skills</div>

                {/* content */}
                <div className="row">

                  {/* skill item */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="skills-list">
                      <div className="skill-title border-line-h">
                        <div className="icon"><i className="ion ion-easel"></i></div>
                        <div className="name">Design</div>
                      </div>
                      <ul>
                        <li className="border-line-h">
                          <div className="name">Web Design</div>
                          <div className="progress">
                            <div className="percentage" style={{width:'90%'}}></div>
                          </div>
                        </li>
                        <li className="border-line-h">
                          <div className="name">Write Music</div>
                          <div className="progress">
                            <div className="percentage" style={{width:'65%'}}></div>
                          </div>
                        </li>
                        <li className="border-line-h">
                          <div className="name">Photoshop</div>
                          <div className="progress">
                            <div className="percentage" style={{width:'75%'}}></div>
                          </div>
                        </li>
                        <li>
                          <div className="name">Graphic Design</div>
                          <div className="progress">
                            <div className="percentage" style={{width:'85%'}}></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* skill item */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="skills-list dotted">
                      <div className="skill-title border-line-h">
                        <div className="icon"><i className="ion ion-flag"></i></div>
                        <div className="name">Languages</div>
                      </div>
                      <ul>
                        <li className="border-line-h">
                          <div className="name">English</div>
                          <div className="progress">
                            <div className="percentage" style={{width:'90%'}}></div>
                          </div>
                        </li>
                        <li className="border-line-h">
                          <div className="name">German</div>
                          <div className="progress">
                            <div className="percentage" style={{width:'60%'}}></div>
                          </div>
                        </li>
                        <li className="border-line-h">
                          <div className="name">Italian</div>
                          <div className="progress">
                            <div className="percentage" style={{width:'30%'}}></div>
                          </div>
                        </li>
                        <li>
                          <div className="name">French</div>
                          <div className="progress ">
                            <div className="percentage" style={{width:'70%'}}></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* skill item */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="skills-list circles">
                      <div className="skill-title border-line-h">
                        <div className="icon"><i className="ion ion-code"></i></div>
                        <div className="name">Coding</div>
                      </div>
                      <ul>
                        <li>
                          <div className="name">WordPress</div>
                          <div className="progress p90">
                            <span>90%</span>
                          </div>
                        </li>
                        <li>
                          <div className="name">PHP / MYSQL</div>
                          <div className="progress p75">
                            <span>75%</span>
                          </div>
                        </li>
                        <li>
                          <div className="name">Angular / JavaScript</div>
                          <div className="progress p85">
                            <span>85%</span>
                          </div>
                        </li>
                        <li>
                          <div className="name">HTML / CSS</div>
                          <div className="progress p95">
                            <span>95%</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* skill item */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="skills-list list">
                      <div className="skill-title border-line-h">
                        <div className="icon"><i className="ion ion-android-list"></i></div>
                        <div className="name">Knowledge</div>
                      </div>
                      <ul>
                        <li>
                          <div className="name">Website hosting</div>
                        </li>
                        <li>
                          <div className="name">iOS and android apps</div>
                        </li>
                        <li>
                          <div className="name">Create logo design</div>
                        </li>
                        <li>
                          <div className="name">Design for print</div>
                        </li>
                        <li>
                          <div className="name">Modern and mobile-ready</div>
                        </li>
                        <li>
                          <div className="name">Advertising services include</div>
                        </li>
                        <li>
                          <div className="name">Graphics and animations</div>
                        </li>
                        <li>
                          <div className="name">Search engine marketing</div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="clear"></div>
                </div>

              </div>

            </div>
          </div>

          {/* Card - Works */}
          <div className="card-inner" id="works-card">
            <div className="card-wrap">

              {/* Works */}
              <div className="content works">

                {/* title */}
                <div className="title">Recent Works</div>

                {/* filters */}
                <div className="filter-menu filter-button-group">
                  <div className="f_btn active">
                    <label><input type="radio" name="fl_radio" value="grid-item" />All</label>
                  </div>
                  <div className="f_btn">
                    <label><input type="radio" name="fl_radio" value="photo" />Photo</label>
                  </div>
                  <div className="f_btn">
                    <label><input type="radio" name="fl_radio" value="video" />Video</label>
                  </div>
                  <div className="f_btn">
                    <label><input type="radio" name="fl_radio" value="music" />Music</label>
                  </div>
                  <div className="f_btn">
                    <label><input type="radio" name="fl_radio" value="design" />Design</label>
                  </div>
                </div>

                {/* content */}
                <div className="row grid-items border-line-v">

                  {/* work item photo */}
                  <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href={work1} className="has-popup-image">
                          <img src={work1} alt="" />
                          <span className="info">
                            <span className="ion ion-image"></span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href={work1} className="name has-popup-image">Motorcycle Helmet</a>
                        <div className="category">Photo</div>
                      </div>
                    </div>
                  </div>

                  {/* work item video */}
                  <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href="https://vimeo.com/97102654" className="has-popup-video">
                          <img src={work2} alt="" />
                          <span className="info">
                            <span className="ion ion-videocamera"></span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="https://vimeo.com/97102654" className="name has-popup-video">Minimalism Shapes</a>
                        <div className="category">Video</div>
                      </div>
                    </div>
                  </div>

                  {/* work item music */}
                  <div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true" className="has-popup-music">
                          <img src={work3} alt="" />
                          <span className="info">
                            <span className="ion ion-music-note"></span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="#" className="name has-popup">Staircase</a>
                        <div className="category">Music</div>
                      </div>
                    </div>
                  </div>

                  {/* work item design */}
                  <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href="#popup-1" className="has-popup-media">
                          <img src={work4} alt="" />
                          <span className="info">
                            <span className="ion ion-images"></span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="#popup-1" className="name has-popup-media">Mobile Application</a>
                        <div className="category">Design</div>
                      </div>
                      <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                        <div className="content">
                          <div className="image">
                            <img src={work4} alt="" />
                          </div>
                          <div className="desc">
                            <div className="post-box">
                              <h1>Mobile Application</h1>
                              <div className="blog-detail">Design</div>
                              <div className="blog-content">
                                <p>
                                  So striking at of to welcomed resolved. Northward by described up household therefore
                                  attention. Excellence decisively nay man yet impression for contrasted remarkably.
                                </p>
                                <p>
                                  Forfeited you engrossed but gay sometimes explained. Another as studied it to evident.
                                  Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining
                                  determine few her two cordially admitting old.
                                </p>
                                <blockquote>
                                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                  Curae; Pellentesque suscipit.
                                </blockquote>
                                <p>
                                  Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh
                                  removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on.
                                  Increasing sufficient everything men him admiration unpleasing sex.
                                </p>
                                <ul className="list-style">
                                  <li>Greatest properly off ham exercise all.</li>
                                  <li>Unsatiable invitation its possession nor off.</li>
                                  <li>All difficulty estimating unreserved increasing the solicitude.</li>
                                </ul>
                                <p>
                                  Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means
                                  up civil do an offer wound of.
                                </p>
                              </div>
                              <a href="#" className="button">
                                <span className="text">View Project</span>
                                <span className="arrow"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* work item photo */}
                  <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href={work5} className="has-popup-image">
                          <img src={work5} alt="" />
                          <span className="info">
                            <span className="ion ion-image"></span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href={work5} className="name has-popup-image">Gereal Travels</a>
                        <div className="category">Photo</div>
                      </div>
                    </div>
                  </div>

                  {/* work item music */}
                  <div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true" className="has-popup-music">
                          <img src={work8} alt="" />
                          <span className="info">
                            <span className="ion ion-music-note"></span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="#" className="name has-popup">Daylight Entrance</a>
                        <div className="category">Music</div>
                      </div>
                    </div>
                  </div>

                  {/* work item video */}
                  <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href="https://vimeo.com/97102654" className="has-popup-video">
                          <img src={work6} alt="" />
                          <span className="info">
                            <span className="ion ion-videocamera"></span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="https://vimeo.com/97102654" className="name has-popup-video">Architecture</a>
                        <div className="category">Video</div>
                      </div>
                    </div>
                  </div>

                  {/* work item design */}
                  <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href="#popup-2" className="has-popup-media">
                          <img src={work7} alt="" />
                          <span className="info">
                            <span className="ion ion-images"></span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="#popup-2" className="name has-popup-media">Social Website</a>
                        <div className="category">Design</div>
                      </div>
                      <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                        <div className="content">
                          <div className="image">
                            <img src={work7} alt="" />
                          </div>
                          <div className="desc">
                            <div className="post-box">
                              <h1>Mobile Application</h1>
                              <div className="blog-detail">Design</div>
                              <div className="blog-content">
                                <p>
                                  So striking at of to welcomed resolved. Northward by described up household therefore
                                  attention. Excellence decisively nay man yet impression for contrasted remarkably.
                                </p>
                                <p>
                                  Forfeited you engrossed but gay sometimes explained. Another as studied it to evident.
                                  Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining
                                  determine few her two cordially admitting old.
                                </p>
                                <blockquote>
                                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                  Curae; Pellentesque suscipit.
                                </blockquote>
                                <p>
                                  Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh
                                  removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on.
                                  Increasing sufficient everything men him admiration unpleasing sex.
                                </p>
                                <ul className="list-style">
                                  <li>Greatest properly off ham exercise all.</li>
                                  <li>Unsatiable invitation its possession nor off.</li>
                                  <li>All difficulty estimating unreserved increasing the solicitude.</li>
                                </ul>
                                <p>
                                  Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means
                                  up civil do an offer wound of.
                                </p>
                              </div>
                              <a href="#" className="button">
                                <span className="text">View Project</span>
                                <span className="arrow"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="clear"></div>
                </div>

              </div>

            </div>
          </div>

          {/* Card - Blog */}
          <div className="card-inner blog" id="blog-card">
            <div className="card-wrap">

              {/* Blog */}
              <div className="content blog">

                {/* title */}
                <div className="title">Latest Posts</div>

                {/* content */}
                <div className="row border-line-v">

                  {/* blog item */}
                  <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href="blog-post.html">
                          <img src={blog1} alt="" />
                          <span className="info">
                            <span className="ion ion-document-text"></span>
                          </span>
                          <span className="date"><strong>20</strong>Jun</span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="blog-post.html" className="name">By spite about do of do allow blush</a>
                        <div className="category">Design</div>
                      </div>
                    </div>
                  </div>

                  {/* blog item */}
                  <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href="blog-post.html">
                          <img src={blog2} alt="" />
                          <span className="info">
                            <span className="ion ion-document-text"></span>
                          </span>
                          <span className="date"><strong>19</strong>Jun</span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="blog-post.html" className="name">Two Before Arrow Not Relied</a>
                        <div className="category">Coding</div>
                      </div>
                    </div>
                  </div>

                  {/* blog item */}
                  <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
                    <div className="box-item">
                      <div className="image">
                        <a href="blog-post.html">
                          <img src={blog3} alt="" />
                          <span className="info">
                            <span className="ion ion-document-text"></span>
                          </span>
                          <span className="date"><strong>20</strong>Jun</span>
                        </a>
                      </div>
                      <div className="desc">
                        <a href="blog-post.html" className="name">By spite about do of do allow blush</a>
                        <div className="category">Travel</div>
                      </div>
                    </div>
                  </div>

                  <div className="clear"></div>
                </div>

              </div>

            </div>
          </div>

          {/* Card - Contacts */}
          <div className="card-inner contacts" id="contacts-card">
            <div className="card-wrap">

              {/* Conacts Info */}
              <div className="content contacts">

                {/* title */}
                <div className="title">Get in Touch</div>

                {/* content */}
                <div className="row">
                  <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                    <div className="map" id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.4955576984407!2d79.99089007365399!3d7.06839631659425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDQnMDYuMiJOIDc5wrA1OSczNi41IkU!5e0!3m2!1sen!2slk!4v1734184953841!5m2!1sen!2slk" width="100%" height="100%" style={{border:"0", boxShadow: '#0000002b 2px 2px 10px 5px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="info-list">
                      <ul>
                        <li><strong>Address . . . . .</strong> California, USA</li>
                        <li><strong>Email . . . . .</strong> adlard@example.com</li>
                        <li><strong>Phone . . . . .</strong> +123 654 78900</li>
                        <li><strong>Freelance . . . . .</strong> Available</li>
                      </ul>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>

              </div>

              {/* Contact Form */}
              <div className="content contacts">

                {/* title */}
                <div className="title">Contact Form</div>

                {/* content */}
                <div className="row">
                  <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                    <div className="contact_form">
                      <form id="cform" method="post">
                        <div className="row">
                          <div className="col col-d-6 col-t-6 col-m-12">
                            <div className="group-val">
                              <input type="text" name="name" placeholder="Full Name" />
                            </div>
                          </div>
                          <div className="col col-d-6 col-t-6 col-m-12">
                            <div className="group-val">
                              <input type="text" name="email" placeholder="Email Address" />
                            </div>
                          </div>
                          <div className="col col-d-12 col-t-12 col-m-12">
                            <div className="group-val">
                              <textarea name="message" placeholder="Your Message"></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="align-left">
                          <a href="#" className="button" onClick={() => {$('#cform').submit(); return false;}}>
                            <span className="text">Send Message</span>
                            <span className="arrow"></span>
                          </a>
                        </div>
                      </form>
                      <div className="alert-success">
                        <p>Thanks, your message is sent successfully.</p>
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Theme Customizer */}
        <Customizer />
      </div>
    </>
  )
}

export default App
