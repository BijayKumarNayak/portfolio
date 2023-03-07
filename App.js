import React, { useState } from "react";
import "./App.css";
import { Link } from "react-scroll";

function App() {
  const [name, setName] = useState("");
  console.log(name);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showmenu, setShowmenu] = useState(false);

  const handlesubmit=(e)=>{
    e.preventdefault();
  }

  return (
    <div id="main">
      <div id="home">
        <nav>
          <h3>
            <span style={{ color: "aqua" }}>The</span>Coder
          </h3>
          <div className="tog" onClick={() => setShowmenu(!showmenu)}>
            <i class="fa-solid fa-bars"></i>
          </div>
          <ul id="sidemenu" className={showmenu ? " show" : "hide"}>
            <li>
              <Link to="home" spy={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="skill" spy={true}>
                Skill
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <div className="container-left">
            <div className="textarea">
              <h1>
                <i>
                  Hi,I'm <span style={{ color: "cyan" }}>Bijay</span>
                </i>{" "}
              </h1>

              <p>Webdeveloper & Designer</p>
            </div>
          </div>
          <div className="container-right">
            <img src={require("./userimg.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="About content" id="about">
        <div className="content-left">
          <img src={require("./aboutimg.png")} alt="" />
        </div>
        <div className="content-right">
          <div className="text">
            <h3> About Me</h3>
            <p>
              My self Bijay Kumar Nayak,and I completed my graduation in Bsc
              computer science from Bhadrak autonomous college and completed my
              internship in frontend development at Whizzo Infotech Pvt. Ltd. I
              am flexible, reliable and possess excellent time keeping skills. I
              am an enthusiastic, self-motivated, reliable, responsible and hard
              working person. I am a mature team worker and adaptable to all
              challenging situations. I am able to work well both in a team
              environment as well as using own initiative.
            </p>
            <div className="details">
              <p>Name: Bijay Kumar Nayak</p>
              <p>Age: 23</p>
              <p>Email: bijayanayak558@gmail.com</p>
              <p>Phone: 8327766226</p>
              <p>Address: Odisha,India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="skill content" id="skill">
        <h3>Services</h3>
        <div className="card-container">
          <div className="card">
            <span className="material-symbols-outlined icon">language</span>
            <h4>WebDesign</h4>
            <p>
              the most common methods for designing websites that work well both
              on desktop and mobile are responsive and adaptive design.
            </p>
          </div>
          <div className="card">
            <span className="material-symbols-outlined icon">
              developer_mode
            </span>
            <h4>WebDevelopment</h4>
            <p>
              Web development can range from developing a simple single static
              page of plain text to complex web applications, electronic
              businesses, and social network services.
            </p>
          </div>

          <div className="card">
            <span className="material-symbols-outlined icon">
              phone_android
            </span>
            <h4>AppDesign</h4>
            <p>
              App design combines the user interface (UI) and user experience
              (UX). While UI lends itself to the overall style of the app
              (including the colors, fonts, and general look and feel), UX
              focuses on the actual functionality and usability.
            </p>
          </div>
        </div>
      </div>

      <div className="contact content" id="contact">
        <div className="contact-left">
          <h3>Contact Me</h3>
          <div className="contact-way">
            <i class="fa-regular fa-paper-plane"></i>
            <p>bijayanayak558@gmail.com</p>
          </div>
          <div className="contact-way">
            <i className="fa-sharp fa-solid fa-phone"></i>
            <p>8327766226</p>
          </div>
          <div className="contact-way">
            <Link><i className="fa-brands fa-github"></i></Link>
            <Link><i className="fa-brands fa-facebook"></i></Link>
            <Link><i className="fa-brands fa-instagram"></i></Link>
            <Link><i className="fa-brands fa-twitter"></i></Link>
            <Link to=""><i className="fa-brands fa-linkedin"></i></Link>
          </div>
        </div>
        <div className="contact-right">
          <form action="" onSubmit={handlesubmit}>
            <input
              type="text"
              value={name}
              name="Name"
              placeholder="Your Name"
              required
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              value={email}
              name="Email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
