import React from "react";
import "./homepage.css";
import { Button } from "@mui/material";

function Intro() {
  const sendMail = () => {
    window.location.href =
      "mailto:neokkj11@gmail.com?subject=Get%20in%20Touch&body=Hello";
  };

  const downloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1Sm0MEfR0izmn0SBXBHRgs_kDJPo65Onv/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <div className="into-con">
        <div className="img-con">
          <img
            src="https://raw.githubusercontent.com/myself-NEO/icon-store/96d07545611d05fbe17efe2011a77bedc16ca85c/social/dark-theme/avatar.svg"
            alt="Keshav"
          />
        </div>
        <div className="description-con">
          <span className="description">
            I do code and make content about it!
          </span>
        </div>
        <div className="about">
          <span>
            I am a seasoned full-stack software engineer with over 3 years of
            professional experience, specializing in backend development. My
            expertise lies in crafting robust and scalable SaaS-based
            applications.
          </span>
        </div>
        <div className="btn-con">
          <Button
            className=" primary-btn btn-left"
            variant="contained"
            onClick={sendMail}
          >
            Get in touch
          </Button>
          <Button
            className="secondary-btn"
            variant="outlined"
            sx={{
              borderColor: "#ffffff",
            }}
            onClick={downloadCV}
          >
            Download CV
          </Button>
        </div>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <>
      <div className="container">
        <Intro />
      </div>
    </>
  );
}

export default HomePage;
