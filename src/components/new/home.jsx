import React from "react";
import styled from "styled-components";

import AboutSvg from "../../assets/img/svgs/about.svg";
import WorkSvg from "../../assets/img/svgs/work.svg";
import ContactSvg from "../../assets/img/svgs/contact.svg";

const MyHome = styled.div`
  background: #c9dde5;
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  top: 1rem;
  width: 100%;
  height: 20%;
  justify-content: space-evenly;
  padding-left: 30%;
`;

const About = styled.a`
  position: relative;
  width: 100px;
`;

const AboutText = styled.h4`
  text-align: center;
  position: absolute;
  top: 40px;
  width: 100%;
  font-size: 18px;
  color: #1d6eb8;
`;

const Work = styled.a`
  position: relative;
  width: 100px;
`;

const WorkText = styled.h4`
  text-align: center;
  position: absolute;
  top: 40px;
  width: 100%;
  font-size: 18px;
  color: #ba885a;
`;

const Contact = styled.a`
  position: relative;
  width: 100px;
`;

const ContactText = styled.h4`
  text-align: center;
  position: absolute;
  top: 40px;
  width: 100%;
  font-size: 18px;
  color: #e5e5e5;
`;

const Home = () => {
  return (
    <MyHome>
      <div>
        <Header>
          <About href='#about'>
            <img src={AboutSvg} alt='about' />
            <AboutText>About</AboutText>
          </About>
          <Work href='#work'>
            <img src={WorkSvg} alt='work' />
            <WorkText>Work</WorkText>
          </Work>
          <Contact href='contact'>
            <img src={ContactSvg} alt='contact' />
            <ContactText>Contact</ContactText>
          </Contact>
        </Header>
      </div>
    </MyHome>
  );
};

export default Home;
