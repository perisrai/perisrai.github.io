import React from "react";
import styled from "styled-components";

import HomeImage from "../../assets/img/svgs/about.svg";

const MyHome = styled.div`
  background: #c9dde5;
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  position: relative;
  width: 500px;
  margin: 130px auto;
`;

const Image = styled.img`
  height: 60vh;
  margin: auto;
`;

const Text = styled.h4`
  position: absolute;
  top: 35%;
  color: #1d6eb8;
  width: 200px;
  line-height: 2.5;
  margin: 0 100px;
`;

const Home = () => {
  return (
    <MyHome>
      <div>
        <Content>
          <Image src={HomeImage} alt='home' />
          <Text>
            Hello there, see you soon!!!!{" "}
            <i className='em em-sunflower' aria-label='SUNFLOWER'></i>
          </Text>
        </Content>
      </div>
    </MyHome>
  );
};

export default Home;
